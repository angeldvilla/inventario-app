import { Request, Response } from 'express';
import { getProductos } from '../services/producto.service';

export const obtenerProductos = (req: Request, res: Response) => {
  const { categoria, bajoMinimo } = req.query;

  const productos = getProductos(
    categoria as string,
    bajoMinimo === 'true'
  );

  res.json(productos);
};