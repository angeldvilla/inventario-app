import { Component } from '@angular/core';
import { InventarioDashboard } from './components/inventario-dashboard/inventario-dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InventarioDashboard],
  templateUrl: './app.html',
})
export class App {}
