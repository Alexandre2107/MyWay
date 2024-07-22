import { Profile } from "./Profile"

export interface User {
  user_id: number
  name: string
  email: string
  password: string
  profile: Profile
}

export interface CreateUserInput {
  name: string
  email: string
  password: string
  profile_id: number
}

export interface UpdateUserInput {
  user_id: number
  name?: string
  email?: string
  password?: string
  profile_id?: number
}
