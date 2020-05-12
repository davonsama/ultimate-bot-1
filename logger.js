const winston = require('winston');

const {
  timestamp, combine, json,
} = winston.format;

const logger = winston.createLogger({
  format: combine(
    timestamp(),
    json(),
  ),
  transports: [
    new winston.transports.File({
      filename: 'logging.log',
      maxsize: '2m',
      maxFiles: '14d',
    }),
  ],
});

module.exports = logger;
