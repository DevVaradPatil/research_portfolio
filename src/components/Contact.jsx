import { personalInfo } from "../data/content";
import { motion } from "framer-motion";
import { EASE } from "./motion/ease";
import { FadeIn, Stagger, StaggerItem, HoverCard, SectionHeader } from "./motion/Motion";
import { CodeIcon, DocumentIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const linkCards = [
  { href: personalInfo.linkedin, label: "LinkedIn", sub: "Connect with me", Icon: LinkedInIcon },
  { href: personalInfo.github, label: "GitHub", sub: "View my code", Icon: GitHubIcon },
  { href: personalInfo.sdePortfolio, label: "Dev Portfolio", sub: "Full-stack & web work", Icon: CodeIcon },
];

const cardClass =
  "group h-full bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 text-center";

function CardIcon({ Icon }) {
  return (
    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-gray-900 group-hover:text-white transition-colors">
      <Icon />
    </div>
  );
}

export default function Contact() {
  const emails = [personalInfo.email, personalInfo.instituteEmail];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          center
          title="Get in Touch"
          intro="I'm always open to discussing research collaborations, AI/ML opportunities, or interesting projects. Feel free to reach out!"
        />

        <FadeIn className="-mt-10 mb-12 flex flex-wrap justify-center gap-3">
          <motion.a
            href={personalInfo.resume}
            download
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            <DownloadIcon />
            Download Resume
          </motion.a>
          <motion.a
            href={personalInfo.fullCv}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            <DocumentIcon />
            Full CV
          </motion.a>
        </FadeIn>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" staggerChildren={0.1}>
          {/* Email card holds two addresses, so it's a card of links rather than one link */}
          <StaggerItem className="h-full">
            <HoverCard className={cardClass}>
              <CardIcon Icon={MailIcon} />
              <h3 className="font-medium text-gray-900 mb-1">Email</h3>
              {emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block text-sm text-gray-600 hover:text-gray-900 hover:underline underline-offset-4 break-all"
                >
                  {email}
                </a>
              ))}
            </HoverCard>
          </StaggerItem>

          {linkCards.map(({ href, label, sub, Icon }) => (
            <StaggerItem key={label} className="h-full">
              <HoverCard
                as="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${cardClass}`}
              >
                <CardIcon Icon={Icon} />
                <h3 className="font-medium text-gray-900 mb-1">{label}</h3>
                <p className="text-sm text-gray-600">{sub}</p>
              </HoverCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
