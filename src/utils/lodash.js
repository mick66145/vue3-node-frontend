import _ from 'lodash'

export const nest = (seq, keys) => {
  if (!keys.length) { return seq }
  var first = keys[0]
  var rest = keys.slice(1)
  return _.mapValues(_.groupBy(seq, first), function (value) {
    return nest(value, rest)
  })
}

/**
* @param {Array} list 所有數據
* @param {Array} values 篩選數據
* @param {string} mapKey map欄位
*/
export const filterIncludesMapBy = (list, values, mapKey) => {
  const mapList = _(values).map(mapKey).value()
  return _(list).filter((item) => {
    return mapList.includes(item[mapKey])
  }).value()
}

/**
* @param {Array} list 所有數據
* @param {Array} values 篩選數據
* @param {string} mapKey map欄位
*/
export const filterNotIncludesMapBy = (list, values, mapKey) => {
  const mapList = _(values).map(mapKey).value()
  return _(list).filter((item) => {
    return !mapList.includes(item[mapKey])
  }).value()
}

/**
* @param {Array} list 所有數據
* @param {Array} values map數據
* @param {string} mapKey map欄位
*/
export const mapListValueByList = (list, values, mapKey) => {
  return _(list).map((mapItem) => {
    const mapValue = _(values).find(findItem => mapItem[mapKey] === findItem[mapKey])
    _.mapKeys(mapValue, (_, key) => {
      mapItem[key] = mapValue[key]
    })
    return mapItem
  }).value()
}

/**
* @param {Array} list 所有數據
* @param {string} groupKey group欄位
*/
export const groupBy = (list, groupKey) => {
  return _(list).chain().groupBy(groupKey).value()
}
