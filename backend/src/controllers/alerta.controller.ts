import { Request, Response } from 'express';
import { obtenerAlertas } from '../services/alerta.service';

export const listarAlertas = (req: Request, res: Response) => {
  const alertas = obtenerAlertas();

  res.json(alertas);
};