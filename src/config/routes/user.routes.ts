import { Router } from 'express';
import UserController from '../../controllers/user.controller';

const userRouters: Router = Router();

userRouters.route('/user/register').post(UserController.register);

export default userRouters;
