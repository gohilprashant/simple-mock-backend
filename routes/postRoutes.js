import express from 'express';
import { getAllPosts } from '../controllers/postControllers.js';

const router = express.Router();

// @route GET api/posts
// @desc Get all posts
router.get('/', getAllPosts);

export default router;
