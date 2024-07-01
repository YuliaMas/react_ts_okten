export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    gender: string
}

export interface IUserResponse {
    users: IUser[];
}