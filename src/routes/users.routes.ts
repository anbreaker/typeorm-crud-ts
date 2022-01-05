import { Router } from 'express';
import {
  createUser,
  getGreetings,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from '../controllers/users.controller';

const router = Router();

// /api/
router.get('/', getGreetings);

router.get('/users', getUsers);

router.post('/users', createUser);

router.get('/users/:id', getUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

export default router;
