import { breakpoints } from "./helper.js";
import { runFunctionBreakpoint } from "./helper.js";
import { smoothScroll } from "./global/smooth-scroll.js";
import { eyeBall } from "./pages/front-page/portfolio.js";
import { homeNav } from "./pages/front-page/home-nav.js";

//global
smoothScroll();
//Function calls
eyeBall();
runFunctionBreakpoint(breakpoints.md, homeNav);
