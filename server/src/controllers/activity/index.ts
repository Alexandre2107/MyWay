import { Request, Response } from "express"
import { prisma } from "../../database"
import {
  Activity,
  CreateActivityInput,
  UpdateActivityInput,
} from "../../interfaces/Activity"

export const getActivity = async (
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
