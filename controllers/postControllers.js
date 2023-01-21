import { promises as fs } from 'fs';
import { POSTS_FILE_PATH } from '../config/config.js';

export const getAllPosts = async (req, res) => {
  try {
    const result = await fs.readFile(POSTS_FILE_PATH);
    const data = JSON.parse(result);

    res.json(data.posts);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
};
