import { motion } from "framer-motion";
import { EASE, VIEWPORT } from "./ease";

// NOTE: never put Tailwind `transition-all` / `transform` classes on elements that
// framer animates (y, scale). CSS would re-ease every frame and the motion stutters.
// Use `transition-[box-shadow,border-color]` or `transition-colors` instead.

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
      viewport={VIEWPORT}
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
      viewport={VIEWPORT}
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
 * Hover-lift card. Entrance comes from the surrounding FadeIn/StaggerItem, not from here,
 * so animations never stack.
 */
export function HoverCard({ as: Tag = "div", hoverY = -4, className = "", children, ...rest }) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      className={`transition-[box-shadow,border-color] duration-300 ${className}`}
      whileHover={{ y: hoverY }}
      transition={{ duration: 0.3, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Section title + animated underline + optional intro paragraph.
 */
export function SectionHeader({ title, intro, center = false }) {
  return (
    <FadeIn className={`mb-16 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">{title}</h2>
      <motion.div
        className={`h-1 w-16 bg-gray-900 ${center ? "mx-auto origin-center" : "origin-left"}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
      />
      {intro && (
        <p className={`text-gray-600 mt-6 max-w-2xl ${center ? "mx-auto" : ""}`}>{intro}</p>
      )}
    </FadeIn>
  );
}
