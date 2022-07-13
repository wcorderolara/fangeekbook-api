import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import db from '../models';
import routes from './routes';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { options } from './utils/swaggerOptions'
dotenv.config();

const app = express();
const port = process.env.NODE_PORT || 3000;
const swaggerSpecs = swaggerJsDoc(options);

app.use(cors());
app.use(express.json());

app.use('/fgb/api/v1', routes);
app.use('/fgb/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));


db.sequelize.sync().then( () => {
    app.listen(port, () => {
        console.log(`FanGeekBook is running on host http://localhost:${port}`);
    })
})

export {app}
