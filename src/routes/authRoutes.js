import { Router } from "express";
import AuthController from "../controllers/authController.js";

const router = Router();

router.post("/cadastrar", (req, res) => AuthController.cadastrar(req, res));

router.post("/login", function (req, res){
    AuthController.login(req, res)
})

export default router;