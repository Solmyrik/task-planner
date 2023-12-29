import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({ tasks }) => {
  useEffect(() => {
    tasks.forEach((task) => {
      const notificationTime = new Date(task.dateTime);
      const currentTime = new Date();
      console.log(notificationTime, currentTime);

      if (notificationTime > currentTime && task.active) {
        const timeUntilNotification = notificationTime - currentTime;
        console.log(timeUntilNotification);
        setTimeout(() => {
          toast.info(`Пора выполнить задачу: ${task.title}`, {
            position: 'top-right',
            autoClose: 15000,
            hideProgressBar: false,
            closeOnClick: true,
            // pauseOnHover true,
            draggable: true,
            progress: undefined,
          });
        }, timeUntilNotification);
      }
    });
  }, []);

  return <ToastContainer />;
};

export default Notification;
