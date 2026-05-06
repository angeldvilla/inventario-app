import { Router } from 'express';
import { obtenerProductos } from '../controllers/producto.controller';

const router = Router();

router.get('/productos', obtenerProductos);

export default router;