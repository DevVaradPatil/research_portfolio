import { projects, personalInfo } from "../data/content";
import { FadeIn, Stagger, StaggerItem, HoverCard, SectionHeader } from "./motion/Motion";
import { CodeIcon, ExternalIcon, ImageWithFallback } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Projects"
          intro="AI/ML work spanning multi-agent GenAI systems, computer vision, and climate and air-quality forecasting."
        />

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.08}>
          {projects.map((project) => (
            <StaggerItem key={project.title} className="h-full">
              <HoverCard
                as="article"
                hoverY={-6}
                className="group h-full flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200"
              >
                <div className="h-48 bg-gray-100 overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    placeholder="Preview coming soon"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {project.tag && (
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      {project.tag}
                    </p>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.links?.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-gray-100 flex flex-wrap gap-x-5 gap-y-2">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
                        >
                          {link.label}
                          <ExternalIcon />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Pointer to the SDE / web portfolio */}
        <FadeIn className="mt-12 text-center">
          <a
            href={personalInfo.sdePortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 hover:text-gray-900 transition-colors"
          >
            <CodeIcon className="w-4 h-4" />
            More full-stack & web projects (Snikrz, Spotify 2.0, DJB WhatsApp CRM) on my Dev Portfolio
            <ExternalIcon />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
