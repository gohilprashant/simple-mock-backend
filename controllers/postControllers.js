import { promises as fs } from 'fs';
import { v4 as uuid } from 'uuid';
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

export const addNewPost = async (req, res) => {
  // Destructure properties from the request body
  const { title, body, category } = req.body;
  try {
    const data = await readDb();

    // Create new post object with unique id
    const newPost = { id: uuid(), title, body, category };

    // Add the new post to the existing posts array
    data.posts.push(newPost);

    // Write the updated data to the db.json file
    await writeDb(data);

    // Send the new post in the response
    res.status(200).send(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
};

export const updatePost = async (req, res) => {
  const { title, body, category } = req.body;
  // Get id from params
  const { id } = req.params;
  try {
    const data = await readDb();

    // Find the post to be updated by id
    let post = data.posts.find((p) => p.id === id);

    if (!post) {
      // Send a 404 response if post is not found
      return res.status(404).json({ msg: 'Post not found' });
    }
    // Update the post's properties
    post.title = title;
    post.body = body;
    post.category = category;

    // Write the updated data to the db.json file
    await writeDb(data);

    // Send the updated post in the response
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
};

export const deletePost = async (req, res) => {
  // Get id from params
  const { id } = req.params;
  try {
    const data = await readDb();

    // Find the index of the post to be deleted by id
    const postIdx = data.posts.findIndex((p) => p.id === id);

    if (postIdx < 0) {
      // Send a 404 response if post is not found
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Remove the post from the posts array
    data.posts.splice(postIdx, 1);
    await writeDb(data);

    // Send a success message in the response
    res.status(200).send('Post deleted successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
};
