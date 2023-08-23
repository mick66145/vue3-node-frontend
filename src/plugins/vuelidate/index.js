// https://github.com/cuatromedios/quasar-app-extension-vuelidate-rules

import * as methods from '@vuelidate/validators'
import dayjs from 'dayjs'

export const vuelidate = {
  is (value, message) {
    message = message !== undefined ? message : false
    return (val) => {
      let result
      switch (typeof value) {
      case 'string':
        result = String(val) === value
        break
      case 'number':
        result = Number(val) === value
        break
      default:
        result = val === value
      }
      return result || message
    }
  },
  required (message = false) {
    return (val) => methods.required.$validator(val) || message
  },
  requiredIf (ref, message = false) {
    return (val) => methods.requiredIf(ref).$validator(val) || message
  },
  requiredUnless (ref, message = false) {
    return (val) => methods.requiredUnless(ref).$validator(val) || message
  },
  minLength (length, message = false) {
    return (val) => methods.minLength(length).$validator(val) || message
  },
  maxLength (length, message = false) {
    return (val) => methods.maxLength(length).$validator(val) || message
  },
  minValue (value, message = false) {
    return (val) => methods.minValue(value).$validator(val) || message
  },
  maxValue (value, message = false) {
    return (val) => methods.maxValue(value).$validator(val) || message
  },
  between (min, max, message = false) {
    return (val) => methods.between(min, max).$validator(val) || message
  },
  alpha (message = false) {
    return (val) => methods.alpha.$validator(val) || message
  },
  alphaNum (message = false) {
    return (val) => methods.alphaNum.$validator(val) || message
  },
  numeric (message = false) {
    return (val) => methods.numeric.$validator(val) || message
  },
  integer (message = false) {
    return (val) => methods.integer.$validator(val) || message
  },
  decimal (message = false) {
    return (val) => methods.decimal.$validator(val) || message
  },
  email (message = false) {
    return (val) => methods.email.$validator(val) || message
  },
  ipAddress (message = false) {
    return (val) => methods.ipAddress.$validator(val) || message
  },
  macAddress (separator = ':', message = false) {
    return (val) => methods.macAddress.$validator(separator)(val) || message
  },
  url (message = false) {
    return (val) => methods.url.$validator(val) || message
  },
  or (...args) {
    let message = false
    if (typeof args[args.length - 1] === 'string') {
      message = args.pop()
    }
    return (val) => methods.or(...args).$validator(val) || message
  },
  and (...args) {
    let message = false
    if (typeof args[args.length - 1] === 'string') {
      message = args.pop()
    }
    return (val) => methods.and(...args).$validator(val) || message
  },
  not (rule, message = false) {
    return (val) => methods.not(rule).$validator(val) || message
  },
  sameAs (locator, message = false) {
    return (val) => val === locator || message
  },
  regex (regex, message = false) {
    return (val) => {
      if (!val) return true
      return regex.test(val) || message
    }
  },
  dayjIsBefore (locator, message = false, format = 'YYYY-MM-DD') {
    return (val) => {
      if (!val) return true
      return dayjs(val, format).isBefore(dayjs(locator, format)) || message
    }
  },
  dayjIsSameOrBefore (locator, message = false, format = 'YYYY-MM-DD') {
    return (val) => {
      if (!val) return true
      return dayjs(val, format).isSameOrBefore(dayjs(locator, format)) || message
    }
  },
  dayjIsAfter (locator, message = false, format = 'YYYY-MM-DD') {
    return (val) => {
      if (!val) return true
      return dayjs(val, format).isAfter(dayjs(locator, format)) || message
    }
  },
  dayjIsSameOrAfter (locator, message = false, format = 'YYYY-MM-DD') {
    return (val) => {
      if (!val) return true
      return dayjs(val, format).isSameOrAfter(dayjs(locator, format)) || message
    }
  },
  isTrue (message = false) {
    return (val) => val === true || message
  },
  twPassport (message = false) {
    return (val) => {
      if (!val) return true
      return (/^[A-Z][12]\d{8}$/.test(val) && [...val].reduce((sum, digit, index) => index === 0 ? sum + digit.charCodeAt() - 55 : sum + parseInt(digit) * (10 - index), 0) % 10 === 0) || message
    }
  },
  twUniformNumber (extended = true, message = false) {
    return (val) => {
      if (!val) return true
      const multiply = (a, b) => { return a * b }
      const add = (a, b) => { return a + b }
      const zipWith = (a1, a2, f) => {
        const length = Math.min(a1.length, a2.length)
        const result = []
        for (let i = 0; i < length; i++) result[i] = f(a1[i], a2[i])
        return result
      }
      if (typeof val !== 'string' && typeof val !== 'number') return false || message
      const GUI_NUMBER_COEFFICIENTS = [1, 2, 1, 2, 1, 2, 4, 1]
      const n = val.toString()
      const regex = /^\d{8}$/
      if (!regex.test(n)) return false || message
      /**
        * Step 1: 先把統一編號的每個數字分別乘上對應的係數 (1, 2, 1, 2, 1, 2, 4, 1)
        * Step 2: 再把個別乘積的十位數與個位數相加，得出八個小於 10 的數字
      **/
      const intRadix = 10
      const checksum = zipWith(GUI_NUMBER_COEFFICIENTS, n.split('')
        .map(c => parseInt(c, intRadix)), multiply)
        .map(n => (n % 10) + Math.floor(n / 10))
        .reduce(add, 0)

      /**
        * Step 3: 檢查把這 8 個數字相加之後計算此和除以 5 or 10 的餘數
        * Step 4:
        *  4-1: 若是餘數為 0，則為正確的統一編號
        *  4-2: 若是餘數為 9，且原統一編號的第七位是 7，則也為正確的統一編號
      **/
      const divisor = extended ? 5 : 10

      return (checksum % divisor === 0 || (parseInt(n.charAt(6), intRadix) === 7 && (checksum + 1) % divisor === 0)) || message
    }
  },
}

export const useVuelidate = {
  install: (app, options) => {
    app.config.globalProperties.$rules = vuelidate
    app.provide('vuelidate', vuelidate)
  },
}
