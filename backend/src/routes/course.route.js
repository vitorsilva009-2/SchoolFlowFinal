import { Router } from "express";
import * as CursoController from "../controllers/course.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/", CursoController.listar);
router.get("/:id", CursoController.buscar);
router.post("/", requireAuth, CursoController.criar);
router.put("/:id", requireAuth, CursoController.atualizar);
router.delete("/:id", requireAuth, CursoController.deletar);

export default router;