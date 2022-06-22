import { createSlice } from "@reduxjs/toolkit";

export const NotificationSlice = createSlice({
  name: "notification",
  initialState: {
    notifications: []
  },
  reducers: {
    createNotification: (state, action) => {
      state.notifications.push({
        message: action.payload.message,
        type: action.payload.type
      });
    }
  },

});

export const NotificationActions = NotificationSlice.actions;

export default NotificationSlice;