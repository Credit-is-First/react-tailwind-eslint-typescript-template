import { configureStore, isFulfilled, isRejectedWithValue, Middleware } from '@reduxjs/toolkit'

import eventEmitter from 'src/libs/event.emitter'

import authReducer from './auth'

/*
type MiddlewareApi = {
  dispatch: AppDispatch
  getState: () => RootState
}
*/

const middleware: Middleware = (/* middlewareApi: MiddlewareApi */) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    eventEmitter.emit(action.type, action.payload)
  } else if (isFulfilled(action)) {
    eventEmitter.emit(action.type, action.payload)
  }

  return next(action)
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().prepend(middleware)
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
