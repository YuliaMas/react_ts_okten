const baseUrl = "https://jsonplaceholder.typicode.com"
const urls = {
    users: {
        all: '/users',
        oneById: (id: string) => '/users/' + id,
        userPosts: (id: string) => '/users/' + id + '/posts'
    },
    posts: {
        all:'/posts',
        oneById: (id: string) => '/posts/' +  id,
        postComments: (id: string) => '/posts/' + id + '/comments'
    },
    comments: {
        all: '/comments',
        oneById: (id: string) => '/comments/' + id,
    }
};
export {
    urls,
    baseUrl
}