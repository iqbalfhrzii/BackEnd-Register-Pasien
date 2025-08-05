import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllDokters = () => prisma.dokters.findMany();

export const getDokterById = (id) => prisma.dokters.findUnique({ where: { id } });

export const createDokter = (data) => prisma.dokters.create({ data });

export const updateDokter = (id, data) => prisma.dokters.update({ where: { id }, data });

export const deleteDokter = (id) => prisma.dokters.delete({ where: { id } });
