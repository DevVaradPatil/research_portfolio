import { projects } from "../data/content";
import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "./motion/Motion";

const EASE = [0.22, 1, 0.36, 1];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Projects
          </h2>
          <motion.div
            className="h-1 bg-gray-900 origin-left"
            style={{ width: "4rem" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          />
          <p className="text-gray-600 mt-4 max-w-2xl">
            A selection of AI/ML projects showcasing practical applications of
            language models, NLP, and intelligent systems.
          </p>
        </FadeIn>

        {/* Project Grid */}
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.08}>
          {projects.map((project, index) => (
            <StaggerItem key={index} className="h-full">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="group h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all"
              >
                {/* Project Image */}
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={`${project.title} - Project Screenshot`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-400">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 10H6v-2h8v2zm4-4H6v-2h12v2z" />
                    </svg>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-justify text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, tIndex) => (
                      <motion.span
                        key={tIndex}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2, ease: EASE }}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
