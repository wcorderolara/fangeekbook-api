import {createLogger, format, transports} from 'winston';

const loggerFormat = format.printf(({level, message, timestamp})=> {
    return `${timestamp} ${level}: ${message}`
});

const logger = createLogger({
    format: format.combine(
        format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        loggerFormat,
        format.json()
    ),
    transports: [
        new transports.File({
            filename: './src/logs/error.log',
            level: 'error'
        }),
        new transports.File({
            filename: './src/logs/combined.log'
        }),
    ],
});

export {logger};
