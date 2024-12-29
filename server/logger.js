import winston from "winston";
const { combine, errors, timestamp, json, prettyPrint } = winston.format;
winston.loggers.add("error-logger", {
  level: "error",
  format: combine(errors({ stack: true }), timestamp(), json(), prettyPrint()),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.Console({ level: "error" }),
  ],
  defaultMeta: {
    service: "error-logger",
  },
});
