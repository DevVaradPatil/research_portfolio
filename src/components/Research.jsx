import { research } from "../data/content";
import { Stagger, StaggerItem, HoverCard, SectionHeader } from "./motion/Motion";
import { ExternalIcon, ImageWithFallback } from "./icons";

export default function Research() {
  return (
    <section id="research" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title="Research & Publications" />

        <Stagger className="space-y-12" staggerChildren={0.15}>
          {research.map((paper) => (
            <StaggerItem key={paper.title}>
              <HoverCard
                as="article"
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="bg-white h-64 lg:h-auto lg:min-h-80 overflow-hidden">
                    <ImageWithFallback
                      src={paper.image}
                      alt={`${paper.title}: architecture diagram`}
                      placeholder="Research figure coming soon"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-2 flex flex-wrap items-center gap-2">
                          {paper.venue}
                          {paper.status && (
                            <span className="px-2 py-0.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full">
                              {paper.status}
                            </span>
                          )}
                        </p>
                        <h3 className="text-xl font-semibold text-gray-900">{paper.title}</h3>
                        {paper.advisor && (
                          <p className="text-sm text-gray-500 mt-2">Advisor: {paper.advisor}</p>
                        )}
                      </div>
                      {paper.link && (
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-900 transition-colors"
                          aria-label={`View publication: ${paper.title}`}
                        >
                          <ExternalIcon className="w-6 h-6" />
                        </a>
                      )}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">{paper.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Key Contributions</h4>
                      <ul className="space-y-2">
                        {paper.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-gray-400 mt-0.5">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {paper.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
