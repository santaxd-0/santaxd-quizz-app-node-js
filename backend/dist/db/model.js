import { DB } from "./db.js";
export class Model extends DB {
    id;
    constructor(id) {
        super();
        this.id = id;
    }
    get modelProperties() {
        return {
            modelName: this.constructor.name,
            fields: {
                id: this.id
            }
        };
    }
}
//# sourceMappingURL=model.js.map