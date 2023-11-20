import {Request, Router } from "express";

export const router = Router();

router.get("/", (req : Request, res) => {
  throw new Error("Application Error")
  res.send({ massage: "OK" , timestamp : req.timestamp});
});
