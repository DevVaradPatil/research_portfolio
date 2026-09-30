import { aboutContent, education, achievements, positions, certifications } from "../data/content";
import { FadeIn, Stagger, StaggerItem, HoverCard, SectionHeader } from "./motion/Motion";

const highlightGroups = [
  { title: "Achievements", items: achievements },
  { title: "Positions of Responsibility", items: positions },
  { title: "Certifications", items: certifications },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title="About Me" />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio + highlights */}
          <FadeIn>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">{aboutContent.bio}</p>

            <HoverCard className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 space-y-6">
              {highlightGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                    {group.title}
                  </h3>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-gray-400 mt-1 flex-shrink-0">
                          <CheckIcon />
                        </span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </HoverCard>
          </FadeIn>

          {/* Education */}
          <div>
            <FadeIn delay={0.1}>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
                Education
              </h3>
            </FadeIn>

            <Stagger className="space-y-6" staggerChildren={0.12}>
              {education.map((edu) => (
                <StaggerItem
                  key={edu.institution}
                  className="relative pl-6 border-l-2 border-gray-200 hover:border-gray-400 transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-300"></div>
                  <HoverCard
                    hoverY={-3}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200"
                  >
                    <p className="text-sm text-gray-500 mb-1">{edu.duration}</p>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">{edu.degree}</h4>
                    <p className="text-gray-600 mb-2">{edu.institution}</p>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium text-gray-700">CPI:</span> {edu.gpa}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">Focus: {edu.focus}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
