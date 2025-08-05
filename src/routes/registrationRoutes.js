// ===== ROUTES: registrationRoutes.js =====
import express from 'express';
import * as registrationController from '../controllers/registrationController.js';
const router = express.Router();

router.get('/', registrationController.getAllRegistrations);
router.get('/:id', registrationController.getRegistrationById);
router.post('/', registrationController.createRegistration);
router.put('/:id', registrationController.updateRegistration);
router.delete('/:id', registrationController.deleteRegistration);

export default router;