// IA-CONSULTA: Pregunte como restringir valores posibles para tipos de movimiento.
// IA-SUGERENCIA: Uso de enums en TypeScript.
// IA-DECISION: Cree un enum para evitar strings magicos y mejorar mantenibilidad.

export enum TipoMovimiento {
  ENTRADA = 'ENTRADA',
  SALIDA = 'SALIDA',
  AJUSTE = 'AJUSTE'
}

export interface Movimiento {
  productoId: string;
  tipo: TipoMovimiento;
  cantidad: number;
  fecha: Date;
}