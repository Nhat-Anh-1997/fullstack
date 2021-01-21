import express from 'express';
import { createPost, getPosts ,deletePost,getById} from '../controller/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.delete('/:id', deletePost)
router.get('/:id',getById)

export default router;
