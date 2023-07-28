import { Router } from "express"
import userRouter from "../modules/userManagement/routes"

import auth from "../modules/auth/routes"


const mainRouter = Router()
mainRouter.use(userRouter)
mainRouter.use(auth)





export default mainRouter;

