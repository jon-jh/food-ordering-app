## Instructions:
1. Uses a Postgresql server - remember to 'startpostgres'.
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. `http://localhost:8080/`

## Dependencies

- Node.js: Version 10.x or above
- npm: Version 5.x or above
- PostgreSQL: Version 15 (database server)
- pg (Node.js PostgreSQL client): Version 6.x
