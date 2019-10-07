const resume = require('./resume')

const profiles = {
  default: {
    projects: [0, 1, 2, 3, 4],
    experience: [2, 1, 3]
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

processedResume.experience = selectedProfile.experience.reduce((aggregate, experienceId) => {
  const selectedProject = resume.experience.find((item) => {
    return item.id === experienceId
  })
  aggregate.push(selectedProject)
  return aggregate
}, [])

module.exports = {
  locals: processedResume
}
