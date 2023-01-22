// Middleware function to validate the request body of a post request
const validatePostData = (req, res, next) => {
  // Array to store error messages
  const errors = [];

  // Destructure properties from the request body
  const { title, body, category } = req.body;

  // Check if title is present in the request body
  if (!title) {
    errors.push({ msg: 'Title is missing!' });
  }

  // Check if body is present in the request body
  if (!body) {
    errors.push({ msg: 'Post Content is missing!' });
  }

  // Check if category is present in the request body
  if (!category) {
    errors.push({ msg: 'Category is missing!' });
  }

  // If there are errors, return a 400 response with the error messages
  if (errors.length) {
    return res.status(400).json({ error: errors });
  } else {
    // If there are no errors, call the next middleware function
    next();
  }
};

export default validatePostData;
