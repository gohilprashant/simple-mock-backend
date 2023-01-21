import express from 'express';

// Create an instance of the express application
const app = express();

// Define the port number
const port = 5000;

//'GET' route for the '/' endpoint
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
