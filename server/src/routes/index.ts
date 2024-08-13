import express from "express"
import userRouter from "./user"
import routineRouter from "./routine"
import activityRouter from "./activity"

const router = express.Router()

router.use("/user", userRouter)
router.use("/routine", routineRouter)
router.use("/activity", activityRouter)

export default router
