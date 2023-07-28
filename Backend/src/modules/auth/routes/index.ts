
import { Router } from "express"
import authController from "../controller/auth"
class MainRouter{
    router :Router;
    auth:authController

constructor(){
 this.auth =new authController()
 this.router = Router()
 this.authRouter()
}
authRouter(){
  this.  router.route('/api/v1/auth').post(this.auth.create)
}
}
export default new MainRouter().router

