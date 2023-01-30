import SvgIcon from './SvgIcon.vue'
import InputText from './form/InputText.vue'
import InputSelect from './form/InputSelect.vue'
import InputMultipleSelect from './form/InputMultipleSelect.vue'
import InputPassword from './form/InputPassword.vue'
import InputDate from './form/InputDate.vue'
import InputDialog from './form/InputDialog.vue'
import InputImageUpload from './form/InputImageUpload.vue'
import InputImage from './form/InputImage.vue'
import InputOptionGroup from './form/InputOptionGroup.vue'
import InputDateRange from './form/InputDateRange.vue'
import InputToggle from './form/InputToggle.vue'
import InputSearch from './form/InputSearch.vue'
import InputTextarea from './form/InputTextarea.vue'
import InputCheckbox from './form/InputCheckbox.vue'
import BaseButton from './button/BaseButton.vue'
import Pagination from './Pagination.vue'
export default {
  install (app) {
    app.component('SvgIcon', SvgIcon)
    app.component('InputText', InputText)
    app.component('InputSelect', InputSelect)
    app.component('InputMultipleSelect', InputMultipleSelect)
    app.component('InputPassword', InputPassword)
    app.component('InputDate', InputDate)
    app.component('InputDialog', InputDialog)
    app.component('InputImageUpload', InputImageUpload)
    app.component('InputImage', InputImage)
    app.component('InputOptionGroup', InputOptionGroup)
    app.component('InputDateRange', InputDateRange)
    app.component('InputToggle', InputToggle)
    app.component('InputSearch', InputSearch)
    app.component('InputTextarea', InputTextarea)
    app.component('InputCheckbox', InputCheckbox)
    app.component('BaseButton', BaseButton)
    app.component('Pagination', Pagination)
  },
}
