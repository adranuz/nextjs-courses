import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";

export const authConfig: NextAuthConfig = {
	//paginas donde manejara nuestro auth
	pages: {
		signIn: "/auth/login",
		newUser: "/auth/new-account",
	},
  session: { strategy: "jwt" },
	callbacks: {
		jwt: ({ token, user }) => {
			// agregamos la data del usuario en el token
			if (user) token.data = user;
			// console.log({token})

			return token;
		},
		session: ({ session, token, user }) => {
      // y agregamos la data del token en la sesion para verla en el front
      session.user = token.data as any;
			return session;
		},
	},
	providers: [
		Credentials({
			// este es el primer metodo al que accede next-auth
			// credentials es un objeto que contiene las credenciales
			async authorize(credentials) {
				// parsedCredentials nos ayuda a validar los datos, y retornarlos
				const parsedCredentials = z
					.object({ email: z.string().email(), password: z.string().min(6) })
					.safeParse(credentials);

				// verifica que tenga las credenciales
				if (!parsedCredentials.success) return null;

				const { email, password } = parsedCredentials.data;

				// buscar user por correo
				const user = await prisma.user.findUnique({
					where: { email: email.toLowerCase() },
				});
				if (!user) return null;

				// comparar password
				if (!bcrypt.compareSync(password, user.password)) return null;

				// si .success es false , retorna null
				const { password: _, ...userWithoutPassword } = user;

				console.log(userWithoutPassword);
				// mandar el usuario sin password
				return userWithoutPassword;
			},
		}),
	],
};

/**
 * Aquiero esportar esto para poder usarlo donde yo quiera
 * En este caso como tengo una pagina de login personalizado lo exporto
 * Para poderlo usar en el page login
 */
export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
