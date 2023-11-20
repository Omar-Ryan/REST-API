import { Request, Response, NextFunction } from "express";
import { CalculatorRequestBody } from "../types";

export const validateCalculatorReq = (
  req: Request<{}, any, CalculatorRequestBody>,
  res: Response,
  next: NextFunction
) => {
  const { operator, operand1, operand2 } = req.body;
  if (typeof operand1 !== "number" || typeof operand2 !== "number") {
    return res.status(600).send("Operands must be number");
  }
  if (
    operator !== "+" &&
    operator !== "-" &&
    operator !== "*" &&
    operator !== "/"
  ) {
    return res.status(600).send("operator must be  + , - , * and / ");
  }
  next();
};
