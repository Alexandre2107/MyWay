import express from "express"
import userRouter from "./user"
import routineRouter from "./routine"
import activityRouter from "./activity"
import dayOfWeekRouter from "./dayOfWeek"
import activityScheduleRouter from "./activitySchedule"

const router = express.Router()

router.use("/user", userRouter)
router.use("/routine", routineRouter)
router.use("/activity", activityRouter)
router.use("/activityschedule", activityScheduleRouter)
router.use("/dayofweek", dayOfWeekRouter)

export default router
