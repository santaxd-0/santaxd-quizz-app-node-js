import http from "node:http";

import { mainModule } from "./modules/main/main.ts";

http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200);
    res.end(JSON.stringify({
        message: "Hello World!"
    }));
}).listen(3000, () => {
    mainModule();
    console.log("Server is running at http://localhost:3000");
});