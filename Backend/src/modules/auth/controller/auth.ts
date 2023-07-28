import HttpStatus from "http";
import { Request, Response } from "express";
import { ERROR_TYPE, RESPONSE_STATUS, STATUS_CODE } from "../../../common/res_handler/constants"
import { respHandler } from "../../../common/res_handler"
import User from "../../userManagement/models/userModel";
import authService from "../service/authService";

// import { logger } from "../../core/utils/logger";

const authServiceInstance = new authService()

class authController {
    create(req: Request, res: Response) {
        authServiceInstance.userLogin(req, res)
            .then((result: any) => {
                return respHandler.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS_CREATED)
            })
            .catch((err: any) => {
                respHandler.sendError(res, err)
            })
    }
}



export default authController
