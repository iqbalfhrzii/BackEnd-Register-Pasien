import * as dokterService from '../services/dokterService.js';

export const getAllDokters = async (req, res) => {
  try {
    const dokters = await dokterService.getAllDokters();
    res.json(dokters);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get dokters', error });
  }
};

export const getDokterById = async (req, res) => {
  try {
    const dokter = await dokterService.getDokterById(+req.params.id);
    if (!dokter) return res.status(404).json({ message: 'Dokter not found' });
    res.json(dokter);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get dokter', error });
  }
};

export const createDokter = async (req, res) => {
  try {
    const newDokter = await dokterService.createDokter(req.body);
    res.status(201).json(newDokter);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create dokter', error });
  }
};

export const updateDokter = async (req, res) => {
  try {
    const updated = await dokterService.updateDokter(+req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update dokter', error });
  }
};

export const deleteDokter = async (req, res) => {
  try {
    await dokterService.deleteDokter(+req.params.id);
    res.json({ message: 'Dokter deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Failed to delete dokter', error });
  }
};
