import { productos } from '../data/store';
import { Producto } from '../models/producto.model';
import { TipoMovimiento } from '../models/movimiento.model';
import { AppError } from '../utils/appError';

export const getProductos = (
  categoria?: string,
  bajoMinimo?: boolean
): Producto[] => {

  let resultado = productos;

  if (categoria) {
    resultado = resultado.filter(p => p.categoria === categoria);
  }

  if (bajoMinimo) {
    resultado = resultado.filter(
      p => p.stockActual < p.stockMinimo
    );
  }

  return resultado;
};

export const registrarMovimiento = (
  productoId: string,
  tipo: TipoMovimiento,
  cantidad: number
) => {

  const producto = productos.find(p => p.id === productoId);

  if (!producto) {
    throw new AppError('Producto no encontrado', 404);
  }

  if (cantidad <= 0) {
    throw new AppError('La cantidad debe ser mayor a 0', 400);
  }

  // IA-CONSULTA: Pregunte como manejar diferentes tipos de movimiento de inventario.
  // IA-SUGERENCIA: Usar condicionales o switch.
  // IA-DECISION: Use switch para mayor claridad y escalabilidad.

  switch (tipo) {
    case TipoMovimiento.ENTRADA:
      producto.stockActual += cantidad;
      break;

    case TipoMovimiento.SALIDA:
      if (producto.stockActual < cantidad) {
        throw new AppError('Stock insuficiente', 400);
      }
      producto.stockActual -= cantidad;
      break;

    case TipoMovimiento.AJUSTE:
      producto.stockActual = cantidad;
      break;

    default:
      throw new AppError('Tipo de movimiento invalido', 400);
  }

  return producto;
};