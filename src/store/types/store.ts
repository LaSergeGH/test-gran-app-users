export interface IUser {
  id?: string;
  login: string;
  email: string;
  country: string;
  age: number;
}

interface IStore {
  users: IUser[];
}

export default IStore;
