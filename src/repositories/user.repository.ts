import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";

class UserRepository {
  public async getAll(): Promise<IUser[]> {
    return await User.find();
  }

  public async create(dto: Partial<IUser>): Promise<IUser> {
    return await User.create(dto);
  }

  public async getById(userId: string): Promise<IUser> {
    return await User.findById(userId);
  }

  public async getByParams(params: Partial<IUser>): Promise<IUser> {
    return await User.findOne(params);
  }

  public async updateById(userId: string, dto: Partial<IUser>): Promise<IUser> {
    return await User.findByIdAndUpdate(userId, dto);
  }

  public async deleteById(userId: string): Promise<void> {
    return await User.findByIdAndDelete(userId);
  }
}

export const userRepository = new UserRepository();
