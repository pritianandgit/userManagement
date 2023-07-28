import User from "../../userManagement/models/userModel";
import { Config } from "sequelize";
import { Op } from "sequelize";
import { Exception } from "../../../common/res_handler";
import { ERROR_TYPE, STATUS_CODE } from "../../../common/res_handler/constants";
import { hash } from '../../../common/utils/hashing'

export default class authService {
    async userLogin(req: any, res: any) {
        const { password } = req
        console.log(req.body)
        let data = hash(req.body.password)
        console.log(data);

        try {
            const userRecord = await User.findOne({
                where: {
                    [Op.or]: [
                        { email: req.body.username },
                        { phoneNumber: `${req.body.username}` },
                    ]
                }
            })


            if (userRecord === null) {

                throw new Exception(ERROR_TYPE.NOT_FOUND, "user Does not exist", STATUS_CODE.ERROR)


            }
            const userCredential = await User.findOne({

                where: {
                    [Op.or]: [
                        { email: req.body.username },
                        { phoneNumber: req.body.username },

                    ],
                    [Op.and]: [
                        { password: hash(req.body.password) }
                    ]

                }

            })
            console.log(userCredential);

            //   if(hash(password))
            return userCredential

        }
        catch (error) {
            console.log(error);
        }


    }
}
