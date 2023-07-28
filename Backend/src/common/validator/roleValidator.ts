import { check, param } from "express-validator";
import { describe } from "node:test";
import { Validator } from "../res_handler/validator/validator";


class roleValidator extends Validator {

    constructor() {
        super({
            create: [
                check('id').trim().isUUID(4).withMessage("please provide a valid id").optional({ nullable: true, checkFalsy: true }),
                check('name').trim().notEmpty().withMessage(`Name is required`),
                check('email').trim().isEmail().withMessage(`Enter valid email address`).optional({ nullable: true, checkFalsy: true }),
                check('description').trim().notEmpty().withMessage(`description is require`).optional({ nullable: true, checkFalsy: true }),
            ],
            update: [
                param('id').trim().isUUID(4).withMessage("please provide a valid id").optional({ nullable: true, checkFalsy: true }),
                check('name').trim().notEmpty().withMessage(`Name is required`),
                check('email').trim().isEmail().withMessage(`Enter valid email address`).optional({ nullable: true, checkFalsy: true }),
                check('description').trim().notEmpty().withMessage(`description is require`).optional({ nullable: true, checkFalsy: true }),
            ],
           

        })
    }

}

// export default roleValidator

export const RoleValidator = new roleValidator();