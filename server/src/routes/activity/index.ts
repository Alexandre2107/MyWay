import express from "express"
import {
  createActivity,
  deleteActivity,
  getActivities,
  getActivityById,
  updateActivity,
} from "../../controllers/activity"

const activityRouter = express.Router()

activityRouter.get("/", getActivities)
activityRouter.get("/:activity_id", getActivityById)
activityRouter.post("/", createActivity)
activityRouter.put("/:activity_id", updateActivity)
activityRouter.delete("/:activity_id", deleteActivity)

export default activityRouter
