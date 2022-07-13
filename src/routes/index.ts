import { Router } from 'express';
import userTypes from './user-type.routes';

const routes = Router();

routes.use('/user-types', userTypes);

export default routes;
