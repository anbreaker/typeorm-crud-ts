import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../entity/User';

export const getGreetings = async (req: Request, res: Response): Promise<Response> => {
  return res.json({ msg: 'Hello World' });
};

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  const users = await getRepository(User).find();

  return res.json({ users });
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  const newUser = getRepository(User).create(req.body);

  const userSave = await getRepository(User).save(newUser);

  return res.json({ userSave });
};

export const getUser = async (req: Request, res: Response): Promise<Response> => {
  const user = await getRepository(User).findOne(req.params.id);

  return res.json({ user });
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
  const user = await getRepository(User).findOne(req.params.id);

  if (user) {
    getRepository(User).merge(user, req.body);

    const userUpdate = await getRepository(User).save(user);

    return res.json(userUpdate);
  }

  return res.status(404).json({ msg: 'Not User Found' });
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const user = await getRepository(User).delete(req.params.id);

  return res.json({ user });
};
