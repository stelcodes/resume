const resume = require('./resume')

const profiles = {
  default: {
    projects: [0, 1, 2, 3, 4]
  }
}

const selectedProfile = profiles.default

const processedResume = resume

processedResume.projects = selectedProfile.projects.reduce((aggregate, projectId) => {
  const selectedProject = resume.projects.find((item) => {
    return item.id === projectId
  })
  aggregate.push(selectedProject)
  return aggregate
}, [])

module.exports = {
  locals: processedResume
}
