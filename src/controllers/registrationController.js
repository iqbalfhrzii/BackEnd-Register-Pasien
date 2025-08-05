// ===== CONTROLLER: registrationController.js =====
import * as registrationService from '../services/registrationService.js';

export const getAllRegistrations = async (req, res) => {
  const regs = await registrationService.getAllRegistrations();
  res.json(regs);
};

export const getRegistrationById = async (req, res) => {
  const reg = await registrationService.getRegistrationById(+req.params.id);
  if (!reg) return res.status(404).json({ message: 'Registration not found' });
  res.json(reg);
};

export const createRegistration = async (req, res) => {
  const newReg = await registrationService.createRegistration(req.body);
  res.status(201).json(newReg);
};

export const updateRegistration = async (req, res) => {
  const updated = await registrationService.updateRegistration(+req.params.id, req.body);
  res.json(updated);
};

export const deleteRegistration = async (req, res) => {
  await registrationService.deleteRegistration(+req.params.id);
  res.json({ message: 'Registration deleted' });
};
