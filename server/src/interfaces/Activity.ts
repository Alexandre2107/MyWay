import { ActivitySchedule } from "./ActivitySchedule"
import { Routine } from "./Routine"

export interface Activity {
  activity_id: number
  routine: Routine
  title: string
  description?: string
  activity_type: "scheduled" | "task"
  schedules: ActivitySchedule[]
}

export interface CreateActivityInput {
  routine_id: number
  title: string
  description?: string
  activity_type: "scheduled" | "task"
}

export interface UpdateActivityInput {
  activity_id: number
  routine_id?: number
  title?: string
  description?: string
  activity_type?: "scheduled" | "task"
}
