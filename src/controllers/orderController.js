import { notificationQueue } from "../queue/notificationQueue.js";

export const updateOrderStatus = async (req, res) => {

  const { userId, orderId, status } = req.body;

  console.log(`Pedido ${orderId} atualizado para ${status}`);

  await notificationQueue.add("sendNotification", {userId, orderId, status});

  return res.json({ message: "Notificação enviada para fila" });
};