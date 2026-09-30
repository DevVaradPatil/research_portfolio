import { personalInfo } from "../data/content";
import { motion } from "framer-motion";
import { EASE, VIEWPORT } from "./motion/ease";
import { CodeIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const socials = [
  { href: personalInfo.linkedin, label: "LinkedIn", Icon: LinkedInIcon, external: true },
  { href: personalInfo.github, label: "GitHub", Icon: GitHubIcon, external: true },
  { href: personalInfo.sdePortfolio, label: "Dev Portfolio", Icon: CodeIcon, external: true },
  { href: `mailto:${personalInfo.email}`, label: "Email", Icon: MailIcon },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg mb-1">{personalInfo.name}</p>
            <p className="text-gray-400 text-sm">© {currentYear} All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            {socials.map(({ href, label, Icon, external }) => (
              <motion.a
                key={label}
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ duration: 0.2, ease: EASE }}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={label}
                title={label}
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          <div className="text-center md:text-right text-sm text-gray-400">
            <p>{personalInfo.location}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
