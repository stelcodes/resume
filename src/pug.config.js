const resume = require('./resume')

const profiles = {
  default: {
    projects: [0, 1, 2, 3, 4],
    experience: [2, 1, 3]
  },
  webdev: {
    projects: [0, 6, 5, 1, 2],
    experience: [0, 3]
  }
}

const selectedProfile = profiles.webdev

const processedResume = resume

processedResume.technicalSkills = processedResume.technicalSkills.map((item, index, array) => {
  const secondPairCandidate = (index !== 0 && array[index - 1].first)
  if (!secondPairCandidate) {
    item.first = true
    return item
  } else {
    const last = array[index - 1]
    const currentLength = (item.category + ': ' + item.specifics.join(', ')).length
    const lastLength = (last.category + ': ' + last.specifics.join(', ')).length
    const currentFits = (lastLength + currentLength) < 60
    if (currentFits) {
      item.second = true
      return item
    } else {
      item.first = true
      return item
    }
  }
})

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
