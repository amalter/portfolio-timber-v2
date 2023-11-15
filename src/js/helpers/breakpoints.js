//helper variables
export const breakpoints = {
  xxs: 320,
  xs: 375,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

//helper functions
export function checkBreakpoint(breakpoint) {
  function checkWindowWidth() {
    return window.innerWidth >= breakpoint;
  }

  // Attach the checkWindowWidth function to the window resize event
  window.addEventListener("resize", checkWindowWidth);

  // Check the window width on page load
  return checkWindowWidth();
}
