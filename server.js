import express from "express";
import orderRoutes from "./src/routes/orderRoutes.js";

const app = express();

app.use(express.json());
app.use(orderRoutes);

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
});