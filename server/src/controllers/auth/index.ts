import { Request, Response } from "express"
import { prisma } from "../../database"
import { User } from "../../interfaces/User"
import { invalidTokens } from "../../models/invalidTokenModel"
import { generateToken } from "../../utils/jwtUtils"
import bcrypt from "bcrypt"

// Login with email or document
export const login = async (req: Request, res: Response): Promise<void> => {
  const { emailOrDocument, password } = req.body
  try {
    let whereClause: any = {}
    if (emailOrDocument.includes("@")) {
      whereClause.email = emailOrDocument
    } else {
      whereClause.document = emailOrDocument
    }
    const user: User | null = await prisma.user.findUnique({
      where: whereClause,
    })
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        res.status(401).json({ message: "Invalid password" })
      }
      const token = generateToken(user.document)
      res.status(200).json({ user: user, token: token })
    } else {
      res.status(404).json({ message: "User not found" })
    }
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const logout = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token não fornecido." })
  }
  const token = authHeader.split(" ")[1]
  invalidTokens.push(token)
  res.status(200).json({ message: "Logout realizado com sucesso." })
}
