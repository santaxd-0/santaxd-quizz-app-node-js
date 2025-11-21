import sqlite from "node:sqlite";
export class DB {
    db = new sqlite.DatabaseSync(":memory:");
    addToTemplate = (field, fieldsArray, sqlType) => {
        fieldsArray.push(`\n\t${field} ${sqlType}`);
    };
    createTableByModel = (model) => {
        let template = `CREATE TABLE IF NOT EXISTS ${model.modelName} (`;
        const fieldsArray = [];
        for (const field in model.fields) {
            const modelField = model.fields[field];
            switch (typeof modelField) {
                case "string":
                    this.addToTemplate(field, fieldsArray, `TEXT NOT NULL`);
                    break;
                case "number":
                    this.addToTemplate(field, fieldsArray, `INTEGER`);
                    break;
                case "object":
                    this.addToTemplate(field, fieldsArray, `TEXT[] NOT NULL`);
                    break;
                case "symbol":
                    this.addToTemplate(field, fieldsArray, `INTEGER PRIMARY KEY AUTOINCREMENT`);
                    break;
            }
        }
        template += fieldsArray.join(",");
        template += `\n)`;
        console.log(template);
        this.db.exec(template);
    };
}
//# sourceMappingURL=db.js.map