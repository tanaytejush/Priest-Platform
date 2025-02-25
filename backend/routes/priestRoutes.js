import express from 'express';
import { getAllPriests, getPriestById, updatePriestProfile } from '../controllers/priestController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getAllPriests);
router.get('/:id', getPriestById);
router.put('/update', protect, updatePriestProfile);

export default router;