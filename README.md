# Prisma-nest-Server

1. Install node modules using `npm install`
2. Run `npx prisma migrate dev` : This will create tables and run migration scripts based on your schema
3. Run `npx prisma generate` : This will generate a prisma client with updated schema
3. Run `npm start` to start the server

You can change `Schema.prisma` file for schema changes as per your need.
Add your routes to `script.js`
