import { Request, Response } from 'express';
import { getProductos } from '../services/producto.service';
import { registrarMovimiento } from '../services/producto.service';
import { TipoMovimiento } from '../models/movimiento.model';
import { AppError } from '../utils/appError';

export const obtenerProductos = (req: Request, res: Response) => {
  const { categoria, bajoMinimo } = req.query;

  const productos = getProductos(
    categoria as string,
    bajoMinimo === 'true'
  );

  res.json(productos);
};

export const crearMovimiento = (req: Request, res: Response) => {
  const idParam = req.params.id;
  const id = Array.isArray(idParam) ? idParam[0] : idParam; // Manejo de id como string o array
  const { tipo, cantidad } = req.body;

  // IA-CONSULTA: Pregunte como validar datos de entrada en Express sin librerias externas.
  // IA-SUGERENCIA: Validaciones manuales.
    // IA-DECISION: Validacion simple para cumplir el alcance de la prueba.
    
  if (!id) {
    throw new AppError('id es requerido', 400);
  }

  if (!tipo || !cantidad) {
    throw new AppError('tipo y cantidad son requeridos', 400);
  }

  const movimiento = registrarMovimiento(
    id,
    tipo as TipoMovimiento,
    Number(cantidad)
  );

  res.json({
    message: 'Movimiento registrado correctamente',
    data: movimiento
  });
};