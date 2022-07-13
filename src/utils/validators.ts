import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import {sendResponse} from './responses';

class MiddlewareValidator {
    handleValidationError(req: Request, res:Response, next: NextFunction) {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return sendResponse(res, 400, 'Something wrong happend', errors.array());
        }

        next();
    }
}

export default new MiddlewareValidator();
