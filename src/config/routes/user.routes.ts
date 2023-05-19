import { Router } from 'express';
import userController from '../../controllers/user.controller';

const userRouters: Router = Router();

userRouters.route('/user/register').post(userController.register);

export default userRouters;
