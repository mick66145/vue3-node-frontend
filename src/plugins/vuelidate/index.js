import { email, required, sameAs, maxLength, requiredIf, numeric, minLength, maxValue, helpers, minValue, decimal } from '@vuelidate/validators'

export const _email = {
  ...email,
  $message: '信箱格式錯誤',
}

export const _required = {
  ...required,
  $message: '必填',
}

export const _requiredIf = (target) => ({
  ...requiredIf(target),
  $message: '必填',
})

export const _phone = {
  $validator: value => /^09[0-9]{8}$/.test(value),
  $message: '手機格式錯誤',
}

export const _length = (length) => ({
  $params: { type: 'length', value: length },
  $validator: value => value.length === length,
  $message: `長度必須為 ${length} 位`,
})

export const _maxLength = (length) => ({
  ...maxLength(length),
  $message: `最多為 ${length} 個字`,
})

export const _minLength = (length) => ({
  ...minLength(length),
  $message: `最短為 ${length} 個字`,
})

export const _maxValue = (max, message) => helpers.withMessage(
  ({ $params }) => message || `最多為 ${$params.max}`,
  maxValue(max),
)

export const _minValue = (min, message) => helpers.withMessage(
  ({ $params }) => message || `最少為 ${$params.min}`,
  minValue(min),
)

export const _sameAs = (target) => ({
  ...sameAs(target),
  $message: '資料不相同',
})

export const _numeric = {
  ...numeric,
  $message: '請輸入數字',
}

export const _decimal = {
  ...decimal,
  $message: '請輸入數字',
}

export default {
  install (Vue) {

  },
  _email,
  _required,
}
