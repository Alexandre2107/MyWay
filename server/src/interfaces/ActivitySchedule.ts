import { Activity } from "./Activity"

export interface ActivitySchedule {
  activity_schedule_id: number
  activity: Activity
  start_time: Date
  end_time: Date
  day_of_week: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"
}

export interface CreateActivityScheduleInput {
  activity_id: number
  start_time: Date
  end_time: Date
  day_of_week: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"
}

export interface UpdateActivityScheduleInput {
  activity_schedule_id: number
  activity_id?: number
  start_time?: Date
  end_time?: Date
  day_of_week?: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"
}
