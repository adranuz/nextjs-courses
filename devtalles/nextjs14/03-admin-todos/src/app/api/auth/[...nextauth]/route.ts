import NextAuth, { NextAuthConfig } from "next-auth"
import github from "next-auth/providers/github"
import google from "next-auth/providers/google"



export const authOptions:NextAuthConfig = {
  // Configure one or more authentication providers
  providers: [
    github({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    // google({
    //   clientId: process.env.GOOGLE_ID ?? '',
    //   clientSecret: process.env.GOOGLE_SECRET ?? '',
    // })
    // ...add more providers here
  ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }