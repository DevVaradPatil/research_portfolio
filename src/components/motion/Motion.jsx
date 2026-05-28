import { motion } from "framer-motion";

// Easings & shared timing
const EASE = [0.22, 1, 0.36, 1];

// --- Variants ---------------------------------------------------------------

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// --- Helpers ----------------------------------------------------------------

const viewport = { once: true, amount: 0.2 };

/**
 * Fades in + slides up when scrolled into view. Drop-in wrapper.
 */
export function FadeIn({
  as: Tag = "div",
  delay = 0,
  y = 24,
  className = "",
  children,
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Container that staggers its direct <StaggerItem> children when in view.
 */
export function Stagger({
  as: Tag = "div",
  className = "",
  delayChildren = 0.05,
  staggerChildren = 0.1,
  children,
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren, delayChildren } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  as: Tag = "div",
  className = "",
  y = 20,
  children,
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Card with subtle hover lift + entrance animation. Use inside <Stagger> or standalone.
 */
export function MotionCard({
  as: Tag = "div",
  className = "",
  hoverY = -4,
  inStagger = false,
  delay = 0,
  children,
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div;
  const entrance = inStagger
    ? {
        variants: {
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
        },
      }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport,
        transition: { duration: 0.5, ease: EASE, delay },
      };

  return (
    <MotionTag
      className={className}
      whileHover={{ y: hoverY, transition: { duration: 0.25, ease: EASE } }}
      {...entrance}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export { motion };
