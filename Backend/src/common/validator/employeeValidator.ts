import { check, param } from "express-validator";
import { Validator } from "../res_handler/validator/validator";


class employeeValidator extends Validator {

    constructor() {

        super({
            create: [
                check('employeeId').trim().notEmpty().withMessage(`employeeId is required`),
                check('employeeType').trim().custom(val => ["Employee", "Trainee"].includes(val)).withMessage('Invalid value of userType').optional({ nullable: true, checkFalsy: true }),
                check('userId').trim().isUUID(4).withMessage("please provide a valid id").optional({ nullable: true, checkFalsy: true }),
                check('designation').trim().optional({ nullable: true, checkFalsy: true }),
                check('skills').trim().notEmpty().withMessage(`skills is required`),
                check('experience').trim().notEmpty().withMessage(`experience is required`),
                check('doj').trim().optional()
            ],

            update: [
                param('employeeId').trim().notEmpty().withMessage(`employeeId is required`),
                check('employeeType').trim().custom(val => ["Employee", "Trainee"].includes(val)).withMessage('Invalid value of userType').optional({ nullable: true, checkFalsy: true }),
                check('userId').trim().isUUID(4).withMessage("please provide a valid id").optional({ nullable: true, checkFalsy: true }),
                check('designation').trim().optional({ nullable: true, checkFalsy: true }),
                check('skills').trim().notEmpty().withMessage(`skills is required`),
                check('experience').trim().notEmpty().withMessage('experience is required'),
                check('doj').trim().optional()
            ],
            

        })
    }
}

export const EmployeeValidator = new employeeValidator()