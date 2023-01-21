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
    res.json(data.posts);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
};
