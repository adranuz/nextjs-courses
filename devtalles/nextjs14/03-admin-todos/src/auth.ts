import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import GitHub from "next-auth/providers/github"
import google from "next-auth/providers/google"
import prisma from "./lib/prisma"
import authConfig from "./auth.config"


export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  session:{
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
    google
  ],
  callbacks: {
    // funcion para manejar y filtrar la creacion del usuario
    // a partir de donde fue ingresado.
    async signIn({user, account, profile, email, credentials}) {
      // return false // false para negar authentificacion
      return true // true para permitir authentificacion
    },

    // esta funcion se ejecuta antes de que se cree el token
    // esta informacion la veras en el jwt, pero no en la session
    async jwt({token, user, account, profile}) {
      const dbUser = await prisma.user.findUnique({
        where: {
          email: token.email ?? 'no-email'
        }
      })
      token.roles = dbUser?.roles ?? ["no-roles"]
      token.id = dbUser?.id ?? "no-id"
      // console.log("---> ",token)
      return token // siempre debe retornar el token
    },

    // esta funcion es la ultima, encaminada a manejar la data de la sesion
    // aqui puedes agregar mas informacion a la sesion
    async session({session, token, user}) {
      if(session && session.user) {
        session.user.roles = token.roles
        session.user.id = token.id
      }
      // session.id = token.id
      return session // debe regresar la sesion modificada
    }
  }
})