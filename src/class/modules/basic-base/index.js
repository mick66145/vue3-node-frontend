import City from './modules/City'
import Area from './modules/Area'
import Me from './modules/Me'

export const exportBaseModules = () => {
  const modules = {}
  modules.City = City
  modules.Area = Area
  modules.Me = Me
  return modules
}
