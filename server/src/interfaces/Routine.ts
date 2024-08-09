import { User } from "./User"

export interface Routine {
  routine_id: number
  user: User
  guardian: User
  creation_date: Date
  description: string | null
}

export interface CreateRoutineInput {
  user_id: number
  guardian_id: number
  description: string
}

export interface UpdateRoutineInput {
  routine_id: number
  user_id?: number
  guardian_id?: number
  description?: string
}
