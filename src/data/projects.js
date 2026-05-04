const PROJECTS = [
  {
    name: 'SwapD',
    date: 'May 2026 - Present',
    description: 'A barter-based skill marketplace that enables users to exchange services without money, using proof-based task submissions, peer validation, and intelligent skill matching to maintain trust and quality.',

    // Back face — problem & solution
    problem: 'Early-stage students lack multi-domain skills and financial resources, making it difficult to collaborate and build complete projects.',
    solution: 'Built a system using proof-of-work submissions, peer validation, and graph-based matching to enable secure skill barter',

    details: [
      'Implemented proof submission (file/link/video) for tasks.',
      'Designed peer validation with reputation scoring.',
      'Built matching logic for direct and multi-user swaps.',
    ],
    tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    image: 'SWAPD.png',
    liveUrl: null,
    githubUrl: null,
  },
  {
    name: 'F1 Race Report Tool',
    date: 'Nov 2025 - Dec 2025',
    description: 'An AI-powered Formula 1 race analysis tool. Fetches live race data, processes it through Groq AI, and generates detailed race reports with driver performance breakdowns.',

    problem: 'Raw race data is complex and not easily interpretable for quick performance insights.',
    solution: 'Built a system that fetches live race data and uses Groq AI to generate structured reports with driver performance analysis.',

    details: [
      'Integrated live race data APIs for real-time input.',
      'Used Groq AI for automated report generation.',
      'Displayed driver insights via responsive UI.',
    ],
    tags: ['React', 'Tailwind CSS', 'Vite', 'Node.js', 'MySQL', 'Groq AI'],
    image: 'F1.png',
    liveUrl: null,
    githubUrl: null,
  },
  {
    name: 'Neural Stroke Care',
    date: 'Feb 2026 - Apr 2026',
    description: 'An ML-driven stroke prediction tool that processes patient data and delivers real-time risk analysis with clinically relevant evaluation metrics.',

    problem: 'Stroke risk is often identified late due to lack of early predictive analysis from patient data.  ',
    solution: 'Developed an ML-based system that predicts stroke risk from patient data and outputs real-time, clinically relevant metrics.',

    details: [
      'Trained ML model on medical dataset for prediction.',
      'Built UI for input and real-time risk output.',
      'Evaluated using accuracy and precision metrics.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQLite'],
    image: 'NSC.png',
    liveUrl: null,
    githubUrl: null,
  },
  {
    name: 'RFID Student Attendance',
    date: 'Aug 2024 - Oct 2024',
    description: 'An RFID-based attendance system using embedded hardware and real-time data capture. Stores records on AWS cloud, reducing manual effort by ~70% for 200+ users. Filed as a verified patent.',

    problem: 'Manual attendance is slow, error-prone, and allows proxy entries.',
    solution: 'Used RFID tags and reader with cloud storage to automate real-time, tamper-resistant attendance tracking.',

    details: [
      'Integrated RFID hardware with embedded system.',
      'Stored data on AWS for real-time access.',
      'Reduced errors and proxy attendance.',
    ],
    tags: ['RFID', 'Embedded Hardware', 'AWS', 'Database'],
    image: 'RFID.png',
    liveUrl: null,
    githubUrl: null,
    patentUrl: 'https://drive.google.com/file/d/1jkNuZY_1qr1VYQVy5nuIY_tnsH9eETIm/view?usp=sharing',
  },
]

export default PROJECTS