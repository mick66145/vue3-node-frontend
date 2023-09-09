import SvgIcon from './SvgIcon.vue'
import CardHeader from './card/CardHeader.vue'
import CardBody from './card/CardBody.vue'
import BaseForm from './form/BaseForm.vue'
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
import InputCitySelect from './form/InputCitySelect.vue'
import InputAreaSelect from './form/InputAreaSelect.vue'
import InputAddress from './form/InputAddress.vue'
import InputBirthday from './form/InputBirthday.vue'
import InputUrl from './form/InputUrl.vue'
import InputGender from './form/InputGender.vue'
import InputTel from './form/InputTel.vue'
import InputTwPassport from './form/InputTwPassport.vue'
import InputTwUniformNumber from './form/InputTwUniformNumber.vue'
import InputFileUpload from './form/InputFileUpload.vue'
import InputCreditCard from './form/InputCreditCard.vue'
import InputCreditCardExpiredDate from './form/InputCreditCardExpiredDate.vue'
import BaseButton from './button/BaseButton.vue'
import AddButton from './button/AddButton.vue'
import DeleteButton from './button/DeleteButton.vue'
import EditButton from './button/EditButton.vue'
import ViewButton from './button/ViewButton.vue'
import ConfirmButton from './button/ConfirmButton.vue'
import CancelButton from './button/CancelButton.vue'
import LineButton from './button/LineButton.vue'
import BaseIconButton from './button/BaseIconButton.vue'
import BaseFlatButton from './button/BaseFlatButton.vue'
import BaseButtonDropdown from './button-dropdown/BaseButtonDropdown.vue'
import BaseFlatButtonDropdown from './button-dropdown/BaseFlatButtonDropdown.vue'
import BaseImage from './image/BaseImage.vue'
import BaseLink from './link/BaseLink.vue'
import BaseButtonGroup from './button-group/BaseButtonGroup.vue'
import BaseDialog from './dialog/BaseDialog.vue'
import BaseCenterDialog from './dialog/BaseCenterDialog.vue'
import ImagePreviewDialog from './dialog/ImagePreviewDialog.vue'
import MessageDialog from './dialog/MessageDialog.vue'
import MessageCenterDialog from './dialog/MessageCenterDialog.vue'
import SkeletonTable from './skeleton/SkeletonTable.vue'
import SkeletonTextItem from './skeleton/SkeletonTextItem.vue'
import SkeletonImageTextItem from './skeleton/SkeletonImageTextItem.vue'
import SkeletonSquare from './skeleton/SkeletonSquare.vue'
import SkeletonTextList from './skeleton/SkeletonTextList.vue'
import SkeletonImageTextList from './skeleton/SkeletonImageTextList.vue'
import ImageUploader from './uploader/ImageUploader.vue'
import FileUploader from './uploader/FileUploader.vue'
import BaseTooltip from './tooltip/BaseTooltip.vue'
import BasePopover from './popover/BasePopover.vue'
import FixedFooter from './FixedFooter.vue'
import MobelFixedFooter from './MobelFixedFooter.vue'
import InfiniteScroll from './infinite-scroll/InfiniteScroll.vue'
import InfiniteScrollReverse from './infinite-scroll/InfiniteScrollReverse.vue'
import BaseCarousel from './carousel/BaseCarousel.vue'
import ContainerPage from './page/ContainerPage.vue'
import ContainerBlock from './block/ContainerBlock.vue'
import Pagination from './Pagination.vue'
import VxeClientTable from './VxeClientTable.vue'
import VxeServerTable from './VxeServerTable.vue'
import Calendar from './calendar/Calendar.vue'
import FileList from './FileList.vue'
import Esign from './Esign.vue'
export default {
  install (app) {
    app.component('SvgIcon', SvgIcon)
    app.component('CardHeader', CardHeader)
    app.component('CardBody', CardBody)
    app.component('BaseForm', BaseForm)
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
    app.component('InputCitySelect', InputCitySelect)
    app.component('InputAreaSelect', InputAreaSelect)
    app.component('InputAddress', InputAddress)
    app.component('InputBirthday', InputBirthday)
    app.component('InputUrl', InputUrl)
    app.component('InputGender', InputGender)
    app.component('InputTel', InputTel)
    app.component('InputTwPassport', InputTwPassport)
    app.component('InputTwUniformNumber', InputTwUniformNumber)
    app.component('InputFileUpload', InputFileUpload)
    app.component('InputCreditCard', InputCreditCard)
    app.component('InputCreditCardExpiredDate', InputCreditCardExpiredDate)
    app.component('BaseButton', BaseButton)
    app.component('AddButton', AddButton)
    app.component('DeleteButton', DeleteButton)
    app.component('EditButton', EditButton)
    app.component('ViewButton', ViewButton)
    app.component('ConfirmButton', ConfirmButton)
    app.component('CancelButton', CancelButton)
    app.component('LineButton', LineButton)
    app.component('BaseIconButton', BaseIconButton)
    app.component('BaseFlatButton', BaseFlatButton)
    app.component('BaseButtonDropdown', BaseButtonDropdown)
    app.component('BaseFlatButtonDropdown', BaseFlatButtonDropdown)
    app.component('BaseImage', BaseImage)
    app.component('BaseLink', BaseLink)
    app.component('BaseButtonGroup', BaseButtonGroup)
    app.component('BaseDialog', BaseDialog)
    app.component('BaseCenterDialog', BaseCenterDialog)
    app.component('ImagePreviewDialog', ImagePreviewDialog)
    app.component('MessageDialog', MessageDialog)
    app.component('MessageCenterDialog', MessageCenterDialog)
    app.component('SkeletonTable', SkeletonTable)
    app.component('SkeletonTextItem', SkeletonTextItem)
    app.component('SkeletonImageTextItem', SkeletonImageTextItem)
    app.component('SkeletonSquare', SkeletonSquare)
    app.component('SkeletonTextList', SkeletonTextList)
    app.component('SkeletonImageTextList', SkeletonImageTextList)
    app.component('ImageUploader', ImageUploader)
    app.component('FileUploader', FileUploader)
    app.component('BaseTooltip', BaseTooltip)
    app.component('BasePopover', BasePopover)
    app.component('FixedFooter', FixedFooter)
    app.component('MobelFixedFooter', MobelFixedFooter)
    app.component('InfiniteScroll', InfiniteScroll)
    app.component('InfiniteScrollReverse', InfiniteScrollReverse)
    app.component('BaseCarousel', BaseCarousel)
    app.component('ContainerPage', ContainerPage)
    app.component('ContainerBlock', ContainerBlock)
    app.component('Pagination', Pagination)
    app.component('VxeClientTable', VxeClientTable)
    app.component('VxeServerTable', VxeServerTable)
    app.component('Calendar', Calendar)
    app.component('FileList', FileList)
    app.component('Esign', Esign)
  },
}
