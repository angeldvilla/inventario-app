import express from "express";
import { errorHandler } from './middleware/error.middleware';
import productoRoutes from './routes/producto.route';
import alertaRoutes from './routes/alerta.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
}); // CORS 


/* Ruta de prueba */
app.get("/health", (_req, res) => {
  res.status(200).json({ message: "API running" });
});

/* Rutas de la API */
app.use('/api', productoRoutes);
app.use('/api', alertaRoutes);


/* Middleware de manejo de errores */
app.use(errorHandler);

/* Corre el servidor */
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});