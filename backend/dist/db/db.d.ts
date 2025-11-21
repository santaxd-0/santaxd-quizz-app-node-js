import type { ModelClass } from "./interfaces/models/model.interface.ts";
export declare class DB {
    /**
     * Database root class
     * "sqlite.DatabaseSync(":memory:")" for tests only
     */
    private db;
    private addToTemplate;
    createTableByModel: (model: ModelClass) => void;
}
//# sourceMappingURL=db.d.ts.map