import Base from '@/class/modules/Base'

class BaseFile extends Base {

    //api
    id = ""
    mime = ""
    name = ""
    size = ""
    url = ""
    
    //map
    filename = ""

    constructor(obj) {
        super();
        if (obj) {
            //api
            this.id = obj?.id || "";
            this.mime = obj?.mime || "";
            this.name = obj?.name || "";
            this.size = obj?.size || "";
            this.url = obj?.url || "";

            //map
            this.filename = this.name
        }
    }
}
export default BaseFile;
