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
    id: '4',
    nombre: 'Silla',
    categoria: 'hogar',
    precio: 200,
    stockActual: 10,
    stockMinimo: 4
  },
  {
    id: '5',
    nombre: 'Mesa',
    categoria: 'hogar',
    precio: 500,
    stockActual: 3,
    stockMinimo: 2
  },
  {
    id: '6',
    nombre: 'Lámpara',
    categoria: 'hogar',
    precio: 150,
    stockActual: 1,
    stockMinimo: 3
    },
  {
    id: '7',
    nombre: 'Arroz',
    categoria: 'alimentos',
    precio: 30,
    stockActual: 20,
    stockMinimo: 10
  },
  {
    id: '8',
    nombre: 'Leche',
    categoria: 'alimentos',
    precio: 15,
    stockActual: 6,
    stockMinimo: 8
  },
  {
    id: '9',
    nombre: 'Pan',
    categoria: 'alimentos',
    precio: 10,
    stockActual: 12,
    stockMinimo: 5
  }
];