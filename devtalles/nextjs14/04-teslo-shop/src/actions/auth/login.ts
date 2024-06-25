'use server'


// signIn lo exportamos de el archivo de configuracion de next-auth
// ya usa todo auth js para funcionar
// y lo primero que hace es pasar por el metodo authorize
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
    window.location.replace('/');
    return 'Success';
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
export const login = async (email:string, password:string) => {
  try {
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    })
    return {ok:true, message: 'User logged in successfully.'}
  } catch (error) {
    return {ok:false, message: 'User not logged in.'}
  }

}