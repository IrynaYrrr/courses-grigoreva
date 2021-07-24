import { Router } from 'express';
import order from './order';

const router = new Router();

router.use('/order', order);

export default router;
