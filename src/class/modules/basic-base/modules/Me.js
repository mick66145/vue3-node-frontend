import Base from '@/class/modules/Base'

class Me extends Base {

  //api欄位
  id = "";
  name = "";
  city = "";
  area = "";
  address = "";
  birthday = "";
  email = "";
  phone = "";
  tel = "";

  //map欄位
  address_obj={
    city: '',
    area: '',
    address: '',
  }
  address_text = ""

  constructor(obj) {
    super();
    if(obj){
      //api欄位
      this.id = obj?.id
      this.name = obj?.name
      this.city = obj?.city
      this.area = obj?.area
      this.address = obj?.address
      this.birthday = obj?.birthday
      this.email = obj?.email
      this.phone = obj?.phone
      this.tel = obj?.tel

      //map欄位
      this.address_obj={
        city: this.city,
        area: this.area,
        address: this.address,
      }
      this.setAddressText()
    }
  }
  
  setAddress(){
    this.city = this.address_obj.city
    this.area = this.address_obj.area
    this.address = this.address_obj.address
  }

  setAddressText() {
    if (this.city || this.area || this.address) {
      let addressText = ''
      this.city && (addressText += `${this.city.name}`)
      this.area && (addressText += `${this.area.name}`)
      this.address && (addressText += `${this.address}`)
      this.address_text = addressText
    }
  }
}
export default Me

