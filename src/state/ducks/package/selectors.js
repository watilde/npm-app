const getDependencies = (packageData, filter) => {
  switch (filter) {
    case 'SHOW_DEV_DEPS':
      return packageData.devDependencies
    case 'SHOW_DEPS':
      return packageData.dependencies
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

export default {
  getDependencies
}
