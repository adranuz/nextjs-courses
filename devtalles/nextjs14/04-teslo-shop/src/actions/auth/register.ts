'use server'

import prisma from "@/lib/prisma"
import bcrypt from 'bcryptjs';

interface User {
  name: string
  email: string
  password: string
}
export const registeruser = async (
  formData: User
) => {
  try {
    const { name, email, password } = formData
    const newUserser = await prisma.user.create({
      data: {
        name: name.toLowerCase(),
        email: email.toLowerCase(),
        password: bcrypt.hashSync(password)
      },
      select: {
        id: true,
        name: true,
        email: true,
      }
    })
    return {
      ok: true,
      user: newUserser,
      message: 'User created successfully.'
    }
  } catch (error) {
    return {
      ok: false,
      user: null,
      message: 'User not created.'
    }
  }
}