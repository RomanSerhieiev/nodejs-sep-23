import { ERole } from "../enums/role.enum";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  age: number;
  role: ERole;
  isDeleted: boolean;
  isVerified: boolean;
}
