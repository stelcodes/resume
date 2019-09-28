
module.exports = {
  locals: {
    name: 'Stel Abrego',
    location: 'Ypsilanti, MI',
    email: 'stelabrego@icloud.com',
    phoneNumber: '734-770-4765',
    education: [
      {
        institution: 'Washtenaw Community College',
        location: 'Ann Arbor, MI',
        year: '2019',
        degree: 'Associate of Computer Science',
        gpa: '3.75'
      }
    ],
    technicalSkills: [
      {
        category: 'Frontend',
        specifics: [
          'Javascript',
          'React',
          'JQuery',
          'CSS',
          'SASS',
          'Bulma',
          'Bootstrap'
        ]
      },
      {
        category: 'Backend',
        specifics: [
          'Node',
          'Express',
          'Java',
          'Python',
          'PostgreSQL'
        ]
      },
      {
        category: 'Deployment',
        specifics: [
          'Docker',
          'Bash',
          'Linux',
          'AWS SDK'
        ]
      },
      {
        category: 'Static Site Generation',
        specifics: [
          'Hugo',
          'Pug'
        ]
      }
    ],
    projects: [
      {
        title: 'Events Web App (flittermouse.io)',
        tools: [
          'HTML/CSS',
          'Javascript',
          'Node.js',
          'Express',
          'PostgreSQL',
          'Redis',
          'Docker'
        ],
        description: 'Independently built and deployed web app for users to host, share, and RSVP to events. Implemented features allowing users to create account, login, logout, follow other users, create events, RSVP, and update their profile including ability to upload photo (AWS SDK). Features responsive UI, animations, flexbox styling, AJAX form submissions, sessions (Redis), relational database (Postgres), and containerized deployment (Docker).'
      },
      {
        title: 'Web Scraper',
        tools: [
          'Python',
          'Selenium',
          'requests',
          'beautiful_soup'
        ],
        description: 'Independently built web scraper which locates and scrapes data from a University of Michigan React app using the Selenium library to programatically interface with the UI and regex pattens to locate data. Created for the Boycott Wendy\'s farmworker justice campaign in Ann Arbor, MI.'
      },
      {
        title: 'Portfolio Website (stelabrego.com)',
        tools: [
          'Go',
          'Javascript',
          'HTML/CSS',
          'Hugo',
          'Markdown'
        ],
        description: 'Independently built and deployed website for professional inquery featuring coding project write-ups and tutoring information. Features responsive UI, CSS animations, flexbox styling, inline SVG\'s. Built with Go templating and Markdown content. Deployed via Netlify.'
      }
    ],
    experience: [
      {
        organization: 'Freelance',
        role: 'Computer Programming Tutor',
        location: 'Ann Arbor, MI',
        yearStart: 2019,
        accomplishments: [
          'Continued empowering a diverse set of computer programming students by teaching them programming fundementals',
          ''
        ]
      },
      {
        organization: 'Washtenaw Community College',
        role: 'Computer Programming Tutor',
        location: 'Ann Arbor, MI',
        yearStart: 2017,
        yearEnd: 2019,
        accomplishments: [
          'Helped students with their homework',
          'Delivered quality programming advice to a diverse student body'
        ]
      }
    ],
    activities: [
      'Since August 2018, organizes a monthly transgender social and support group called Trans Together in Ypsilanti, MI at Riverside Arts Center with over 50 members.',
      'Delivered a lightning talk at the LAND (Liberal Arts Network for Development) conference discussing common issues for transgender students in college classrooms.'
    ]
  }
}
