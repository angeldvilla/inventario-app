import { InjectionToken } from '@angular/core';

// IA-CONSULTA: Pregunte como desacoplar la URL base en Angular.
// IA-SUGERENCIA: Uso de InjectionToken.
// IA-DECISION: Uso token para facilitar configuracion y testing.

export const API_URL = new InjectionToken<string>('API_URL');
