import { useEffect, useState } from 'react';

export const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);

  /**
   *  Check if online? true : false;
   */

  // addEventListener version
  // Define the event listener functions
  const handleOnline = () => {
    console.log('You are now connected to the network.');
    setStatus(true);
  };

  const handleOffline = () => {
    console.log('You are now disconnected from the network.');
    setStatus(false);
  };

  // Register and clean up the event listeners
  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Clean up the event listeners on component unmount
    // return () => {
    //   window.removeEventListener("online", handleOnline);
    //   window.removeEventListener("offline", handleOffline);
    // };
  }, []);

  return status;
};
