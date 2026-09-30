// Shared easing + viewport for every framer-motion animation on the site.
export const EASE = [0.22, 1, 0.36, 1];

// Trigger as soon as the element's top is 80px inside the viewport. An `amount`
// threshold would make tall grids (projects on mobile) wait far too long.
export const VIEWPORT = { once: true, margin: "0px 0px -80px 0px" };
