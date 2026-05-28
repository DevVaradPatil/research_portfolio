import { aboutContent, education, achievements } from "../data/content";
import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem, MotionCard } from "./motion/Motion";

const EASE = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            About Me
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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio Section */}
          <FadeIn>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {aboutContent.bio}
            </p>

            {/* Achievements */}
            <MotionCard className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Achievements
              </h3>
              <Stagger as="ul" className="space-y-3" staggerChildren={0.07}>
                {achievements.map((achievement, index) => (
                  <StaggerItem as="li" key={index} className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-600">{achievement}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </MotionCard>
          </FadeIn>

          {/* Education Section */}
          <FadeIn delay={0.15}>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Education
            </h3>

            <Stagger className="space-y-6" staggerChildren={0.12}>
              {education.map((edu, index) => (
                <StaggerItem
                  key={index}
                  className="relative pl-6 border-l-2 border-gray-200 hover:border-gray-400 transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-300"></div>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all"
                  >
                    <p className="text-sm text-gray-500 mb-1">{edu.duration}</p>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-gray-500">
                        <span className="font-medium text-gray-700">GPA:</span> {edu.gpa}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Focus: {edu.focus}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
