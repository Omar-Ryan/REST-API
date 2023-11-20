import express from "express";
import { healthRouter, calculatorRouter } from "./routers";
import { AddTimestamp, Logger, errorHandle } from "./middlewares";
const app = express();
const port = 5000;

app.use(express.json());

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

app.use(AddTimestamp);
app.use(Logger);

app.use("/health", healthRouter);
app.use("/calculator", calculatorRouter);

app.use(errorHandle);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
