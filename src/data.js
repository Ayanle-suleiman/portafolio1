// ─────────────────────────────────────────────────────────────
// ALL SITE CONTENT LIVES HERE. Edit this file, not the components.
// Anything marked TODO is something only you can fill in.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Ayanle Suleiman",
  initials: "AS",
  role: "Aspiring Data Analyst & Data Scientist",
  tagline: "I turn messy data into clear, defensible decisions.",
  intro:
    "Final-year Bachelor of Computer Science (Data Science) student at Multimedia University. I work across the full analysis workflow: cleaning raw data, testing hypotheses, building machine learning models and explaining the results to people who don't read code.",
  location: "Malaysia",
  status: "Open to graduate & internship data roles",
  email: "ayaanlesaleeban08@gmail.com",
  github: "https://github.com/Ayanle-suleiman",
  linkedin: "https://www.linkedin.com/in/ayanle-suleiman/",
  resume: "/Ayanle-Suleiman-Resume.pdf",
  photo: "/profile.webp",
};

export const stats = [
  { value: "auto", label: "Projects on GitHub" }, // "auto" = counts the projects shown,
  { value: "Python · R · SQL", label: "Core languages" },
  { value: "2026", label: "Graduating, MMU" },
];

export const about = [
  "I'm a data science student who likes the unglamorous part of the job: understanding where the data came from, what's wrong with it, and whether a result actually holds up statistically before anyone acts on it.",
  "Before data, I spent six months in technical support handling 40+ customer issues a day, and two years tutoring high-school maths and science. Both taught me the skill I value most in analytics: explaining something technical so the other person can act on it.",
  "Right now I'm strengthening my machine learning fundamentals and looking for a graduate or internship role where I can work on real business data.",
];

export const focus = [
  "Exploratory data analysis",
  "Statistical testing & inference",
  "Predictive modelling",
  "Data visualisation & storytelling",
  "Building data apps with Streamlit",
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "R", "SQL"],
  },
  {
    group: "Analysis & Statistics",
    items: ["pandas", "NumPy", "SciPy", "statsmodels", "Hypothesis testing", "ANOVA", "Correlation", "EDA"],
  },
  {
    group: "Machine Learning",
    items: ["scikit-learn", "Logistic regression", "Decision trees", "Random Forest", "K-Means", "Class imbalance", "Model evaluation"],
  },
  {
    group: "Visualisation",
    items: ["Matplotlib", "Seaborn", "Plotly", "ggplot2"],
  },
  {
    group: "Data Apps & AI",
    items: ["Streamlit", "Gemini API", "LLM-planned analysis", "PDF reporting", "pytest"],
  },
  {
    group: "Tools",
    items: ["Jupyter", "RStudio", "Git & GitHub", "VS Code"],
  },
];

// ─────────────────────────────────────────────────────────────
// PROJECTS — pulled live from GitHub
//
// Every public repo on your GitHub shows up automatically (newest first).
// You don't have to edit this file to add a project: push the repo, give
// it a description on GitHub, and it appears on the site.
//
// To make a project look great, add an entry to `projectDetails` below,
// keyed by the EXACT repo name. Anything you leave out falls back to
// what GitHub has (description, language, topics, homepage, last push).
// ─────────────────────────────────────────────────────────────
export const github = {
  username: "Ayanle-suleiman",
  // Repos that should never appear as projects.
  hide: [
    "ayanle-suleiman.github.io",
    "portfolio-updated",
    "My-Portfolio",
    "top-songs-analysis", // repo is empty on GitHub: push the notebook, then delete this line
  ],
  hideForks: true,
  perPage: 6, // cards shown before "Show more"
};

// Optional extra detail per repo. All fields optional:
//   title, category, year, question, approach, result,
//   highlights: [], tags: [], image: "/projects/x.webp", demo, report, featured
export const projectDetails = {
  datamate2: {
    title: "DataMate: AI Research Data Assistant",
    category: "AI & Apps",
    year: "2026",
    question:
      "Can someone with no statistics background upload a dataset, ask a question in plain English and get an answer they can trust?",
    approach:
      "Streamlit app where Gemini only plans the analysis (which test, which columns, which chart) and my own Python code runs it: t-tests, chi-square, ANOVA and correlation, with Plotly charts and a PDF report. The AI never executes code.",
    result: "",
    highlights: [
      "Data Trust Score (0–100): checks missing values, duplicates, impossible values, sample size and data age.",
      "Source check: compares an uploaded file with the original on Kaggle, UCI or data.gov.my / OpenDOSM.",
      "Join or compare two datasets and test whether the differences are real.",
      "Reviewer Mode: “Challenge my result” flags small samples, broken assumptions and correlation-vs-causation traps.",
      "Built for GDGoC APU, Problem Statement 03: Data-Driven Research & Intelligent Decision Making.",
    ],
    tags: ["Python", "Streamlit", "Gemini API", "SciPy", "statsmodels", "Plotly", "pytest"],
    featured: true,
  },

  "flights_Delay-analysis": {
    title: "Flight Delays at Atlanta (ATL), 2023",
    category: "Machine Learning",
    year: "2026",
    question: "When are flights most likely to be delayed, and can a model predict which ones will be?",
    approach:
      "Sampled 5,000 of 336,434 ATL departures from 2023, calculated delays from scheduled vs. actual times, joined TSA daily passenger counts, then trained logistic regression and a decision tree with class balancing.",
    result:
      "Busier days mean more delays (r = 0.93 across weekdays). Logistic regression caught 132 of 198 late flights (67%), where an “always on time” baseline caught none.",
    highlights: [
      "Sunday had the highest share of delayed flights; Tuesday the lowest.",
      "The weekday link weakens at finer grain: r = 0.35 by month and 0.28 day by day.",
      "Busiest day of 2023: the Sunday after Thanksgiving, about 2.9 million passengers.",
      "Showed why accuracy misleads on imbalanced data: the 80% baseline catches zero late flights.",
    ],
    tags: ["Python", "pandas", "scikit-learn", "Matplotlib", "Logistic regression"],
    featured: true,
  },

  "largest-islands-project": {
    title: "The World's 100 Largest Islands",
    category: "Data Visualisation",
    year: "2026",
    question: "How unequal is island size, and where are the world's largest islands really?",
    approach:
      "Exploratory analysis and visualisation in pandas, Matplotlib and Seaborn: a rank vs. area curve, a region × climate heatmap and the largest islands by climate zone.",
    result:
      "Greenland (2.17M km²) is 2.6× the size of the next island, New Guinea, and most of the largest islands are polar or temperate, not tropical.",
    highlights: [
      "North America (32) and Asia (28) hold most of the 100 largest islands.",
      "Tropical giants cluster in Asia; polar ones in North America and Eurasia.",
    ],
    tags: ["Python", "pandas", "Matplotlib", "Seaborn", "EDA"],
  },
};

export const timeline = [
  {
    date: "2023 – 2026",
    title: "Bachelor of Computer Science (Data Science)",
    org: "Multimedia University",
    type: "Education",
    points: [
      "Coursework in statistics, data science, machine learning and programming.",
    ],
  },
  {
    date: "2024 · 6 months",
    title: "Tech Support Specialist",
    org: "Infokall Solutions",
    type: "Experience",
    points: [
      "Handled 40+ customer inquiries a day.",
      "Achieved 92% positive feedback in post-resolution surveys.",
      "Reduced recurring issues by 15% through updated support documentation.",
    ],
  },
  {
    date: "2022 – 2023",
    title: "Home Tutor (Freelance)",
    org: "Maths & Science",
    type: "Experience",
    points: [
      "Tutored 8 high-school students.",
      "Raised average grades from C to B+ in one semester.",
    ],
  },
];
