import _get from 'lodash/get'

export default function useFieldError (vuelidate) {
  const getError = (fieldName) => {
    const getField = _get(vuelidate, fieldName, {})
    const errorFeedback = getField && getField.$error ? getField.$errors[0].$message : ''
    return errorFeedback
  }
  return {
    getError,
  }
}
