import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

export const authConfig: NextAuthConfig = {
	//paginas donde manejara nuestro auth
	pages: {
		signIn: "/auth/login",
		newUser: "/auth/new-account",
	},
	// session: { strategy: "jwt" },
	callbacks: {
		// esta funcion obtiene el usuario actual
		// y verifica si la tiene permiso para acceder a la pagina a la que quiere ir
		authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/checkout');
      if (isOnDashboard) {
        if (isLoggedIn) return true;


        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
				return true
        // return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },

		jwt: ({ token, user }) => {
			// agregamos la data del usuario en el token
			if (user) token.data = user;
			return token;
		},

		session: ({ session, token, user }) => {
			// y agregamos la data del token en la sesion para verla en el front
			session.user = token.data as any;
			return session;
		},
	},
	providers: []
};

/**
 * Ahora quiero esportar esto para poder usarlo donde yo quiera
 * En este caso como tengo una pagina de login personalizado lo exporto
 * Para poderlo usar en el page login
 */
