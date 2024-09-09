import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { invalidTokens } from "../models/invalidTokenModel"

const verifyToken = (token: string) => {
  const secret = process.env.JWT_SECRET || "secret"
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        reject(err)
      } else {
        resolve(decoded)
      }
    })
  })
}

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token não fornecido." })
  }

  const token = authHeader.split(" ")[1]

  if (invalidTokens.includes(token)) {
    return res.status(401).json({ message: "Token inválido." })
  }

  try {
    const decoded = await verifyToken(token)
    ;(req as any).user = decoded // Adiciona o usuário decodificado à requisição
    next()
  } catch (error) {
    res.status(401).json({ message: "Token inválido." })
  }
}
