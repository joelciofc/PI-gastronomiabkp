import { Router } from "express";

const router = Router();

router.post("/cadastrar", (req, res) => AuthController.cadastrar(req, res));

export default router;