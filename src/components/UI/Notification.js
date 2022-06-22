import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from './Notification.module.css'

const Notification = () => {
  const {notifications} = useSelector(state => state.notification);
  const [notification, setNotification] = useState({ type: "", message: "" });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (notifications.length > 0) {
      setNotification(notifications[notifications.length - 1]);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [notifications]);


  return show ? (
    <div className={`${classes['notification-wrapper']}`}>
        <span className={`${notification.type ? classes.success : classes.error} `}>{notification.message || ""}</span>
    </div>
  ) : null;
};

export default Notification;