 export interface IUser {
    id:number;
    name: string,
    username: string,
    phone: number;
    email: string;
}

export type IUsersProps = {
    users : IUser[],
}
