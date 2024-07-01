export interface IPost {
    id: number,
    userId: number,
    title: string,
    body: string
}

export interface IPostResponse {
    posts: IPost[];
}