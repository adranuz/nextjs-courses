import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import prisma from './lib/prisma';
import { comparePasswords } from './utils/password';
 
export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
		Credentials({
			credentials: {
        email: {},
        password: {},
      },

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

				// buscar user por correo en DB
				const user = await prisma.user.findUnique({
					where: { email: email.toLowerCase() },
				});
				if (!user) return null;

				// comparar password
				if (!comparePasswords(password, user.password)) return null;

				// si .success es false , retorna null
				const { password: _, ...userWithoutPassword } = user;

				// console.log(userWithoutPassword);
				// mandar el usuario sin password
				return userWithoutPassword;
			},
		}),
	],
});