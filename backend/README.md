# Notes App Backend for ensolvers test

## Tools/packages used

1. @prisma/client (v5.8.1): Package to interact with the database using the declarative model defined in Prisma Schema. It provides an easy-to-use and typed interface for performing read and write operations on the database.

2. bcryptjs (v2.4.3): Package to perform password hashing and comparison functions using the bcrypt hashing algorithm.

3. cors (v2.8.5): Package to manage the browser's same-origin policy. It allows or blocks requests between different domains, helping to prevent security issues when making AJAX requests from a different domain than the application.

4. dotenv (v16.3.2): Tool to load the sensitive configurations stored at the .env file, such as Postgres database URL, port number and file path used for development environment.

5. env-var (v7.4.1): Library to simplify the access and validation of environment variables in Node.js applications. It provides methods to retrieve environment variable values and perform validations, making it easier to manage application configuration.

6. express (v4.18.2): Web application framework for Node.js. to simplify the creation of HTTP servers, request routing, middleware handling, and other common tasks in web development.

## Tech Stack

💻 Built with

Technologies used in the project:

* PostgreSQL
* Neon
* Node (v16.13.0)
* Typescript (v5.3.3)

### Links

Database access: <postgresql://pertuzdaniel4:J9DC5NBaSMcP@ep-soft-leaf-a56ez5td.us-east-2.aws.neon.tech/notes-db>
Backend hosting: <https://notes-app-api-0yg6.onrender.com/api>

### Credentials

* email = <admin@email.com>
* password = admin123


🛠️ Installation Steps for BE:

1. Install packages

```bash
npm i
```

2. Run in development environment

```bash
npm run dev
```

3. Build and deploy dist folder

```
npm start
```
