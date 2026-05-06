export interface Producto {
  id: string;
  nombre: string;
  categoria: string;
  precio: number;
  stockActual: number;
  stockMinimo: number;
}