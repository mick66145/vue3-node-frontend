import SvgIcon from './SvgIcon.vue'
import CardHeader from './card/CardHeader.vue'
import CardBody from './card/CardBody.vue'
import InputText from './form/InputText.vue'
import InputSelect from './form/InputSelect.vue'
import InputMultipleSelect from './form/InputMultipleSelect.vue'
import InputPassword from './form/InputPassword.vue'
import InputDate from './form/InputDate.vue'
import InputImageUpload from './form/InputImageUpload.vue'
import InputImage from './form/InputImage.vue'
import InputOptionGroup from './form/InputOptionGroup.vue'
import InputDateRange from './form/InputDateRange.vue'
import InputToggle from './form/InputToggle.vue'
import InputSearch from './form/InputSearch.vue'
import InputTextarea from './form/InputTextarea.vue'
import InputCheckbox from './form/InputCheckbox.vue'
import InputTime from './form/InputTime.vue'
import InputNumber from './form/InputNumber.vue'
import InputMonth from './form/InputMonth/InputMonth.vue'
import InputEmail from './form/InputEmail.vue'
import BaseButton from './button/BaseButton.vue'
import AddButton from './button/AddButton.vue'
import DeleteButton from './button/DeleteButton.vue'
import EditButton from './button/EditButton.vue'
import ResetButton from './button/ResetButton.vue'
import ViewButton from './button/ViewButton.vue'
import ConfirmButton from './button/ConfirmButton.vue'
import CancelButton from './button/CancelButton.vue'
import BaseIconButton from './button/BaseIconButton.vue'
import BaseFlatButton from './button/BaseFlatButton.vue'
import BaseImage from './image/BaseImage.vue'
import BaseLink from './link/BaseLink.vue'
import BaseDialog from './dialog/BaseDialog.vue'
import ImagePreviewDialog from './dialog/ImagePreviewDialog.vue'
import MessageDialog from './dialog/MessageDialog.vue'
import MessageCenterDialog from './dialog/MessageCenterDialog.vue'
import SkeletonTable from './skeleton/SkeletonTable.vue'
import ImageUploader from './uploader/ImageUploader.vue'
import FileUploader from './uploader/FileUploader.vue'
import BaseTooltip from './tooltip/BaseTooltip.vue'
import FixedFooter from './FixedFooter.vue'
import MobelFixedFooter from './MobelFixedFooter.vue'
import Pagination from './Pagination.vue'
import Calendar from './calendar/Calendar.vue'
export default {
  install (app) {
    app.component('SvgIcon', SvgIcon)
    app.component('CardHeader', CardHeader)
    app.component('CardBody', CardBody)
    app.component('InputText', InputText)
    app.component('InputSelect', InputSelect)
    app.component('InputMultipleSelect', InputMultipleSelect)
    app.component('InputPassword', InputPassword)
    app.component('InputDate', InputDate)
    app.component('InputImageUpload', InputImageUpload)
    app.component('InputImage', InputImage)
    app.component('InputOptionGroup', InputOptionGroup)
    app.component('InputDateRange', InputDateRange)
    app.component('InputToggle', InputToggle)
    app.component('InputSearch', InputSearch)
    app.component('InputTextarea', InputTextarea)
    app.component('InputCheckbox', InputCheckbox)
    app.component('InputTime', InputTime)
    app.component('InputNumber', InputNumber)
    app.component('InputMonth', InputMonth)
    app.component('InputEmail', InputEmail)
    app.component('BaseButton', BaseButton)
    app.component('AddButton', AddButton)
    app.component('DeleteButton', DeleteButton)
    app.component('EditButton', EditButton)
    app.component('ViewButton', ViewButton)
    app.component('ConfirmButton', ConfirmButton)
    app.component('CancelButton', CancelButton)
    app.component('BaseIconButton', BaseIconButton)
    app.component('BaseFlatButton', BaseFlatButton)
    app.component('BaseImage', BaseImage)
    app.component('BaseLink', BaseLink)
    app.component('BaseDialog', BaseDialog)
    app.component('ImagePreviewDialog', ImagePreviewDialog)
    app.component('MessageDialog', MessageDialog)
    app.component('MessageCenterDialog', MessageCenterDialog)
    app.component('SkeletonTable', SkeletonTable)
    app.component('ImageUploader', ImageUploader)
    app.component('FileUploader', FileUploader)
    app.component('BaseTooltip', BaseTooltip)
    app.component('FixedFooter', FixedFooter)
    app.component('MobelFixedFooter', MobelFixedFooter)
    app.component('Pagination', Pagination)
    app.component('Calendar', Calendar)
  },
}
