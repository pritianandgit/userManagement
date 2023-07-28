import { check, param } from "express-validator";
import { Validator } from "../res_handler/validator/validator";


class taskValidator extends Validator{

constructor(){
    super({
        create:[
          check('taskId').trim().isUUID(4).withMessage("please provide a valid id").optional({ nullable: true, checkFalsy: true }),
          check('employeeId').trim().optional({ nullable: true, checkFalsy: true }),
          check('userId').trim().isUUID(4).withMessage("please provide a valid id").optional({ nullable: true, checkFalsy: true }),
          check('taskType').trim().custom(val => ["Dev", "Test","R&D","Plan"].includes(val)).withMessage('Invalid value of userType').optional({ nullable: true, checkFalsy: true }),
          check('taskTitle').trim().notEmpty().withMessage(`taskTitle is require`).optional({ nullable: true, checkFalsy: true }),
          check('description').trim().notEmpty().withMessage(`description is require`).optional({ nullable: true, checkFalsy: true }),
          check('expectedStartDate').trim().notEmpty().withMessage("startDate is required").isDate().withMessage("startDAte format is incorrect"),
          check('expectedEndDate').trim().notEmpty().withMessage("endDate is required").isDate().withMessage("endDate format is incorrect"),
          check('expectedDuration').trim().optional({ nullable: true, checkFalsy: true }),
          check('actualStartDate').optional({ nullable: true, checkFalsy: true }),
          check('actualEndDate').optional({ nullable: true, checkFalsy: true }),
          check('actualDuration').optional({ nullable: true, checkFalsy: true }),
          check('currentStatus').trim().notEmpty().withMessage(`current status is require`).optional({ nullable: true, checkFalsy: true }),
          check('statusDescription').trim().notEmpty().withMessage(`description is require`).optional({ nullable: true, checkFalsy: true }),
          check('remarks').trim().optional({ nullable: true, checkFalsy: true }),
          check('isDeleted').trim().optional({ nullable: true, checkFalsy: true }),
        ],
        update:[
          param('taskId').trim().isUUID(4).withMessage("please provide a valid id").optional({ nullable: true, checkFalsy: true }),
          check('employeeId').trim().optional({ nullable: true, checkFalsy: true }),
          check('userId').trim().isUUID(4).withMessage("please provide a valid id").optional({ nullable: true, checkFalsy: true }),
          check('taskType').trim().custom(val => ["Dev", "Test","R&D","plan"].includes(val)).withMessage('Invalid value of userType').optional({ nullable: true, checkFalsy: true }),
          check('taskTitle').trim().notEmpty().withMessage(`taskTitle is require`).optional({ nullable: true, checkFalsy: true }),
          check('description').trim().notEmpty().withMessage(`description is require`).optional({ nullable: true, checkFalsy: true }),
          check('expectedStartDate').trim().notEmpty().withMessage("startDate is required").isDate().withMessage("startDAte format is incorrect"),
          check('expectedEndDate').trim().notEmpty().withMessage("endDate is required").isDate().withMessage("endDate format is incorrect"),
          check('expectedDuration').trim().optional({ nullable: true, checkFalsy: true }),
          check('actualStartDate').optional({ nullable: true, checkFalsy: true }),
          check('actualEndDate').optional({ nullable: true, checkFalsy: true }),
          check('actualDuration').optional({ nullable: true, checkFalsy: true }),
          check('currentStatus').trim().notEmpty().withMessage(`current status is require`).optional({ nullable: true, checkFalsy: true }),
          check('statusDescription').trim().notEmpty().withMessage(`description is require`).optional({ nullable: true, checkFalsy: true }),
          check('remarks').trim().optional({ nullable: true, checkFalsy: true }),
          check('isDeleted').trim().optional({ nullable: true, checkFalsy: true }),

        ],
       
    })
}
}

export const TaskValidator = new taskValidator() 