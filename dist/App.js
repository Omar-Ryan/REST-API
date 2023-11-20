"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = require("./routers");
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.json());
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
// app.get("/:id", (req, res) => {
//   console.log(`Query parameters: ${JSON.stringify(req.query)}`);
//   console.log(`headers: ${JSON.stringify(req.headers)}`);
//   console.log(`method: ${JSON.stringify(req.method)}`);
//   res.send(`Hello ${req.params.id}`);
// });
// app.use((req,res,next)=>{
//   console.log(`${req.method} # ${req.ip} # ${req.originalUrl}`);
//   next();
// })
app.use(middlewares_1.AddTimestamp);
app.use(middlewares_1.Logger);
app.use("/health", routers_1.healthRouter);
app.use("/calculator", routers_1.calculatorRouter);
app.use(middlewares_1.errorHandle);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
