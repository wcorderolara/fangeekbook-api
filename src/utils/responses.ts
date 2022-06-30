import * as dotenv from 'dotenv';
import { Response } from 'express';

dotenv.config();

interface MessageResponse {
    status: number;
    message: {
        status?: number;
        level?: string;
        description?: any;
        error?: any
    }
}

interface SuccessResponse {
    status: number;
    data: {
        records?: Array<any>
    }
}

const successResponse = (res: Response, status: number, records: any[] = []) => {
    const success: SuccessResponse = {status, data: {records}};
    res.status(success.status).json(success.data)
}

const sendResponse = (res: Response, status: number, description: any = "", errors: any[]= []) => {
    const response = <MessageResponse>parseMessage(status, description, errors);
    res.status(response.status).json(response.message);
}

const getErrorResponse = (status: number, description: any = "", errors: any[] = []) => {
    return <MessageResponse>parseMessage(status, description, errors);
}

const parseMessage = (status: number, description: any, errors: any[] = []) => {
    const msjResponse:MessageResponse = { status: 0, message: {} };
    switch (status) {
        case 202:
            msjResponse.status = status;
            msjResponse.message.status = status;
            msjResponse.message.level = "INFO";
            msjResponse.message.description = "Lo sentimos no hay data para mostrar en esta consulta";
            msjResponse.message.error = errors
            break;
        case 400:
            msjResponse.status = status;
            msjResponse.message.status = status;
            msjResponse.message.level = "ERROR";
            msjResponse.message.description = "Error en Mensaje de Entrada";
            msjResponse.message.error = errors
            break;
        case 401:
            msjResponse.status = status;
            msjResponse.message.status = status;
            msjResponse.message.level = "ERROR";
            msjResponse.message.description = "Error de Autenticación";
            msjResponse.message.error = errors;
            break;
        case 403:
            msjResponse.status = status;
            msjResponse.message.status = status;
            msjResponse.message.level = "ERROR";
            msjResponse.message.description = "No tiene autorización para realizar esta petición";
            msjResponse.message.error = errors
            break;
        case 404:
            msjResponse.status = status;
            msjResponse.message.status = status;
            msjResponse.message.level = "ERROR";
            msjResponse.message.description = "El recurso al que trata de acceder no existe";
            msjResponse.message.error = errors
            break;
        case 409:
            msjResponse.status = status;
            msjResponse.message.status = status;
            msjResponse.message.level = "ERROR";
            msjResponse.message.description = "Ya existe un registro creado con estas credenciales";
            msjResponse.message.error = errors
            break;
        case 500:
            msjResponse.status = status;
            msjResponse.message.status = status;
            msjResponse.message.level = "ERROR";
            msjResponse.message.description = "Ha ocurrido un problema en el Servidor";
            msjResponse.message.error = errors
            break;
        case 503:
            msjResponse.status = status;
            msjResponse.message.status = status;
            msjResponse.message.level = "ERROR";
            msjResponse.message.description = "El Servicio al cual intenta acceder no se encuentra disponible";
            msjResponse.message.error = errors
            break;
        default:
            msjResponse.status = status;
            msjResponse.message.status = status;
            msjResponse.message.level = "ERROR";
            msjResponse.message.description = "Ha ocurrido un problema en el Servidor";
            msjResponse.message.error = errors
            break;
    }
    if(!description) return msjResponse;
    msjResponse.message.description = description;
    return msjResponse
}

export { sendResponse, getErrorResponse, successResponse }
