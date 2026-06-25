// src/controllers/plan.controller.js
import * as CourseModel from "../models/course.models.js";

// GET /api/plans
export async function listar(req, res) {
  const cursos = await CourseModel.listarCursos();
  return res.json(cursos);
}

// GET /api/plans/:id
export async function buscar(req, res) {
  const id = req.params.id;
  const curso = await CourseModel.buscarCursoPorId(id);
  if (!curso) {
    return res.status(404).json({ error: "Curso não encontrado." });
  }
  return res.json(curso);
}

// POST /api/plans
export async function criar(req, res) {
  const { name, description, teacher } = req.body;

  if (!name ||  !description || !teacher) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const curso = await CourseModel.criarCurso({
    name,
    teacher,
    description,
   
  });
  return res.status(201).json(curso);
}

// PUT /api/plans/:id
export async function atualizar(req, res) {
  const id = req.params.id;
  const { name, teacher, description, } = req.body;

  const curso = await CourseModel.buscarCursoPorId(id);
  if (!curso) {
    return res.status(404).json({ error: "curso não encontrado." });
  }

  const atualizado = await CourseModel.atualizarCurso(id, {
    name,
    description,
    teacher,
  });
  return res.json(atualizado);
}

// DELETE /api/plans/:id
export async function deletar(req, res) {
  const id = req.params.id;

  const curso = await CourseModel.buscarCursoPorId(id);
  if (!curso) {
    return res.status(404).json({ error: "curso não encontrado." });
  }

  await CourseModel.deletarCurso(id);
  return res.status(204).send();
}
