import dotenv from 'dotenv';
dotenv.config();

export const options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "FanGeekBook App",
            version: "1.0.0",
            description: "Sample Project for Node.js and React.js Bootcamp"
        },
        servers: [
            {
                url: process.env.API_SERVER+"/fangeekbook/api/v1"
            }
        ]
    },
    apis: ["./src/routes/*.ts"] 
}
