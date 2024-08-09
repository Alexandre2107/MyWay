import express from "express"
import userRouter from "./user"
import routineRouter from "./routine"

const router = express.Router()

router.use("/user", userRouter)
router.use("/routine", routineRouter)

export default router
