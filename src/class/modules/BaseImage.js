import Base from '@/class/modules/Base'

class BaseImage extends Base {

    //api
    id = ""
    title = ""
    alt = ""
    mime = ""
    name = ""
    size = ""
    url = ""

    constructor(obj) {
        super();
        if (obj) {
            this.id = obj?.id || "";
            this.title = obj?.title || "";
            this.alt = obj?.alt || "";
            this.mime = obj?.mime || "";
            this.name = obj?.name || "";
            this.size = obj?.size || "";
            this.url = obj?.url || "";
        }
    }
}
export default BaseImage;
