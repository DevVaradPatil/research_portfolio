import { experience } from "../data/content";
import { motion } from "framer-motion";
import { EASE, VIEWPORT } from "./motion/ease";
import { Stagger, StaggerItem, HoverCard, SectionHeader } from "./motion/Motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title="Experience" />

        {/* Timeline */}
        <div className="relative">
          <motion.div
            aria-hidden="true"
            className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 1, ease: EASE }}
          />

          <Stagger className="space-y-12" staggerChildren={0.18}>
            {experience.map((exp, index) => {
              const left = index % 2 === 0;
              return (
                <StaggerItem
                  key={exp.company}
                  className={`relative flex flex-col gap-8 ${left ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot: centered by a static wrapper so framer's scale doesn't
                      overwrite the translate */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-white border-4 border-gray-300"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={VIEWPORT}
                      transition={{ duration: 0.4, ease: EASE, delay: 0.2 }}
                    />
                  </div>

                  <div className={`md:w-1/2 pl-8 ${left ? "md:pl-0 md:pr-12" : "md:pl-12"}`}>
                    <HoverCard
                      className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 max-w-md ${
                        left ? "md:ml-auto" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain p-2"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{exp.company}</h3>
                          <p className="text-sm text-gray-500">{exp.duration}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 font-medium mb-3">{exp.role}</p>

                      <ul className="space-y-2">
                        {exp.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-gray-400 mt-0.5 flex-shrink-0">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </HoverCard>
                  </div>

                  {/* Empty half for the alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
