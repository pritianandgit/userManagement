import { Router } from "express"
import UserController from "../controller/userController"
import {UserValidator} from "../../../common/validator/userValidator"
let valid = UserValidator 
class MainRouter {
    
    router: Router; 
    user: UserController
    // valid :userValidator
    constructor() {
        this.user = new UserController()
        this.router = Router()
        this.userRouter()
        // this.valid =  new userValidator()
    }
   
    userRouter() {
        this.router.route('/api/v1/user').get(this.user.readAll)
        this.router.route('/api/v1/user/:id').get(this.user.read)
        this.router.route('/api/v1/users').post(valid.makeValidation('create'), this.user.create)
        this.router.route('/api/v1/user/:id').put(valid.makeValidation('update'), this.user.update)
        this.router.route('/api/v1/user/:id').delete(this.user.delete)
    }
}
export default new MainRouter().router