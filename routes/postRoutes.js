import express from 'express';
import { getAllPosts, getPostById } from '../controllers/postControllers.js';

const router = express.Router();

// @route GET api/posts
// @desc Get all posts
router.get('/', getAllPosts);

// @route GET api/posts/:id
// @desc Get post by id
router.get('/:id', getPostById);

export default router;
