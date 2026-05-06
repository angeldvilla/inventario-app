// IA-CONSULTA: Pregunte como manejar errores personalizados en Express.
// IA-SUGERENCIA: Crear una clase que extienda Error.
// IA-DECISION: Cree AppError para diferenciar errores operacionales.

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number
  ) {
    super(message);
  }
}