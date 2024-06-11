## About
Project based in the [Tesla Shop Apparel](https://shop.tesla.com/category/apparel) page, with the purpose of learning and practicing the use of HTML, CSS and JavaScript, and over all React.js and Next.js.

## Technologies
- HTML
- CSS
- JavaScript
- React.js
- Next.js
- CLSX - css
- React Icons
- Server Side Rendering (SSR)
- Static Site Generation (SSG)
- Client Side Rendering (CSR)
- Tailwind CSS
- [Swiper](https://swiperjs.com/)
- Zustand
- [Prisma](https://www.prisma.io/)

## How to poblate the data
1. Create a `.env.local` file in the root of the project
1. Run docker image ``
1. Add the following variables:
    ```bash
    NEXT_PUBLIC_API_URL=https://fakestoreapi.com
    NEXT_PUBLIC_API_PRODUCTS_ENDPOINT=/products
    ```
1. Run the following command to populate the data:
    ```bash
    npm run populate
    ```


## How to run in dev
1. Clone this repository
1. Copy the `.env.example` file to `.env`
1. Add the following variables:
    ```bash
    DB_USER=postgres
    DB_NAME=teslo-shop
    DB_PASSWORD=123456
    ```
1. Run the docker `docker compose up -d`
1. Connect to the database
1. Run `npm install` to install the dependencies
1. Do the migrations `npx prisma migrate dev`, and `npx prisma generate`
1. Run the seed `npx prisma db seed --preview-feature`
1. Run `npm run dev` to start the development server
1. Access `http://localhost:3000` in your browser
1. Enjoy!
