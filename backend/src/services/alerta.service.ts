import { productos } from '../data/store';
import { Alerta } from '../models/alerta.model';

// IA-CONSULTA: Pregunte si las alertas debian persistirse o calcularse.
// IA-SUGERENCIA: Calcularlas a partir de los productos.
// IA-DECISION: Implemente logica derivada para evitar duplicidad de datos (DRY).

export const obtenerAlertas = (): Alerta[] => {

  return productos
    .filter(p => p.stockActual < p.stockMinimo)
    .map(p => ({
      productoId: p.id,
      mensaje: `Stock bajo para ${p.nombre}`,
      stockActual: p.stockActual,
      stockMinimo: p.stockMinimo
    }));
};