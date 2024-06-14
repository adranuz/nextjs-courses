'use server'


// signIn lo exportamos de el archivo de configuracion de next-auth
// ya usa todo auth js para funcionar
// y lo primero que hace es pasar por el metodo authorize
import { signIn } from '@/auth.config';
import { AuthError } from 'next-auth';



export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    // al llamar a signIn, le mandamos como primer key el provider a usar

    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    });
    return 'Success'
  } catch (error) {
    // console.log(error);
    // if((error as any).type === 'CredentialsSignin') {

    // }
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    return "Something went wrong."
  }
}