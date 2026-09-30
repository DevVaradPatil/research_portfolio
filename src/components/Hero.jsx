import { personalInfo, heroContent } from "../data/content";
import { motion } from "framer-motion";
import { EASE } from "./motion/ease";
import { CodeIcon, DocumentIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const buttonMotion = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.2, ease: EASE },
};

const socials = [
  { href: personalInfo.linkedin, label: "LinkedIn", Icon: LinkedInIcon, external: true },
  { href: personalInfo.github, label: "GitHub", Icon: GitHubIcon, external: true },
  { href: `mailto:${personalInfo.email}`, label: "Email", Icon: MailIcon },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="order-2 md:order-1"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-500 text-sm uppercase tracking-wider mb-4"
            >
              {heroContent.greeting}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4 leading-tight"
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 mb-6">
              {personalInfo.title}
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed mb-8 max-w-lg">
              {heroContent.intro}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <motion.a
                {...buttonMotion}
                href="#research"
                className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                View Research
              </motion.a>
              <motion.a
                {...buttonMotion}
                href={personalInfo.resume}
                download
                className="px-6 py-3 bg-white border border-gray-300 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
              >
                <DownloadIcon />
                Resume
              </motion.a>
              <motion.a
                {...buttonMotion}
                href={personalInfo.fullCv}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border border-gray-300 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
              >
                <DocumentIcon />
                Full CV
              </motion.a>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-gray-100"
            >
              {socials.map(({ href, label, Icon, external }) => (
                <motion.a
                  key={label}
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              ))}
              <a
                href={personalInfo.sdePortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                <CodeIcon className="w-4 h-4" />
                Full-stack work? See my Dev Portfolio →
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image: one entrance animation only */}
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name}, AI/ML Engineer and Researcher`}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              {/* Decorative offset frame */}
              <motion.div
                aria-hidden="true"
                className="absolute -z-10 top-4 left-4 w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-gray-200"
                initial={{ opacity: 0, x: -8, y: -8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
