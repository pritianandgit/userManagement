import UserService from "../service/userService";
import { RESPONSE_STATUS, STATUS_CODE } from "../../../common/res_handler/constants"
import {respHandler} from "../../../common/res_handler"
import { Request, Response } from "express";

const userServiceInstance = new UserService();
class UserController{
    // this function returns list of all user
    readAll(req:Request, res:Response){
        userServiceInstance.getUser()
            .then((result:any) => {
                // res.send(result)
                return respHandler.sendSuccess(res, result,RESPONSE_STATUS.SUCCESS) 
            })
            .catch((err:any) => {
                respHandler.sendError(res,err)
            })
    }

    // this function returns user by id
    read(req:Request, res:Response){
        userServiceInstance.getUserById(req,res)
            .then((result:any) => {
                // res.send(result)
                return respHandler.sendSuccess(res, result,RESPONSE_STATUS.SUCCESS) 
            })
            .catch((err:any) => {
                respHandler.sendError(res,err)
            })
    }

    // this function create user
    create(req:Request, res:Response){
        userServiceInstance.createUser(req)
            .then((result:any) => {
               
                //  res.send(result)
                return respHandler.sendSuccess(res, result,RESPONSE_STATUS.SUCCESS) 
            })
            .catch((err:any) => {
                respHandler.sendError(res,err)
            })
    }

    // this function update user by id
    update(req:Request, res:Response){
        userServiceInstance.updateUser(req)
            .then((result:any) => {
                // res.send(result)
                return respHandler.sendSuccess(res, result,RESPONSE_STATUS.SUCCESS) 
            })
            .catch((err:any) => {
                respHandler.sendError(res,err)
            })
    }

    // this function delete user by id
    delete(req:Request, res:Response){
        userServiceInstance.deleteUser(req)
            .then((result:any) => {
                // res.send(result)
                return respHandler.sendSuccess(res, result,RESPONSE_STATUS.SUCCESS) 
            })
            .catch((err:any) => {
                respHandler.sendError(res,err)
            })
    }
}


export default UserController