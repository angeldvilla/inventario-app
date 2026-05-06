import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api.token';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';
import { MovimientoPayload } from '../models/movimiento.model';
import { Alerta } from '../models/alerta.model';

// IA-CONSULTA: Pregunte como estructurar servicios HTTP en Angular.
// IA-SUGERENCIA: Usar HttpClient con metodos tipados.
// IA-DECISION: Cree servicio centralizado para consumo de API.

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  getProductos(params?: any): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/productos`, { params });
  }

  registrarMovimiento(id: string, payload: MovimientoPayload) {
    return this.http.post(`${this.apiUrl}/productos/${id}/movimiento`, payload);
  }

  getAlertas(): Observable<Alerta[]> {
    return this.http.get<Alerta[]>(`${this.apiUrl}/alertas`);
  }
}
