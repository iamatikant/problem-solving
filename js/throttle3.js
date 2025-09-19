// Imagine this function logs the current window width
const handleResize = () => {
  console.log('Resizing:', window.innerWidth);
};

// We wrap it in a throttle function with a 1-second delay
const throttledResize = throttle(handleResize, 1000);

// Attach it to the window's resize event
window.addEventListener('resize', throttledResize);

// Now, if you resize the window rapidly, you will see "Resizing..."
// logged at most once every second, not hundreds of times.

const throttle = function (callback, delay) {
  let past = 0;
  return function () {
    const now = Date.now();
    if (now - past > delay) {
      callback();
      past = now;
    }
  };
};
