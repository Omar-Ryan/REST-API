import{Request , Response , NextFunction}from "express"

export const errorHandle = ( err :any, req:Request,res:Response,next:NextFunction)=> {
    console.error(err.stack);
    res.status(400).send(err.message)
  }