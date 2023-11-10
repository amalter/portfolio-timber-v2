import { breakpoints } from "./helper.js";
import { runFunctionBreakpoint } from "./helper.js";
import { eyeBall } from "./pages/front-page/portfolio.js";
import { mainNav } from "./pages/front-page/main-nav.js";

//Function calls
eyeBall();
runFunctionBreakpoint(breakpoints.md, mainNav);
