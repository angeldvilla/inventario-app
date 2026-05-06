import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/appError';

// IA-CONSULTA: Pregunte como centralizar errores en Express.
// IA-SUGERENCIA: Middleware con 4 parametros.
// IA-DECISION: Implemente middleware global para manejo uniforme.

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    });
  }

  console.error(err);

  return res.status(500).json({
    message: 'Error interno del servidor'
  });
};