import { skills } from "../data/content";
import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "./motion/Motion";

const EASE = [0.22, 1, 0.36, 1];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <motion.div
            className="h-1 bg-gray-900 origin-left"
            style={{ width: "4rem" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          />
        </FadeIn>

        {/* Skills Grid */}
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.08}>
          {Object.entries(skills).map(([category, skillList]) => (
            <StaggerItem key={category} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="h-full bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, sIndex) => (
                    <motion.span
                      key={sIndex}
                      whileHover={{ y: -2, scale: 1.04 }}
                      transition={{ duration: 0.2, ease: EASE }}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
