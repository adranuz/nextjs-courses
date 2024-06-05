# Development
Pasos para levantar la app en desarrollo

1. Levantar la base de datos ```docker compose up -d```
2. Renombrar el .env.example a .env
1. Genera tu token de auth en [AUTH_SECRET](https://generate-secret.vercel.app/32)
1. Reemplazar las variables de entorno
1. Ejecutar el comando ```npm install```
1. Ejecutar el comando ```npm run dev```
1. Ejecuta los comandos de prisma
    1. ```npx prisma migrate dev```
    2. ```npx prisma generate```
1. Ejecutar el Seed para [crear la base de datos local](localhost:3000/api/seed)


# Prisma commands
[prisma pagination](https://www.prisma.io/docs/orm/prisma-client/queries/pagination)
[nextjs route handler](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
npx prisma init
npx prisma migrate dev
npx prisma generate


## Nota: usuario por defecto
__email: test1@gmail.com__
__password: test1__


# Prod




# Stage



