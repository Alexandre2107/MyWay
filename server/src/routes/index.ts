import express from "express"
import { authenticate } from "../middleware/auth"
import userRouter from "./user"
import routineRouter from "./routine"
import activityRouter from "./activity"
import dayOfWeekRouter from "./dayOfWeek"
import activityScheduleRouter from "./activitySchedule"
import { login, logout } from "../controllers/auth"

const router = express.Router()

router.post("/login", login)
router.post("/logout", authenticate, logout)
router.use("/user", authenticate, userRouter)
router.use("/routine", authenticate, routineRouter)
router.use("/activity", authenticate, activityRouter)
router.use("/activityschedule", authenticate, activityScheduleRouter)
router.use("/dayofweek", authenticate, dayOfWeekRouter)

export default router
