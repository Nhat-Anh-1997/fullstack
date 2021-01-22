import express from 'express';
import { createPost, getPosts, deletePost } from '../controller/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPost);
router.delete('/:id', auth, deletePost);

export default router;
