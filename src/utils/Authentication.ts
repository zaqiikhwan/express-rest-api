import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class Authentication {
    public static passwordHash = (password: string): Promise<string> => {
        return bcrypt.hash(password, process.env.SALT_ROUND || 10);
    }

    public static passwordCompare = async (text: string, encryptedText: string): Promise<boolean> => {
        let result = await bcrypt.compare(text, encryptedText);
        return result;
    }

    public static generateToken = (id: number, username: string, password: string): string => {
        const secretKey: string = process.env.JWT_SECRET_KEY || "secret";

        const token: string = jwt.sign({ id, username, password}, secretKey, { algorithm: "HS512", expiresIn: "1h"});
        return token;
    }
}

export default Authentication;