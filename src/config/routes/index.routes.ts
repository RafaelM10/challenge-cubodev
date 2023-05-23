import { Router } from 'express';
import userRouters from './user.routes';

const router: Router = Router();

router.use(userRouters);

export default router;
