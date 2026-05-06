import { productos } from '../data/store';
import { Producto } from '../models/producto.model';

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