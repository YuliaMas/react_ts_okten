const baseUrl = "https://jsonplaceholder.typicode.com";

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users: {
          base: users
    },
    posts: {
        base: posts,
    },
    comments: {
        base: comments,
    }
}

export {
    baseUrl,
    urls
}