import { Request, Response } from 'express';
import Users from '../model/user.model';

class UserController {
  async register(req: Request, res: Response) {
    try {
      const { name, lastName, participation } = req.body;

      const checkIfUserExist = await Users.findOne({ name, lastName });

      if (checkIfUserExist) {
        return res.status(400).json({
          statusCode: 400,
          message: 'Este usuario já está registrado',
        });
      }

      const createUser = await Users.create({
        name,
        lastName,
        participation,
      });

      return res.status(201).json({
        statusCode: 201,
        createUser,
        message: 'Registrado com sucesso!',
      });
    } catch (message) {
      console.log(message, 'error');
      return res.status(400).json({ statusCode: 400, message });
    }
  }
}

export default new UserController();
