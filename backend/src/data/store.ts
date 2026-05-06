import { Producto } from '../models/producto.model';

// IA-CONSULTA: Pedi datos de productos simulados.
// IA-SUGERENCIA: Creación de array de objetos para simular BD.
// IA-DECISION: Uso de mock data para cumplir el requerimiento sin BD real.

export const productos: Producto[] = [
  {
    id: '1',
    nombre: 'Laptop',
    categoria: 'tecnologia',
    precio: 3000,
    stockActual: 5,
    stockMinimo: 3
  },
  {
    id: '2',
    nombre: 'Mouse',
    categoria: 'tecnologia',
    precio: 50,
    stockActual: 2,
    stockMinimo: 5
  },
  {
    id: '3',
    nombre: 'Silla',
    categoria: 'hogar',
    precio: 200,
    stockActual: 10,
    stockMinimo: 4
  }
];