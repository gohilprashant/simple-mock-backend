# Simple Mock Backend

A simple and ready-made backend mock API for frontend development. This API is easy to set up and use, and it allows for quick prototyping and testing of frontend applications without the need for additional configurations.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm (comes with Node.js)

- A text editor of your choice

### Installation

1. Clone the repository to your local machine

git clone https://github.com/gohilprashant/simple-mock-backend.git

2. Go to the project directory

```

cd simple-mock-backend

```

3. Install the dependencies

```

npm install

```

4. Start the server

```
npm start
```

The server will start running on `http://localhost:5000`

### Configurations

The `config/config.js` file contains the following settings:

- `PORT`: The port number on which the server will run. The default value is `5000`.

- `POSTS_FILE_PATH`: The path of the json file where the posts data is stored. The default value is `data/posts.json`.

## Routes

The API has the following routes:

- `GET api/posts`: Get all posts

- `GET api/posts/:id`: Get post by id

- `POST api/posts`: Add a new post

  - Request body: { title, body, category }

- `PUT api/posts/:id`: Update a post by id

  - Request body: { title, body, category }

- `DELETE api/posts/:id`: Delete a post by id

## Built With

- [Express.js](https://expressjs.com/) - The web framework used

## Author

- **Prashant Gohil** - [gohilprashant](https://github.com/gohilprashant)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md)
