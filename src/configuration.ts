import dotenv from "dotenv";
dotenv.config();

export default {
    ormConfigFile: process.env.ORM_CONFIG || "ormconfig_js.js",
    routingConfigFile: process.env.ROUTING_CONFIG || "routing-controller.json",
    serverPort: Number(process.env.SERVER_PORT || "2919"),
    isDevelopment: process.env.NODE_ENV == "development",
    logsFolder: process.env.LOGS_FOLDER || "logs",
    logDateTimeFormat: process.env.DATETIME_LOG_FORMAT || "YYYY-MM-DD HH:mm:ss:ms",
    requestLogFormat: process.env.REQUEST_LOG_FORMAT || ":remote-addr :remote-user :method :url :status :res[content-length] - :response-time ms",
    secretKey: process.env.SECRET_KEY || "secret",
    authHeader: process.env.AUTH_HEADER || "authorization",
    logHttpRequests: !!process.env.LOG_HTTP_REQUESTS,
};
