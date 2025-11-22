import { createId, type Id } from "../@types/custom-types.ts";
import type { ModelClass } from "./interfaces/models/model.interface.ts";
import { DataClass } from "./ORM/DataClass.ts";

export class Model extends DataClass {
    /**
     * Root class for all Models
     */
    public readonly id: Id;

    constructor(id: number, fields: any) {
        super();
        this.id = createId(id);
        for (const field in fields) {
            this[field as keyof this] = fields[field];
        }
        this.createTableByModel(this.modelProperties);
    }

    get modelProperties() : ModelClass {
        return {
            modelName: this.constructor.name,
            fields: {
                ...this
            }
        }
    }
}