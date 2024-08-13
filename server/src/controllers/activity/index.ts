import { Request, Response } from "express"
import { prisma } from "../../database"
import {
  Activity,
  CreateActivityInput,
  UpdateActivityInput,
} from "../../interfaces/Activity"

// Get all activities
export const getActivities = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const activities: Activity[] = await prisma.activity.findMany({})
    res.status(200).json(activities)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

// Get activity by ID
export const getActivityById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { activity_id } = req.params
    const activity: Activity | null = await prisma.activity.findUnique({
      where: { activity_id: Number(activity_id) },
    })
    res.status(200).json(activity)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

// Create new activity
export const createActivity = async (
  req: Request,
  res: Response
): Promise<void> => {
  const data: CreateActivityInput = req.body
  try {
    const activities: Activity = await prisma.activity.create({
      data: data,
    })
    res.status(200).json(activities)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

// Update activity
export const updateActivity = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { activity_id } = req.params
  const data: UpdateActivityInput = req.body
  try {
    const activities: Activity = await prisma.activity.update({
      where: { activity_id: Number(activity_id) },
      data: data,
    })
    res.status(200).json(activities)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

// Delete activity
export const deleteActivity = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { activity_id } = req.params
  try {
    await prisma.activity.delete({
      where: { activity_id: Number(activity_id) },
    })
    res.status(200).json()
  } catch (error) {
    res.status(500).json({ error: error })
  }
}
