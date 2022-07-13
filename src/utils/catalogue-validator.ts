import { body, param } from 'express-validator';

class CatalogueValidator {
    checkCreate() {
        return [
            body('description')
            .notEmpty()
            .withMessage('The Description is mandatory')
        ]
    }

    checkGet() {
        return [
            param('id')
            .notEmpty()
            .withMessage('The id is require')
            .isInt()
            .withMessage('The ID must be a number')
        ]
    }

    checkUpdate() {
        return [
            param('id')
            .notEmpty()
            .withMessage('The id is require')
            .isInt()
            .withMessage('The ID must be a number'),
            body('description')
            .notEmpty()
            .withMessage('The Description is mandatory')
        ]
    }

    checkDelete() {
        return [
            param('id')
            .notEmpty()
            .withMessage('The id is require')
            .isInt()
            .withMessage('The ID must be a number')
        ]
    }
}

export default new CatalogueValidator();

