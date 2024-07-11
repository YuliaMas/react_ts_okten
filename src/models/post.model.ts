 interface IPost {
    id: number,
    userId: number,
    title: string,
    body: string,
}

export type IPostsProps = {
    posts: IPost[];
 }
export default IPost;