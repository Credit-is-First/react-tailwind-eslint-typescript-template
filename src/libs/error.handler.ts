import { AsyncThunkPayloadCreator, AsyncThunkPayloadCreatorReturnValue } from '@reduxjs/toolkit'
import { GetThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk'
import { AxiosError } from 'axios'

import { AppDispatch, RootState } from 'src/store'

export type AsyncThunkConfig = {
  rejectValue: ErrorResponse
  getState: () => RootState
  dispatch: AppDispatch
}

export type ErrorResponse = {
  message?: string
  errors?: {
    [name: string]: { message: string; type: string }[]
  }
}

export default function errorHandler<Returned, DataParam>(
  actionAsync: (args: DataParam, thunkAPI: GetThunkAPI<AsyncThunkConfig>) => Promise<Returned>,
): AsyncThunkPayloadCreator<Returned, DataParam, AsyncThunkConfig> {
  const callback: (
    args: DataParam,
    thunkAPI: GetThunkAPI<AsyncThunkConfig>,
  ) => AsyncThunkPayloadCreatorReturnValue<Returned, AsyncThunkConfig> = async (
    args: DataParam,
    thunkApi: GetThunkAPI<AsyncThunkConfig>,
  ) => {
    const { rejectWithValue } = thunkApi
    return actionAsync(args, thunkApi).catch((error: AxiosError<ErrorResponse>) => {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data)
      } else {
        return rejectWithValue({
          message: error.message,
        })
      }
    })
  }
  return callback
}
