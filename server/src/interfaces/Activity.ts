import { Routine } from "./Routine"

export interface Activity {
  activity_id: number
  routine: Routine
  type: string
  description?: string
}

export interface CreateActivityInput {
  routine_id: number
  type: string
  description?: string
}

export interface UpdateActivityInput {
  activity_id: number
  routine_id?: number
  type?: string
  description?: string
}
