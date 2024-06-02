import React, { useEffect, useState } from 'react';
import { Menu_API } from '../utils/constant';

export const useFetchViaURL = (decodedUrl) => {
  const [responseJSON, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMenu = async () => {
    try {
      const urlObj = new URL(decodedUrl);
      const path = urlObj.pathname.replace(/^\/|\/$/g, ''); // Remove leading/trailing slashes
      const response = await fetch(Menu_API + path);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);
  return { responseJSON, loading, error };
};
