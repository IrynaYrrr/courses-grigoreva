import { Router } from 'express';
import order from '../controllers/order';

const router = new Router();

router.post('/', order.post);

export default router;
