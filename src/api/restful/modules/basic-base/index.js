import city from './modules/city'
import area from './modules/area'
import auth from './modules/auth'
import file from './modules/file'

export const exportBaseApiModules = () => {
  const modules = {}
  modules.CityResource = city
  modules.AreaResource = area
  modules.AuthResource = auth
  modules.FileResource = file
  return modules
}
