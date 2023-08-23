import file from './modules/file'

export const exportBaseApiModules = () => {
  const modules = {}
  modules.FileResource = file
  return modules
}
