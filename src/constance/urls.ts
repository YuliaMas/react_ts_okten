const baseUrl = "https://dummyjson.com";

const urls = {
    userUrls : {
        all: '/users',
        // userById: (id:number) => '/users/' + id,
        userPosts: (id:number) => '/users/' + id + '/posts'
    }
}

export {baseUrl, urls};