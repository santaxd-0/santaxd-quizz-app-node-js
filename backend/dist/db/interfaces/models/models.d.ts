import type { Id } from "../../../@types/custom-types.js";
export interface ModelClass {
    modelName: string;
    fields: Model;
}
export interface Model {
    id: Id;
    question: string;
    options: string[];
    answer: string;
}
//# sourceMappingURL=models.d.ts.map