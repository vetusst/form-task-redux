import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form'
import NotificationSlice from './NotificationSlice';


export const store = configureStore({
  reducer: {
    form: formReducer,
    notification: NotificationSlice.reducer
  },
});
