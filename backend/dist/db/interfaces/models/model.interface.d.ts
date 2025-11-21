import type { Id } from "../../../@types/custom-types.ts";
export interface ModelClass {
    /**
     * Interface for Model class
     */
    modelName: string;
    fields: any;
}
export interface Model {
    /**
     * TODO: Implement self convert to needed fields
     */
    id: Id;
    question: string;
    options: string[];
    answer: string;
}
//# sourceMappingURL=model.interface.d.ts.map