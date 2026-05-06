import { Pipe, PipeTransform } from '@angular/core';

// IA-CONSULTA: Pregunte como transformar valores en templates Angular.
// IA-SUGERENCIA: Uso de pipes.
// IA-DECISION: Cree pipe para representar estado del stock.

@Pipe({
  name: 'stockStatus'
})
export class StockStatusPipe implements PipeTransform {
  transform(stock: number, minimo: number): string {
    return stock < minimo ? 'BAJO' : 'OK';
  }
}
