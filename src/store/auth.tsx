import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import errorHandler from 'src/libs/error.handler'

import { RootState } from 'src/store'

import { login } from 'src/apis/auth.api'

export type AuthState = {
  userdata?: unknown
  token: string | null
}

const initialState: AuthState = {
  token: null,
}

const loginAction = createAsyncThunk('auth/login', errorHandler(login))

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.userdata = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.token = action.payload.token
    })
  },
})

export const { setUsername } = authSlice.actions

export const selectToken = (state: RootState) => state.auth.token

export default authSlice.reducer
