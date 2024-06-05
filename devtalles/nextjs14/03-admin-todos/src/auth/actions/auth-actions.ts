import prisma from "@/lib/prisma";
import bcrypt from 'bcryptjs';

export const signInEmailPassword = async (email: string, password: string) => {
  // Validate email and password
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  // Find user by email
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  // create user en db
  if (!user) {
    const dbUser = await createUser(email, password);
    return dbUser;
  }

  // Validate password if user exists
  if(!bcrypt.compareSync(password, user.password ?? '')){
    throw new Error("Password is incorrect");
  }
  return user;
};


const createUser = async (email: string, password: string) => {
  const user = await prisma.user.create({
    data:{
      email,
      password: bcrypt.hashSync(password),
      name: email.split('@')[0],
    }
  })
  return user
}