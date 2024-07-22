import { User } from "./User"

export interface Routine {
  routine_id: number
  student: User
  supervisor: User
  creation_date: Date
  description: string
}

export interface CreateRoutineInput {
  student_id: number
  supervisor_id: number
  description: string
}

export interface UpdateRoutineInput {
  routine_id: number
  student_id?: number
  supervisor_id?: number
  description?: string
}
