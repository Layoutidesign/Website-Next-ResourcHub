import { useState, useEffect } from 'react';

const useWidth = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    const widthHandler = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', widthHandler);
    return () => {
      window.removeEventListener('resize', widthHandler);
    };
  }, []);

  useEffect(() => {
    if(window) { 
      setWidth(window?.innerWidth)
    }
  }, [])
  return width;
};

export default useWidth;