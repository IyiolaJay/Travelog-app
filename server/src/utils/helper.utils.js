import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const generateTokenFromPayload = (payload) => {
    const salt = process.env.JWT_SECRET
    const token = jwt.sign({ payload }, salt, { expiresIn: "1h" })
    return token;
}

export const generatePayloadFromToken = (token) => {
    const salt = process.env.JWT_SECRET
    const payload = jwt.verify(token, salt)
    return payload;
}

export const passwordToHash = (password) => {
    const saltRounds = 10
    const hashedPassword = bcrypt.hashSync(password, saltRounds)
    return hashedPassword
}

export const compareBcryptPassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword)
}



