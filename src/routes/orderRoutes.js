import { Router } from "express";
import { updateOrderStatus } from "../controllers/orderController.js";

const router = Router();

router.post("/order/status", updateOrderStatus);

export default router;