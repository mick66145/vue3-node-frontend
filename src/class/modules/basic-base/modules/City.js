import Base from '@/class/modules/Base'

class City extends Base {

  //api欄位
  id = "";
  name = "";

  constructor(obj) {
    super();
    if (obj) {
      this.id = obj?.id
      this.name = obj?.name
    }
  }
}
export default City
