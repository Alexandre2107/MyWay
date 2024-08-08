import express from "express"
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../../controllers/user"

const userRouter = express.Router()

userRouter.get("/", getUsers)
userRouter.get("/:user_id", getUserById)
userRouter.post("/", createUser)
userRouter.put("/:user_id", updateUser)
userRouter.delete("/:user_id", deleteUser)

export default userRouter
