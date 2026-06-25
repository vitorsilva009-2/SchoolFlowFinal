import { prisma } from "../lib/prisma.js";

export async function listarCursos() {
  return prisma.Course.findMany();
}

export async function buscarCursoPorId(id) {
  return prisma.Course.findUnique({ where: { id } });
}

export async function criarCurso(data) {
  return prisma.Course.create({ data });
}

export async function atualizarCurso(id, data) {
  return prisma.Course.update({ where: { id }, data });
}

export async function deletarCurso(id) {
  return prisma.Course.delete({ where: { id } });
}