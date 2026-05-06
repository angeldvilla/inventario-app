import { Router } from 'express';
import { listarAlertas } from '../controllers/alerta.controller';

const router = Router();

router.get('/alertas', listarAlertas);

export default router;