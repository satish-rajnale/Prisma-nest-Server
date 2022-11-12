# Prisma-nest-Server

1. Install node modules using `npm install`
2. Run `npx prisma migrate dev` : This will create tables and run migration scripts based on your schema
3. Run `npx prisma generate` : This will generate a prisma client with updated schema
3. Run `npm run start:dev` to start the server
4. Run `npx prisma studio` to start a web server for db
You can change `Schema.prisma` file for schema changes as per your need.

### A typical top-level directory layout

    .
    ├── build                   # Compiled files (alternatively `dist`)
    ├── docs                    # Documentation files (alternatively `doc`)
    ├── src                     # Source files (alternatively `lib` or `app`)
        ├── module              # Module files as per different models and logic
            ├── dto             # DTO's files 
            ├── interfaces      # Interfaces files
            ├── (Files such as controllers, routes and service)
    ├── test                    # Automated tests (alternatively `spec` or `tests`)
    ├── tools                   # Tools and utilities
    ├── LICENSE
    └── README.md

## You can access server swagger api documentation atvhttp://localhost:5050/docs
