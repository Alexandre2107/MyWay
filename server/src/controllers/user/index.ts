import { Request, Response } from "express"
import { prisma } from "../../database"
import { User } from "../../interfaces/User"

// Get all users
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: User[] = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

// Get user by ID
export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params
  try {
    const user = await prisma.user.findUnique({
      where: { user_id: Number(id) },
    })
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ message: "User not found" })
    }
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

// Create new user
export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    full_name,
    document,
    email,
    password,
    type_of_user,
    has_full_permission,
  } = req.body
  try {
    const newUser = await prisma.user.create({
      data: {
        full_name,
        document,
        email,
        password,
        type_of_user,
        has_full_permission,
      },
    })
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

// Update user
export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params
  const {
    full_name,
    document,
    email,
    password,
    type_of_user,
    has_full_permission,
  } = req.body
  try {
    const updatedUser = await prisma.user.update({
      where: { user_id: Number(id) },
      data: {
        full_name,
        document,
        email,
        password,
        type_of_user,
        has_full_permission,
      },
    })
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

// Delete user
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params
  try {
    await prisma.user.delete({
      where: { user_id: Number(id) },
    })
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error })
  }
}
