import { research } from "../data/content";
import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "./motion/Motion";

const EASE = [0.22, 1, 0.36, 1];

export default function Research() {
  return (
    <section id="research" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Research & Publications
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

        {/* Research Cards */}
        <Stagger className="space-y-12" staggerChildren={0.15}>
          {research.map((paper, index) => (
            <StaggerItem key={index}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="bg-gray-100 h-64 lg:h-auto overflow-hidden">
                    <motion.img
                      src={paper.image}
                      alt={`${paper.title} - Architecture Diagram`}
                      className="w-full h-full object-contain bg-white"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-400 p-8">
                      <div className="text-center">
                        <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
                        </svg>
                        <p className="text-sm">Research Architecture Diagram</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-2">{paper.venue}</p>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {paper.title}
                        </h3>
                      </div>
                      {paper.link && (
                        <motion.a
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2, ease: EASE }}
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-900 transition-colors"
                          aria-label="View Publication"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      )}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {paper.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">
                        Key Contributions
                      </h4>
                      <ul className="space-y-2">
                        {paper.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-gray-400 mt-0.5">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {paper.techStack.map((tech, tIndex) => (
                        <motion.span
                          key={tIndex}
                          whileHover={{ y: -2, backgroundColor: "#e5e7eb" }}
                          transition={{ duration: 0.2, ease: EASE }}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
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
