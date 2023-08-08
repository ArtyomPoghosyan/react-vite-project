import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';


export const store = configureStore({
  reducer: {
    
  },
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>>
export const useAppDispatch: () => AppDispatch = useDispatch

