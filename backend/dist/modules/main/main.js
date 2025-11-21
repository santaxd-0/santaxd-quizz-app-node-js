import { Question } from "./models/Question.js";
export const mainModule = () => {
    const questionObj = {
        id: 1,
        question: "Test question",
        options: [
            "First",
            "Second",
            "Third",
            "Fourth"
        ],
        answer: "First"
    };
    const question = new Question(questionObj.id, questionObj.question, questionObj.options, questionObj.answer);
    return question;
};
//# sourceMappingURL=main.js.map