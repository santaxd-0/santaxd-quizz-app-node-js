import http from "node:http";
import { mainModule } from "./modules/main/main.js";
http.createServer((req, res) => {
    res.writeHead(200);
    res.end(JSON.stringify({
        message: "Hello World!"
    }));
}).listen(3000, () => {
    mainModule();
    console.log("Server is running at http://localhost:3000");
});
//# sourceMappingURL=index.js.map