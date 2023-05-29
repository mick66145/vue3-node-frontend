import Base from './Base'

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

  constructor(obj) {
    super();
    if(obj){
      this.id = obj?.id
      this.name = obj?.name
      this.city = obj?.city
      this.area = obj?.area
      this.address = obj?.address
      this.birthday = obj?.birthday
      this.email = obj?.email
      this.phone = obj?.phone
      this.tel = obj?.tel
    }
  }
}
export default Me
