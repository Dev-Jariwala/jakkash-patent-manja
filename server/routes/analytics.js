import express from 'express';
import { getAnalytics } from '../controllers/analytics.js';

const router = express.Router();

router.get("/:collection_id/analytics", getAnalytics);

export default router;
