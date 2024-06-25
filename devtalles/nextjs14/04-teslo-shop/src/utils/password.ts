import bcrypt from 'bcryptjs';
export const comparePasswords = (clientPassword: string, dbPassword:string) => {
  return bcrypt.compareSync(clientPassword, dbPassword)
}