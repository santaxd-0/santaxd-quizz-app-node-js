import sqlite from "node:sqlite"
import type { ModelClass, Model } from "./interfaces/models/model.interface.ts";

export class DB {
    /**
     * Database root class
     * "sqlite.DatabaseSync(":memory:")" for tests only
     */
    private db = new sqlite.DatabaseSync(":memory:");

    private addToTemplate = (field: string, fieldsArray: Required<Array<string>>, sqlType: string) => {
        fieldsArray.push(`\n\t${field} ${sqlType}`);
    }

    createTableByModel = (model: ModelClass) => {
        let template = `CREATE TABLE IF NOT EXISTS ${model.modelName} (`;
        const fieldsArray: string[] = [];
        for (const field in model.fields) {
            const modelField = model.fields[field as keyof Model];
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
    }
}
