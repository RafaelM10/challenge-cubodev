import { Request, Response } from 'express';
import User from '../model/user.model';

class userController {
  async register(req: Request, res: Response) {
    const { name, lastName, participation } = req.body;
  }
}

export default new userController();
