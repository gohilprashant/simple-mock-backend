import express from 'express';
import { addNewPost, deletePost, getAllPosts, getPostById, updatePost } from '../controllers/postControllers.js';
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

// @route PUT api/posts/:id
// @desc Update a post by id
router.put('/:id', validatePostData, updatePost);

// @route DELETE api/posts/:id
// @desc Delete a post by id
router.delete('/:id', deletePost);

export default router;
