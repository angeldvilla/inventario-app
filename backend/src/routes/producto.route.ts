import { Router } from 'express';
import { obtenerProductos } from '../controllers/producto.controller';
import { crearMovimiento } from '../controllers/producto.controller';

const router = Router();

router.get('/productos', obtenerProductos);
router.post('/productos/:id/movimiento', crearMovimiento);

export default router;