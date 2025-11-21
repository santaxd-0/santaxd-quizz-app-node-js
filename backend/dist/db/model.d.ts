import { type Id } from "../@types/custom-types.ts";
import { DB } from "./db.ts";
import type { ModelClass } from "./interfaces/models/model.interface.ts";
export declare class Model extends DB {
    /**
     * Root class for all Models
     */
    readonly id: Id;
    constructor(id: number, fields: any);
    get modelProperties(): ModelClass;
}
//# sourceMappingURL=Model.d.ts.map