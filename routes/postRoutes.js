import express from 'express';
import { addNewPost, getAllPosts, getPostById } from '../controllers/postControllers.js';
import validatePostData from '../middlewares/vaildatePostData.js';

const router = express.Router();

// @route GET api/posts
// @desc Get all posts
router.get('/', getAllPosts);

// @route GET api/posts/:id
// @desc Get post by id
router.get('/:id', getPostById);

// @route POST api/posts
// @desc Add a new post
router.post('/', validatePostData, addNewPost);

export default router;
