const validatePostData = (req, res, next) => {
  const errors = [];
  const { title, body, category } = req.body;
  if (!title) {
    errors.push({ msg: 'Title is missing!' });
  }
  if (!body) {
    errors.push({ msg: 'Post Content is missing!' });
  }
  if (!category) {
    errors.push({ msg: 'Category is missing!' });
  }

  if (errors.length) {
    return res.status(400).json({ error: errors });
  } else {
    next();
  }
};

export default validatePostData;
