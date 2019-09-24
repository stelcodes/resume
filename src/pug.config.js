
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
        category: 'Front End Web Development',
        specifics: [
          'JS',
          'CSS',
          'SASS',
          'JQuery',
          'HTML'
        ]
      },
      {
        category: 'Back End Web Development',
        specifics: [
          'Node',
          'Express',
          'PostgreSQL',
          'MySQL'
        ]
      }
    ],
    projects: [
      {
        title: 'Event Hosting Web App (flittermouse.io)',
        tools: [
          'HTML/CSS',
          'Javascript',
          'Node.js',
          'Express',
          'PostgreSQL',
          'Redis',
          'Docker'
        ],
        description: 'built a cool website'
      },
      {
        title: 'Portfolio Website (stelabrego.com)',
        tools: [
          'Go',
          'Javascript',
          'HTML/CSS'
        ]
      }
    ],
    experience: [
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
      'Facilitated Trans Together',
      'Gave a speech at the LAND'
    ]
  }
}
