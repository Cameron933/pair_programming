const debounce = (func: any, delay: number) => {
  let timerId: any;
  return function (...args: any) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default debounce;
