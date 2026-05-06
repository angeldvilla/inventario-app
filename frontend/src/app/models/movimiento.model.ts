export enum TipoMovimiento {
  ENTRADA = 'ENTRADA',
  SALIDA = 'SALIDA',
  AJUSTE = 'AJUSTE'
}

export interface MovimientoPayload {
  tipo: TipoMovimiento;
  cantidad: number;
}
