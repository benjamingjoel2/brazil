// Animation features for <LazyMotion>, split into their own chunk so they load after first paint.
// domMax (not domAnimation) because the team cards use layout animations.
import { domMax } from "framer-motion";
export default domMax;
