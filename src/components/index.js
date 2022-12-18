import SvgIcon from './SvgIcon.vue'
import InputText from './form/InputText.vue'
import InputSelect from './form/InputSelect.vue'
import InputMultipleSelect from './form/InputMultipleSelect.vue'
import InputPassword from './form/InputPassword.vue'
import InputDate from './form/InputDate.vue'
import InputEditor from './form/InputEditor/InputEditor.vue'
import InputDialog from './form/InputDialog.vue'
import InputImageUpload from './form/InputImageUpload.vue'
import InputImage from './form/InputImage.vue'
export default {
  install (app) {
    app.component('SvgIcon', SvgIcon)
    app.component('InputText', InputText)
    app.component('InputSelect', InputSelect)
    app.component('InputMultipleSelect', InputMultipleSelect)
    app.component('InputPassword', InputPassword)
    app.component('InputDate', InputDate)
    app.component('InputEditor', InputEditor)
    app.component('InputDialog', InputDialog)
    app.component('InputImageUpload', InputImageUpload)
    app.component('InputImage', InputImage)
  },
}
