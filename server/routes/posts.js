import express from 'express';
import { createPost, getPosts, deletePost } from '../controller/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.delete('/:id', deletePost);

export default router;
