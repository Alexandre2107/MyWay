import express from "express"
import {
  getUsers,
  getUserById,
  getUserByEmailOrDocument,
  createUser,
  updateUser,
  deleteUser,
} from "../../controllers/user"

const userRouter = express.Router()

userRouter.get("/", getUsers)
userRouter.get("/:identifier", getUserByEmailOrDocument)
userRouter.get("/id/:user_id", getUserById)
userRouter.post("/", createUser)
userRouter.put("/:user_id", updateUser)
userRouter.delete("/:user_id", deleteUser)

export default userRouter
