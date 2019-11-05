module.exports = {
  name: 'Stel Abrego',
  location: 'Ypsilanti, MI',
  email: 'stelabrego@icloud.com',
  phoneNumber: '734-770-4765',
  other: 'github.com/stelabrego | stelabrego.com/portfolio',
  education: [
    {
      institution: 'Washtenaw Community College',
      location: 'Ann Arbor, MI',
      year: '2019',
      degree: 'Associate in Science, Computer Science: Programming in Java',
      gpa: '3.75'
    }
  ],
  technicalSkills: [
    {
      category: 'Frontend',
      specifics: [
        'Javascript',
        'HTML',
        'CSS',
        'SCSS',
        'React',
        'Webpack',
        'Bootstrap',
        'Bulma'
      ]
    },
    {
      category: 'Backend',
      specifics: [
        'Node.js',
        'Java',
        'PHP',
        'Python',
        'Postgres',
        'MySQL',
        'SQLite',
        'Hugo'
      ]
    },
    {
      category: 'Deployment',
      specifics: [
        'Git',
        'Docker',
        'Bash',
        'Vim',
        'Linux'
      ]
    },
    {
      category: 'Data Analytics',
      specifics: [
        'Python',
        'Jupyter'
      ]
    },
    {
      category: 'Mobile Apps',
      specifics: [
        'Android SDK'
      ]
    }
  ],
  projects: [
    {
      title: '2019 | Events Web App (flittermouse.io)',
      tools: [
        'HTML/CSS',
        'Javascript',
        'Node.js',
        'Express',
        'PostgreSQL',
        'Redis',
        'Docker'
      ],
      description: 'Independently built and deployed web app for users to host, share, and RSVP to events. Implemented features such as create account, login, logout, search events, follow other users, create events, RSVP, update bio, and upload photo (AWS SDK). Designed app with responsive UI, animations, AJAX form submissions, sessions (Redis), relational database (Postgres), HTML templating (Pug) and containerized deployment (Docker).',
      id: 0
    },
    {
      title: '2019 | Android App (Self Care)',
      tools: [
        'Android SDK',
        'SQLite'
      ],
      description: 'Built Android app which allows users to track mental health with responsive UI and multiple views. Implemented on-device database to store and retrieve user generated data.',
      id: 1
    },
    {
      title: '2019 | FBI Crime Data Analysis Project',
      tools: [
        'Python',
        'Pandas',
        'ipywidget',
        'Jupyter Notebook'
      ],
      description: 'Created interactive notebook to visualize FBI crime data from CSV file. Created 6 visualizations including interactive ipywidget to analyze the least and most violent states within a user-defined population range.',
      id: 2
    },
    {
      title: '2018 | Networked Multiplayer Chess App',
      tools: [
        'Java',
        'Swing'
      ],
      description: 'Created chess app using sockets, object streams, and attractive Swing GUI. Implemented interactive chess board and features including turns and move validation.',
      id: 3
    },
    {
      title: '2018 | Web Scraper',
      tools: [
        'Python',
        'Selenium'
      ],
      description: 'Independently built web scraper which locates and scrapes data from a University of Michigan React app using the Selenium library to interface with the UI and regex patterns to locate data.',
      id: 4
    },
    {
      title: ' 2019 | Portfolio Website (stelabrego.com)',
      tools: [
        'Go',
        'Javascript',
        'HTML/CSS',
        'Hugo',
        'Markdown'
      ],
      description: 'Independently built and deployed website for professional inquery. Designed site with responsive UI, CSS animations, and flexbox styling. Generated with Hugo and deployed via Netlify.',
      id: 5
    }
  ],
  experience: [
    {
      organization: 'Freelance',
      role: 'Computer Programming Tutor',
      location: 'Ypsilanti, MI',
      yearStart: 2019,
      accomplishments: [
        'Continued teaching computer programming to a diverse set of students from University of Michigan and other schools.'
      ],
      id: 0
    },
    {
      organization: 'Freelance',
      role: 'Computer Programming Tutor',
      location: 'Ypsilanti, MI',
      yearStart: 2019,
      accomplishments: [],
      id: 1
    },
    {
      id: 2,
      organization: 'Freelance',
      role: 'Web App Developer',
      location: 'Ypsilanti, MI',
      yearStart: 2019,
      accomplishments: [
        'Built event web app (flittermouse.io) for client to coordinate activist events.'
      ]
    },
    {
      id: 3,
      organization: 'Washtenaw Community College',
      role: 'Computer Programming Tutor',
      location: 'Ann Arbor, MI',
      yearStart: 2017,
      yearEnd: 2019,
      accomplishments: [
        'Taught 40 teenagers and adults how to code with Java, Python, and C++.',
        'Worked with a team of 8 other tutors to provide assistance to students taking CS classes.'
      ]
    }
  ],
  activities: [
    'Since August 2018, independently organizes a monthly transgender social and support group called Trans Together in Ypsilanti, MI at Riverside Arts Center with over 50 members.',
    'Presented at the 2019 Liberal Arts Network for Development conference discussing common issues for transgender students in college classrooms.',
    'Published a zine encouraging LGBTQIA+ people to code. Published through Diskette Press.'
  ]
}
