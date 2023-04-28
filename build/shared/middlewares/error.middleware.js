"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNewError = exports.errorHandler = void 0;
const errorHandler = (error, req, res, next) => {
    const errorMap = {
        300: 'Multiple Choices',
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        500: 'Internal Server Error',
        502: 'Bad Gateway',
        503: 'Service Unavailable',
        504: 'Gateway Timeout'
    };
    const { status = 500, message } = error;
    const errorMessage = message || errorMap[status] || 'Unknown Error';
    res.status(status).json({ message: errorMessage });
};
exports.errorHandler = errorHandler;
const generateNewError = (status, message) => {
    const error = new Error();
    error.message = message || '';
    error.status = status;
    throw error;
};
exports.generateNewError = generateNewError;
