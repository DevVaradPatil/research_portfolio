// Portfolio content data - Easy to update in one place.
// Source of truth: public/VARAD_PATIL_RESUME_AI.pdf and public/VARAD_PATIL_MASTER_RESUME.pdf

export const personalInfo = {
  name: "Varad Patil",
  title: "AI/ML Engineer • Researcher",
  email: "varadapatil123@gmail.com",
  instituteEmail: "varadap25@iitk.ac.in",
  linkedin: "https://linkedin.com/in/varad-patil-web-dev",
  github: "https://github.com/DevVaradPatil",
  sdePortfolio: "https://varaddev.vercel.app/",
  location: "IIT Kanpur, India",
  profileImage: "/images/varad.webp",
  resume: "/VARAD_PATIL_RESUME_AI.pdf",
  fullCv: "/VARAD_PATIL_MASTER_RESUME.pdf",
};

export const heroContent = {
  greeting: "Hello, I'm",
  intro:
    "M.Tech student in AI for Sustainability at IIT Kanpur. I build AI systems that go from research to deployment: multi-agent GenAI platforms, retrieval-augmented generation, object detection, and vision-based air-quality sensing for my thesis.",
};

export const aboutContent = {
  bio: `I am an AI/ML engineer and researcher working across large language models, computer vision
  and climate data. My thesis at IIT Kanpur estimates PM2.5/PM10 from a city-scale CCTV network,
  and my projects range from a Gemini-powered multi-agent civic platform to monsoon and cyclone
  forecasting. I care about rigorous evaluation: leakage-controlled splits, honest baselines and ablations.`,
};

export const education = [
  {
    institution: "Indian Institute of Technology, Kanpur",
    degree: "M.Tech in AI for Sustainability",
    duration: "2025 – 2027",
    gpa: "9.25/10",
    focus: "Machine Learning, Deep Learning, Climate & Sustainability AI",
  },
  {
    institution: "Rajarambapu Institute of Technology, Maharashtra",
    degree: "B.Tech in Computer Engineering",
    duration: "2021 – 2025",
    gpa: "9.70/10 · Gold Medalist (Rank 1)",
    focus: "Computer Science, Software Engineering",
  },
];

export const research = [
  {
    title:
      "Vision-Based PM2.5/PM10 Estimation from a City-Scale CCTV Network",
    venue: "M.Tech Thesis · IIT Kanpur · Ongoing (2026)",
    advisor:
      "Prof. Sachchida Nand Tripathi, Dean, Kotak School of Sustainability",
    status: "Ongoing",
    image: "/images/research/pmvision.webp",
    description: `Estimating particulate matter concentrations from fixed-camera CCTV footage, pairing
    clips with co-located reference PM2.5/PM10 monitors and CPCB CAAQMS meteorology on a common observation grid.`,
    highlights: [
      "Physics-grounded features (RMS contrast, dark-channel prior, Koschmieder extinction, optical flow) alongside frozen DINOv2 ViT embeddings",
      "Per-camera ResNet-18 regressors benchmarked against a gradient-boosting ladder attributing contribution across optics, embeddings and meteorology",
      "Leakage-controlled protocol with day-, week- and camera-blocked splits and paired blocked-bootstrap significance testing",
      "Resumable multi-stage pipeline with atomic manifests, hash-guarded caches and an automated test suite",
    ],
    techStack: ["PyTorch", "DINOv2", "ResNet-18", "Gradient Boosting", "Computer Vision"],
  },
  {
    title:
      "A RAG-Based Legal Chatbot Using Llama2 and Advanced Information Retrieval",
    venue: "First Author · ICTCS 2024, Springer",
    link: "https://link.springer.com/chapter/10.1007/978-981-96-4151-2_31",
    image: "/images/research/rag.webp",
    description: `Designed and implemented an end-to-end retrieval-augmented generation pipeline for legal
    question answering, with FAISS vector indexing and Llama2-7B served via LangChain.`,
    highlights: [
      "Corpus chunking, embedding strategies and prompt templates for legal documents",
      "FAISS-based vector search for efficient semantic retrieval",
      "Evaluation framework measuring retrieval precision, latency and response quality across 500+ test queries",
      "Presented at the International Conference on Trends in Computational and Cognitive Sciences (2024)",
    ],
    techStack: ["Llama2", "LangChain", "FAISS", "Python", "Flask"],
  },
];

export const projects = [
  {
    title: "CivicPulse: Multi-Agent Civic Issue Platform",
    tag: "Self Project · Vibe2Ship Top 20",
    description:
      "An orchestrated multi-agent pipeline for civic complaints: multimodal triage extracting category, severity and hazards, automated routing to municipal authorities with priority and SLA, and before/after repair verification by image comparison. Inference is reserved for perception and judgement, while deduplication, geospatial hotspot prediction and routing stay deterministic. Deployed on Google Cloud Run within free tiers.",
    image: "/images/projects/civicpulse.webp",
    techStack: ["Gemini 2.5 Flash", "Multi-Agent", "Next.js", "TypeScript", "Firestore", "Cloud Run"],
    links: [
      { label: "Live", href: "https://civicpulse-vibe2ship-xi.vercel.app/" },
      { label: "Code", href: "https://github.com/DevVaradPatil/civicpulse_vibe2ship" },
    ],
  },
  {
    title: "CityLens: Urban Infrastructure Monitoring",
    tag: "Self Project · CityLens AI Hackathon Finalist",
    description:
      "YOLO11m trained on the MBDD2025 UAV dataset (14.5K images, 57.6K annotations) to 0.918 test mAP@0.5, using iterative stratification and rare-class oversampling for a 10:1 imbalance, trained via DDP on dual T4 GPUs. An illegal-billboard detector reached 0.813 mAP@0.5 through a five-variant ablation with a from-scratch AP metric; SAHI tiled inference showed dataset scale, not architecture, was the binding constraint.",
    image: "/images/projects/citylens.webp",
    techStack: ["YOLO11", "PyTorch", "Ultralytics", "SAHI", "DDP"],
    links: [
      { label: "Damage model", href: "https://www.kaggle.com/code/varadpatildev/build-damage-new" },
      { label: "Billboard model", href: "https://www.kaggle.com/code/varadpatildev/billboard-v2" },
    ],
  },
  {
    title: "Resume Insight: LLM Resume Evaluation Engine",
    tag: "Self Project",
    description:
      "A Gemini-backed analysis service over PDF-extracted resume text with separate endpoints for job-match scoring, ATS analytics and section-level rewriting, with per-request token and error logging. Semantic resume-to-JD matching, keyword alignment and line-level suggestions, deployed publicly with tiered subscriptions and per-feature quotas on Clerk and Supabase.",
    image: "/images/projects/ai-resume-analyzer.webp",
    techStack: ["Gemini API", "LLMs", "Next.js", "Clerk", "Supabase"],
    links: [
      { label: "Live", href: "https://resumeinsight.vercel.app/" },
      { label: "Code", href: "https://github.com/DevVaradPatil/resume-analyzer" },
    ],
  },
  {
    title: "Active-Break Indian Summer Monsoon Forecasting",
    tag: "Course Project · KSS605",
    description:
      "A TCN–Transformer meta-ensemble classifying Active, Break and Normal monsoon phases up to 7 days ahead from ERA5 reanalysis. Lifted mean Macro F1 to 0.560 against an XGBoost baseline at 0.521, with Break-class F1 at the 7-day horizon rising from 0.198 to 0.493. Labels come from IMD rainfall anomalies with training-only thresholds and chronological splits to prevent leakage.",
    image: "/images/projects/active-break-forecasting-system.webp",
    techStack: ["PyTorch", "TCN", "Transformers", "XGBoost", "ERA5"],
    links: [
      { label: "Code", href: "https://github.com/DevVaradPatil/Active-Break-Indian-Summer-Monsoon-Forecasting" },
    ],
  },
  {
    title: "Cyclone Track Prediction System",
    tag: "Course Project · EE708",
    description:
      "Multi-horizon cyclone track forecasting (6h to 72h) from IBTrACS with 40+ engineered motion, intensity and spatial features. Achieved 14.47 km RMSE at 6h and 78.77 km at 24h with geodesic error metrics and skill scores against a persistence baseline. Persistence-extrapolated positions act as a physics anchor, and storm-level splits prevent track leakage.",
    image: "/images/projects/cyclone-track-prediction.webp",
    techStack: ["XGBoost", "Gradient Boosting", "Scikit-learn", "IBTrACS"],
    links: [
      { label: "Code", href: "https://github.com/DevVaradPatil/Cyclone-Track-Prediction-System" },
    ],
  },
  {
    title: "Air Quality Early Warning System",
    tag: "Self Project",
    description:
      "Next-day AQI forecasting for Indian cities with paired regression and six-class CPCB bucket classification, trained on 108K station-day records across 110 stations, reaching R² 0.92 and 20.99 AQI MAE on held-out data. Recursive seven-day forecasts are served through a Flask REST API with a dashboard of AQI trends and health advisories.",
    image: "/images/projects/air-quality-early-warning-system.webp",
    techStack: ["Gradient Boosting", "Scikit-learn", "Time Series", "Flask", "Python"],
    links: [
      { label: "Code", href: "https://github.com/DevVaradPatil/Air-Quality-Monitoring-System" },
    ],
  },
];

export const experience = [
  {
    company: "Altair Engineering",
    role: "Software Development Intern · Bangalore",
    duration: "Jan 2025 – Jun 2025",
    logo: "/images/company-altair.png",
    highlights: [
      "Built full-stack MERN client portals for tire manufacturers to configure, submit and track HPC simulation workflows",
      "Built a real-time HPC job scheduling and visualisation dashboard surfacing live job status, queue position and results",
      "Improved frontend performance by 30% through code-splitting, lazy loading and API caching",
      "Automated simulation and reporting workflows with Python and REST APIs, cutting manual operations by 40%",
    ],
  },
  {
    company: "Bubble Byte Ventures",
    role: "Web Development Intern · Sangli",
    duration: "Sep 2022 – Aug 2023",
    logo: "/images/company-bubblebyte.png",
    highlights: [
      "Delivered 10+ responsive, SEO-optimised client websites, reducing page load times by 30%",
      "Automated deployment pipelines with Python",
      "Received the Best Performance Award for consistent delivery across client projects",
    ],
  },
];

export const skills = {
  "GenAI & LLMs": [
    "RAG Systems",
    "LangChain",
    "FAISS",
    "Llama2",
    "Gemini",
    "OpenAI API",
    "HuggingFace",
    "Prompt Engineering",
    "Multi-Agent Systems",
    "Multimodal Inference",
  ],
  "Deep Learning & Vision": [
    "PyTorch",
    "TensorFlow",
    "Transformers",
    "TCN",
    "CNNs",
    "Object Detection (YOLO, Ultralytics)",
  ],
  "Machine Learning": [
    "Scikit-learn",
    "XGBoost",
    "Gradient Boosting",
    "Time-Series Forecasting",
    "Feature Engineering",
    "Imbalance Handling",
    "Ablation & Baseline Analysis",
  ],
  "Scientific Data": [
    "NumPy",
    "Pandas",
    "Matplotlib",
    "ERA5 Reanalysis",
    "IBTrACS",
    "CPCB / CAAQMS Air Quality",
  ],
  "Languages & Backend": ["Python", "TypeScript", "JavaScript", "FastAPI", "Flask", "Node.js", "REST APIs"],
  "Cloud & Data": ["GCP (Cloud Run, Firestore)", "Docker", "MongoDB", "PostgreSQL", "Supabase", "Git"],
};

export const achievements = [
  "Reliance Foundation Postgraduate Scholarship, one of 100 awarded nationwide (2025)",
  "Gold Medalist, Rank 1 in B.Tech Computer Engineering, RIT (2025)",
  "Top 20 of 15,000+, Vibe2Ship National Hackathon; Finalist, CityLens AI Hackathon, IIT Kanpur (2026)",
  "First-author publication, ICTCS 2024 (Springer)",
];

export const positions = [
  "Teaching Assistant, Mathematics and Computation Using Python, IIT Kanpur (2026)",
  "Community Lead, Google Developer Groups on Campus: 45+ members, 5+ workshops on Web & GenAI (2024–25)",
];

export const certifications = [
  "Generative AI with Large Language Models, DeepLearning.AI & AWS (2024)",
  "Supervised Machine Learning: Regression and Classification, DeepLearning.AI & Stanford (2025)",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
