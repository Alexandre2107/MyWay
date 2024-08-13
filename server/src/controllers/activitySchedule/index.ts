import { Request, Response } from "express"
import { prisma } from "../../database"
import {
  ActivitySchedule,
  CreateActivityScheduleInput,
  UpdateActivityScheduleInput,
} from "../../interfaces/ActivitySchedule"

// Get all Activities Schedules
export const getActivitiesSchedules = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const activitiesSchedule: ActivitySchedule[] =
      await prisma.activitySchedule.findMany({})
    res.send(200).json(activitiesSchedule)
  } catch (error) {
    res.send(500).json({ error: error })
  }
}

// Get Activity Schedule by ID
export const getActivityScheduleById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { activity_schedule_id } = req.params
    const activitySchedule: ActivitySchedule | null =
      await prisma.activitySchedule.findUnique({
        where: { activity_schedule_id: Number(activity_schedule_id) },
      })
    res.status(200).json(activitySchedule)
  } catch (error) {
    res.status(500).json()
  }
}

// Create new activity schedule
export const createActivitySchedule = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: CreateActivityScheduleInput = req.body
    const activitySchedule = prisma.activitySchedule.create({
      data: data,
    })
    res.status(200).json(activitySchedule)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

// Update activity schedule
export const updateActivitySchedule = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { activity_schedule_id } = req.params
  const data: UpdateActivityScheduleInput = req.body
  try {
    const activities: ActivitySchedule = await prisma.activitySchedule.update({
      where: { activity_schedule_id: Number(activity_schedule_id) },
      data: data,
    })
    res.status(200).json(activities)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

// Delete activity schedule
export const deleteActivitySchedule = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { activity_schedule_id } = req.params
  try {
    await prisma.activitySchedule.delete({
      where: { activity_schedule_id: Number(activity_schedule_id) },
    })
    res.status(200).json()
  } catch (error) {
    res.status(500).json({ error: error })
  }
}
