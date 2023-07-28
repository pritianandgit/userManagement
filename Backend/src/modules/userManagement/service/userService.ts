import User from "../models/userModel"
import Exception from "../../../common/res_handler/exception";
import { ERROR_TYPE, RESPONSE_STATUS } from "../../../common/res_handler/constants";
import { hash } from '../../../common/utils/hashing'
export default class UserService {

    //this is to get all the user
    async getUser() {
        try {
            let user = await User.findAndCountAll()
            return Promise.resolve(user)
        }
        catch (err) {
            return Promise.reject(err)
        }
    }

    // this is to get user by Id
    async getUserById(req: any, res: any) {
        let id = req.params.id
        try {
            let userExist = await User.findOne({ where: { id: id } })
            if (!userExist) {
                throw new Exception(RESPONSE_STATUS.NOT_FOUND, `user with id ${req.params.id} does not exist`)
            }
            return Promise.resolve(userExist)
        }
        catch (err) { return Promise.reject(err) }
    }


    //this is to create user
    async createUser(req: any) {
        try {
            let { name, email, password, phoneNumber, userType, status } = req.body;
            let emailExist = await User.findOne({ where: { email: email } })
            if (emailExist) {
                //    throw ("email already exist")
                throw new Exception(RESPONSE_STATUS.ALREADY_EXISTS, "Email already exists")

            }
            else {
                let newUserCreated = await User.create({
                    name: req.body.name,
                    email: req.body.email,
                    phoneNumber: phoneNumber,
                    password: hash(req.body.password),
                    userType: req.body.userType,
                    status: req.body.status,
                }).catch((data) => {
                    console.log(data);

                })
                return newUserCreated
            }
        }
        catch (err) {
            return Promise.reject(err)
        }

    }

    // this is to update user by Id
    async updateUser(req: any) {
        try {
            let id = req.params.id;
            let { name, email, password, phoneNumber, userType, status } = req.body;
            let idExist = await User.findOne({ where: { id: id } })
            if (idExist) {
                let userUpdate = await User.update(req.body, { where: { id: id } })
                let idExists = await User.findOne({ where: { id: id } })
                return idExists
            }
            else {
                throw new Exception(RESPONSE_STATUS.NOT_FOUND, "Id does not exist")
            }
        }
        catch (err) {
            return Promise.reject(err)
        }

    }


    //this is to delete user by Id 
    async deleteUser(req: any) {
        let id = req.params.id
        try {
            let existingUser = await User.findOne({ where: { id: id } });

            // throw error if user is not exist
            if ((!existingUser)) {
                throw new Exception(RESPONSE_STATUS.NOT_FOUND, "user to be deleted is not found")
            }

            // delete user 
            await User.destroy({ where: { id: req.params.id } })

            return Promise.resolve('user deleted successfully')
        } catch (err) { return Promise.reject(err) }
    }
}

