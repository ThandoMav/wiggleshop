# Build Nextjs ECommerce Website

- Tech: Nextjs 13, Next Auth 4
- UI: Tailwind, chart.js, react-chartjs
- DB: MongoDB, Mongoose
- Payment: PayPal, Stripe
- Content Hosting: cloudinary
- Deploy: Github, Vercel, MongoDB Atlas

## Resources

- Demo Website :  https://storethando.vercel.app
- Source Code   :  https://github.com/ThandoMav/storethando

## What I learnt creating this project

- NextJS basics like setting up project, navigating between pages and data fetching
- NextJS advanced topics like dynamic routing, image optimization,  SSG and SSR
- Tailwind CSS framework to build responsive website using custom theme, animation and carousel
- ReactJS including decomposing components, context API and hooks
- Next Auth package to authenticate customers and admin users
- MongoDB and Mongoose to save and retrieve data like products, orders and users
- PayPal developer api to make online payment
- Deploy web applications on servers like Vercel and Netlify

## Run Locally

1. Clone repo

   ```shell
    $ git clone git@github.com:ThandoMav/storethando.git
    $ cd storethando
   ```

2. Create .env File

   - duplicate .env.example and rename it to .env

3. Setup MongoDB

   - Local MongoDB
   - Install it from [here](https://www.mongodb.com/try/download/community)
   - In .env file update MONGODB_URI=mongodb://localhost/storethando
   - OR Atlas Cloud MongoDB
   - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
   - In .env file update MONGODB_URI=mongodb+srv://your-db-connection

4. Install and Run

   ```shell
     npm install
     npm run dev
   ```

5. Seed Data

   - Run this on browser: http://localhost:3000/api/seed
   - It returns admin email and password and 6 sample products

6. Admin Login

   - Run http://localhost:3000/login
   - Enter admin email and password and click Login
