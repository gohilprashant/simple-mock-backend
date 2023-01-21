import { promises as fs } from 'fs';
import { POSTS_FILE_PATH } from '../config/config.js';

// Asynchronous function to read the file and parse its contents as JSON
async function readDb() {
  try {
    return JSON.parse(await fs.readFile(POSTS_FILE_PATH));
  } catch (err) {
    console.error(err);
    throw new Error('Error reading file');
  }
}

// Asynchronous function to write the file with the updated data
async function writeDb(data) {
  try {
    await fs.writeFile(POSTS_FILE_PATH, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
    throw new Error('Error writing to file');
  }
}

export const getAllPosts = async (req, res) => {
  try {
    const data = await readDb();
    // Send the posts in response
    res.json(data.posts);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
};

export const getPostById = async (req, res) => {
  // Get id from params
  const { id } = req.params;
  try {
    const data = await readDb();
    // Find post by id
    const post = data.posts.find((p) => p.id === id);
    if (!post) {
      // Send 404 if post not found
      res.status(404).send('Post not found');
      return;
    }
    // Send the post in response
    res.send(post);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
};
