export interface IUser {
    id: number,
    name: string,
    email: string,
    username: string,
    phone?: number,
    website?: string,
    address?: {
        street: string,
        suite: string,
        city: string,
        zipcode: number,
        geo: {
            lat: number,
            lng: number
        }
    },
    company?: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}
