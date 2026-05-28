// Portfolio content data - Easy to update in one place

export const personalInfo = {
  name: "Varad Patil",
  title: "AI/ML Engineer • Researcher",
  email: "varadapatil123@gmail.com",
  linkedin: "https://linkedin.com/in/varad-patil-web-dev",
  github: "https://github.com/devVaradPatil/",
  location: "Sangli, India",
  profileImage: "/images/varad.jpeg",
  resume: "/VARAD_PATIL_RESUME_AI.pdf",
};

export const heroContent = {
  greeting: "Hello, I'm",
  intro:
    "I build intelligent AI systems that bridge the gap between research and real-world applications. Currently focused on Large Language Models, Retrieval-Augmented Generation, and scalable AI architectures.",
};

export const aboutContent = {
  bio: `I am an AI/ML Engineer and Researcher specializing in Large Language Models (LLMs), 
  Retrieval-Augmented Generation (RAG), and intelligent information retrieval systems. 
  My work focuses on designing scalable AI architectures, experimenting with modern NLP pipelines, 
  and building production-grade AI solutions that make a real impact.`,
  image: "/images/education.png",
};

export const education = [
  {
    institution: "Indian Institute of Technology, Kanpur",
    degree: "M.Tech in AI for Sustainability",
    duration: "2025 – Present",
    gpa: "9.25/10",
    focus: "Machine Learning, Deep Learning, Sustainable AI Systems",
  },
  {
    institution: "Rajarambapu Institute of Technology, Maharashtra",
    degree: "B.Tech in Computer Engineering",
    duration: "2021 – 2025",
    gpa: "9.70/10",
    focus: "Computer Science, Software Engineering",
  },
];

export const research = [
  {
    title:
      "A RAG-Based Legal Chatbot Using LLaMA2 and Advanced Information Retrieval",
    venue: "ICTCS 2024 Proceedings",
    link: "https://link.springer.com/book/10.1007/978-981-96-4151-2",
    image: "/images/research/rag.png",
    description: `Designed and implemented an end-to-end RAG pipeline for legal document processing. 
    Built FAISS-based vector search for efficient semantic retrieval and integrated LLaMA2 
    via LangChain for controlled, context-aware response generation.`,
    highlights: [
      "Legal document ingestion and chunking pipelines",
      "FAISS-based vector search for efficient retrieval",
      "LLaMA2 integration via LangChain",
      "Evaluation using precision, latency, and consistency metrics",
    ],
    techStack: ["LLaMA2", "LangChain", "FAISS", "Python", "Flask"],
  },
];

export const projects = [
  {
    title: "Cyclone Track Prediction System",
    description:
      "A machine learning–based cyclone track forecasting framework using the IBTrACS historical dataset. The system performs multi-horizon prediction from 6 to 72 hours through engineered temporal and kinematic features, with model evaluation based on geodesic RMSE and MAE metrics supported by analytical visualizations.",
    image: "/images/projects/cyclone-track-prediction.png",
    techStack: [
      "Machine Learning",
      "Gradient Boosting",
      "Pandas",
      "Geospatial Analysis",
    ],
  },
  {
    title: "Legal RAG Chatbot",
    description:
      "A domain-specific Retrieval-Augmented Generation system for legal question answering, integrating semantic document chunking, FAISS-based similarity search, and LLaMA2-driven response generation. The pipeline emphasizes retrieval accuracy and reduced hallucination in legal contexts.",
    image: "/images/research/rag.png",
    techStack: ["LLaMA2", "LangChain", "FAISS", "Flask", "Python"],
  },
  {
    title: "Air Quality Early Warning System",
    description:
      "A predictive modeling and decision-support framework for next-day Air Quality Index (AQI) forecasting across Indian cities. The system integrates data quality assessment, temporal feature engineering, and Gradient Boosting–based regression and multi-class classification to generate health-aligned AQI predictions and CPCB-category advisories through a deployable API and frontend demo.",
    image: "/images/projects/air-quality-early-warning-system.png",
    techStack: [
      "Python",
      "Time Series Modeling",
      "Gradient Boosting",
      "Scikit-learn",
      "Flask",
    ],
  },
  {
    title: "AI Resume Analyzer",
    description:
      "An intelligent resume evaluation framework that applies semantic similarity and ATS-style scoring to assess candidate-job alignment. The system provides structured insights into skill relevance and profile suitability using LLM-assisted analysis.",
    image: "/images/projects/ai-resume-analyzer.png",
    techStack: ["LLMs", "NLP", "Flask", "MongoDB", "Python"],
  },

  {
    title: "Active-Break Monsoon Forecasting System",
    description:
      "A deep learning–based forecasting framework for predicting Active, Break, and Normal phases of the Indian Summer Monsoon up to seven days ahead using ERA5 reanalysis data, engineered atmospheric features, and a TCN-Transformer Meta-Ensemble.",
    image: "/images/projects/active-break-forecasting-system.png",
    techStack: [
      "PyTorch",
      "Transformers",
      "TCN",
      "XGBoost",
      "Time Series Forecasting",
      "Climate AI",
    ],
  },
  {
    title: "Delhi Jal Board WhatsApp CRM System",
    description:
      "A WhatsApp-based grievance management platform for Delhi Jal Board that enables citizens to register, track, and manage water, sewer, and revenue complaints through an interactive chatbot workflow integrated with WhatsApp Cloud API and MongoDB.",
    image: "/images/projects/djb-whatsapp-crm.png",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "WhatsApp Cloud API",
      "REST APIs",
    ],
  },
];

export const experience = [
  {
    company: "Altair Engineering",
    role: "Software Development Intern",
    duration: "Jan 2025 – Jul 2025",
    logo: "/images/company-altair.png",
    highlights: [
      "Automated HPC simulation workflows reducing manual effort by 40%",
      "Built REST APIs and dashboards for monitoring simulations",
      "Deployed scalable data pipelines using AWS services",
      "Collaborated with cross-functional engineering teams",
    ],
  },
  {
    company: "Bubble Byte Ventures",
    role: "Web Developer",
    duration: "Sep 2022 – Aug 2023",
    logo: "/images/company-bubblebyte.png",
    highlights: [
      "Built production-grade applications with Python and web frameworks",
      "Improved system performance and automation pipelines",
    ],
  },
];

export const skills = {
  "AI / Machine Learning": [
    "Retrieval-Augmented Generation (RAG)",
    "Large Language Models",
    "Prompt Engineering",
    "Semantic Search",
    "Vector Databases",
  ],
  "NLP & LLMs": [
    "LLaMA",
    "GPT",
    "Gemini",
    "FAISS",
    "Embeddings",
    "Chunking Strategies",
  ],
  "Frameworks & Libraries": [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "LangChain",
    "HuggingFace",
  ],
  Backend: ["Flask", "FastAPI", "REST APIs", "Async Systems"],
  Cloud: ["AWS S3", "AWS EC2", "AWS Athena", "Docker"],
  Tools: ["Git", "Postman", "Linux", "VS Code"],
  Frontend: ["React.js", "Tailwind CSS", "JavaScript"],
};

export const achievements = [
  "GATE 2024 Rank: 722",
  "Published Research Paper (ICTCS 2024)",
  "Community Lead – Google Developer Group (GDG)",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
