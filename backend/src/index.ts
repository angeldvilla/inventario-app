import express from "express";
import { errorHandler } from './middleware/error.middleware';
import productoRoutes from './routes/producto.route';

const app = express();

app.use(express.json());

/* Ruta de prueba */
app.get("/health", (_req, res) => {
  res.status(200).json({ message: "API running" });
});

/* Rutas de la API */
app.use('/api', productoRoutes);



/* Middleware de manejo de errores */
app.use(errorHandler);

/* Corre el servidor */
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});