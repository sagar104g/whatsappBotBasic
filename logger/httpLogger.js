const winston = require('winston');
const expressWinston = require('express-winston');

require('winston-daily-rotate-file');

const { format } = winston;
const { printf } = format;

const customLogFormat = printf(
  ({ level, message, timestamp }) => `${timestamp} : ${level.toUpperCase()} : ${message}`
);

const fileTransport = new winston.transports.DailyRotateFile({
  filename: './logs/http-%DATE%.log',
  datePattern: 'DD-MM-YYYY',
  zippedArchive: true,
  maxFiles: '2d'
});

const logger = (app) => {
  app.use(expressWinston.logger({
    transports: [
      fileTransport
    ],
    format: winston.format.combine(format.timestamp(), customLogFormat),
    expressFormat: true
  }));
};

module.exports = logger;

