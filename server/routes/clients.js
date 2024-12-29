import express from 'express';
import * as clientControllers from '../controllers/clients.js';

const router = express.Router();

router.get("/", clientControllers.getClients);

export default router;
