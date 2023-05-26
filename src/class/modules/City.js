import Base from './Base'

class City extends Base {

  //api欄位
  id = "";
  name = "";

  constructor(obj) {
    super();
    (obj) && (this.setInit(obj))
  }

  setInit(obj) {
    this.id = obj.id
    this.name = obj.name
  }
}
export default City
