import { skills } from "../data/content";
import { Stagger, StaggerItem, HoverCard, SectionHeader } from "./motion/Motion";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title="Skills & Technologies" />

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.08}>
          {Object.entries(skills).map(([category, skillList]) => (
            <StaggerItem key={category} className="h-full">
              <HoverCard className="h-full bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
