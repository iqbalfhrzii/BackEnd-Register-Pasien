// ===== SERVICE: registrationService.js =====
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllRegistrations = () => prisma.registrations.findMany();

export const getRegistrationById = (id) =>
  prisma.registrations.findUnique({ where: { id } });

export const createRegistration = (data) =>
  prisma.registrations.create({ data });

export const updateRegistration = (id, data) =>
  prisma.registrations.update({ where: { id }, data });

export const deleteRegistration = (id) =>
  prisma.registrations.delete({ where: { id } });
