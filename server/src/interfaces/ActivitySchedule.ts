import { Activity } from "./Activity"

export interface ActivitySchedule {
  activity_schedule_id: number
  activity: Activity
  has_time: boolean
  start_time?: Date
  end_time?: Date
  day_of_week: "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" 
}

export interface CreateActivityScheduleInput {
  activity_id: number
  has_time: boolean
  start_time?: Date
  end_time?: Date
  day_of_week: "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat"
}

export interface UpdateActivityScheduleInput {
  activity_schedule_id: number
  activity_id?: number
  has_time?: boolean
  start_time?: Date
  end_time?: Date
  day_of_week?: "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat"
}
