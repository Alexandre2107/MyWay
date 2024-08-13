export type ActivitySchedule = {
  activity_schedule_id: number
  activity_id: number
  has_time: boolean
  start_time: Date | null
  end_time: Date | null
}

export interface CreateActivityScheduleInput {
  activity_id: number
  has_time: boolean
  start_time?: Date
  end_time?: Date
}

export interface UpdateActivityScheduleInput {
  activity_id?: number
  has_time?: boolean
  start_time?: Date
  end_time?: Date
}
