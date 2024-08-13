import express from "express"
import { createActivity, deleteActivity, getActivity, updateActivity } from "../../controllers/activity"

const activityRouter = express.Router()

activityRouter.get("/", getActivity)
activityRouter.post("/", createActivity)
activityRouter.put("/:activity_id", updateActivity)
activityRouter.delete("/:activity_id", deleteActivity)

export default activityRouter