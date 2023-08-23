import { exportBaseApiModules } from './restful/modules/basic-base'

export const baseApiModules = exportBaseApiModules()

export { default as AuthResource } from './restful/auth'
export { default as MeResource } from './restful/me'
export { default as AreaResource } from './restful/area'
export { default as CityResource } from './restful/city'
