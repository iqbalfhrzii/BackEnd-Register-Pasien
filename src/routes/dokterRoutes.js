// ===== ROUTES: dokterRoutes.js =====
import express from 'express';
import * as dokterController from '../controllers/dokterController.js';
const router = express.Router();

router.get('/', dokterController.getAllDokters);
router.get('/:id', dokterController.getDokterById);
router.post('/', dokterController.createDokter);
router.put('/:id', dokterController.updateDokter);
router.delete('/:id', dokterController.deleteDokter);

export default router;