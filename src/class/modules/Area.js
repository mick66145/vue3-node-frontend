import Base from './Base'

class Area extends Base {

  //api欄位
  id = "";
  name = "";
  detail = "";
  
  constructor(obj) {
    super();
    (obj) && (this.setInit(obj))
  }

  setInit(obj) {
    this.id = obj.id
    this.name = obj.name
    this.detail = obj.detail
  }
}
export default Area
