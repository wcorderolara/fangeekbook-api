import { Request, Response } from 'express';
import models from '../../../models';
import { iCatalogueAttributes, iCatalogueInstance} from '../../interfaces/iCatalogue'
import { sendResponse, successResponse } from '../../utils/responses';

class UserTypeController {
    static create = async (req: Request, res: Response) => {
        try {
            const userTypeInstance: iCatalogueInstance = await models.UserType.create({...<iCatalogueAttributes>req.body});
            return successResponse(res, 201, [userTypeInstance]);
        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static get = async (req: Request, res: Response) => {
        try{
            const userTypeInstance: iCatalogueInstance = await models.UserType.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!userTypeInstance) {
                return sendResponse(res, 404, 'The User Type does not exists');
            }

            return successResponse(res, 200, [userTypeInstance])

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static getAll = async (req: Request, res: Response) => {
        try {
            const userTypeInstances: Array<iCatalogueInstance> = await models.UserType.findAll({
                where: {
                    status: true
                }
            })

            return successResponse(res, 200, userTypeInstances);
        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static update = async (req: Request, res: Response) => {
        try{ 
            const userTypeInstance = await models.UserType.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!userTypeInstance) {
                return sendResponse(res, 404, 'The User Type does not exists');
            }

            userTypeInstance.update({...<iCatalogueAttributes>req.body});
            userTypeInstance.save();

            successResponse(res, 200, [userTypeInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }

    static delete = async (req: Request, res: Response) => {
        try{ 
            const userTypeInstance = await models.UserType.findOne({
                where: {
                    id: req.params.id
                }
            })

            if(!userTypeInstance) {
                return sendResponse(res, 404, 'The User Type trying to delete does not exists');
            }

            userTypeInstance.update({status: false});
            userTypeInstance.save();

            successResponse(res, 200, [userTypeInstance]);

        } catch(error: any) {
            return sendResponse(res, 500, '', error.errors[0]);
        }
    }
}

export default UserTypeController;

// Create Read Update Delete
