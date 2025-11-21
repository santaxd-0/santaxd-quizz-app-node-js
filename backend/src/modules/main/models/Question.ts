import { Model } from "../../../db/Model.ts";

export class Question extends Model {
    /**
     * Question model class
     */
    constructor(id: number, question: string, options: string[], answer: string) {
        super(id, {
            question,
            options,
            answer
        });
    }
}