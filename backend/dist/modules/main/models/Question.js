import { createId } from "../../../@types/custom-types.js";
import { Model } from "../../../db/model.js";
export class Question extends Model {
    /**
     * Question model class
     */
    question;
    options;
    answer;
    constructor(id, question, options, answer) {
        super(createId(id));
        this.question = question;
        this.options = options;
        this.answer = answer;
        this.createTableByModel(this.modelProperties);
    }
    get modelProperties() {
        return {
            modelName: this.constructor.name,
            fields: {
                id: this.id,
                question: this.question,
                options: this.options,
                answer: this.answer
            }
        };
    }
}
//# sourceMappingURL=Question.js.map