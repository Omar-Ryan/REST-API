import{Request , Response , NextFunction}from "express"

export const AddTimestamp = (req:Request,res:Response,next:NextFunction)=> {
    req.timestamp = Date.now();
    next();
  }