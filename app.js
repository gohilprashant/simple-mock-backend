import express from 'express';
import { PORT } from './config/config.js';
import postRouter from './routes/postRoutes.js';

// Create an instance of the express application
const app = express();

// Port number
const port = PORT || 5000;

// Parse incoming requests with json
app.use(express.json());

//'GET' route for the '/' endpoint
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Route to handle the post routes
app.use('/api/posts', postRouter);

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
