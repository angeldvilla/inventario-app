import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { InventarioService } from '../../services/inventario.service';
import { Producto } from '../../models/producto.model';
import { Alerta } from '../../models/alerta.model';

// IA-CONSULTA: Cómo estructurar un componente standalone con formularios reactivos y consumo de API
// IA-SUGERENCIA: Usar OnInit + FormBuilder + estado local (loading/error)
// IA-DECISION: Implementación con manejo básico de estado y separación de responsabilidades

@Component({
  selector: 'app-inventario-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './inventario-dashboard.html',
  styleUrl: './inventario-dashboard.css',
})
export class InventarioDashboard implements OnInit {

  productos: Producto[] = [];
  alertas: Alerta[] = [];

  loading = false;
  error: string | null = null;

  form: FormGroup;

  constructor(
    private inventarioService: InventarioService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      productoId: ['', Validators.required],
      tipo: ['', Validators.required],
      cantidad: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  // 🔹 Cargar productos + alertas
  cargarDatos(): void {
    this.loading = true;
    this.error = null;

    this.inventarioService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Error cargando productos';
        this.loading = false;
      }
    });

    this.cargarAlertas();
  }

  // 🔹 Cargar alertas
  cargarAlertas(): void {
    this.inventarioService.getAlertas().subscribe({
      next: (data) => this.alertas = data,
      error: () => {
        this.error = 'Error cargando alertas';
      }
    });
  }

  // 🔹 Registrar movimiento (EL MÉTODO QUE TE FALTABA)
  registrarMovimiento(): void {
    if (this.form.invalid) return;

    const { productoId, tipo, cantidad } = this.form.value;

    this.inventarioService.registrarMovimiento(productoId, {
      tipo,
      cantidad
    }).subscribe({
      next: () => {
        this.form.reset();
        this.cargarDatos(); // 🔥 refresca UI
      },
      error: () => {
        this.error = 'Error registrando movimiento';
      }
    });
  }
}
