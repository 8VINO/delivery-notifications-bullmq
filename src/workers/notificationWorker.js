import { Worker } from "bullmq";
import { connection } from "../queue/connection.js";
import  enviarNotificacao from "../services/notification_service.js";

new Worker("NotificationQueue", async (job) => {

  const { userId, orderId, status } = job.data;

  const mensagens = {
    preparando: "Seu pedido está sendo preparado",
    enviado: "Seu pedido saiu para entrega",
    entregue: "Seu pedido foi entregue"
  };

  const mensagem = mensagens[status];

  await enviarNotificacao(`Pedido ${orderId} - ${status.toUpperCase()}`, mensagem);
  console.log(`Usuário ${userId} - Pedido ${orderId}: ${mensagem}`);

}, { connection });