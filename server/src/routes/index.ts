import express from "express"
import userRouter from "./user"
import routineRouter from "./routine"
import activityRouter from "./activity"
import dayOfWeekRouter from "./dayOfWeek"

const router = express.Router()

router.use("/user", userRouter)
router.use("/routine", routineRouter)
router.use("/activity", activityRouter)
router.use("/dayofweek", dayOfWeekRouter)

export default router
