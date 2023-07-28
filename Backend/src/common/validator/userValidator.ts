import { check, param } from "express-validator";
import { Validator } from "../res_handler/validator/validator";


class userValidator extends Validator {


    constructor() {
        super({

            create: [
                check('id').trim().isUUID(4).withMessage("please provide a valid id").optional({ nullable: true, checkFalsy: true }),
                check('name').trim().notEmpty().withMessage(`Name is required`),
                check('email').trim().isEmail().withMessage(`Enter valid email address`).optional({ nullable: true, checkFalsy: true }),
                check('password').trim().notEmpty().withMessage("Field password is required").not().isIn(['123', 'password', 'god']).withMessage('Do not use a common word as the password').isLength({ min: 6 }).withMessage('must be at least 6 chars long').matches(/\d/).withMessage('must contain a number'),
                check('phoneNumber').trim().matches("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./[0-9]*$").withMessage('Invalid Phone number').isLength({ min: 4, max: 15 }).withMessage("Phone number's length should be between 4 to 15").optional({ nullable: true, checkFalsy: true }),
                check('status').trim().custom(val => ["active", "inactive"].includes(val)).withMessage('Invalid value of status').optional({ nullable: true, checkFalsy: true }),
                check('userType').trim().custom(val => ["Employee", "Client"].includes(val)).withMessage('Invalid value of userType').optional({ nullable: true, checkFalsy: true }),
            ],
            update: [

                param('id').trim().isUUID(4).withMessage("please provide a valid id").optional({ nullable: true, checkFalsy: true }),
                check('name').trim().notEmpty().withMessage(`Name is required`),
                check('email').trim().isEmail().withMessage(`Enter valid email address`).optional({ nullable: true, checkFalsy: true }),
                check('password').trim().notEmpty().withMessage("Field password is required").not().isIn(['123', 'password', 'god']).withMessage('Do not use a common word as the password').isLength({ min: 6 }).withMessage('must be at least 6 chars long').matches(/\d/).withMessage('must contain a number'),
                check('phoneNumber').trim().matches("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./[0-9]*$").withMessage('Invalid Phone number').isLength({ min: 4, max: 15 }).withMessage("Phone number's length should be between 4 to 15").optional({ nullable: true, checkFalsy: true }),
                check('status').trim().custom(val => ["active", "inactive"].includes(val)).withMessage('Invalid value of status').optional({ nullable: true, checkFalsy: true }),
                check('userType').trim().custom(val => ["Employee", "Client"].includes(val)).withMessage('Invalid value of userType').optional({ nullable: true, checkFalsy: true }),
            ],

          
        })
    }
}
export const UserValidator = new userValidator() 