'use server'
import { signOut } from "@/auth"
// import { signOut as signOutUseSession } from "next-auth/react";

export const logout = async () => {
  'use server'
  try {
    await signOut();
  } catch (error) {
    return 'Credentials SignOut'
  }
  // await signOutUseSession()
}