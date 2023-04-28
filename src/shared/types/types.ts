import { Request } from 'express';

export interface RequestWithJwt extends Request {
    jwt?: { [key: string]: any };
  }

// Type for custom error

export interface CustomError extends Error {
    status?: number;
}

// user interface 

export interface IUser {
    name: string;
    email: string;
    phone: string;
    rut: string;
    password: string;
    status?: boolean;
    recoverPasswordToken?: string;
    isConfirmed?: boolean;
}

// authorization interface

export interface AuthData {
    email: string,
    password: string,
}