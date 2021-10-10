import React from 'react';

export default function useDimension(initialState) {
  // eslint-disable-next-line consistent-return
  const dimension = () => {
    if (initialState === 'width') return window.innerWidth;
    if (initialState === 'height') return window.innerHeight;
  };
  const [value, setValue] = React.useState(dimension());
  React.useEffect(() => {
    const handleResize = () => setValue(dimension());
    window.addEventListener('resize', handleResize);
    return () => window.addEventListener('resize', handleResize);
    // eslint-disable-next-line
  }, [value]);

  return [value];
}
