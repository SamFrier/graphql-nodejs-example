# graphql-nodejs-example

Based on the following tutorial, with a few alterations: https://www.howtographql.com/graphql-js/0-introduction/

## Updating the database model

1. Make any changes needed to `prisma/schema.prisma`
2. Run the following commands:
   ```bash
   npm install
   npx prisma migrate save --name 'migration-name-goes-here' --experimental
   npx prisma migrate up --experimental
   npx prisma generate
   ```

## Viewing the database

```bash
npx prisma studio --experimental
```

## Running the application locally

```bash
npm start
```
