# Shikai Snacks Backend
This is the server that shikai-gSnacks-frontend references to populate user, snack, and review data.

## User Stories
- **User can view all snacks (already complete)**
- **User can view details of an individual snack**
- **User can signup a new account (registration)**
- **User can login with an existing account (authentication)**
- **User can post a review of a snack**
- **User can edit their own review of a snack**
- **User can delete their own review of a snack**

## Technologies Used
* Knex
* Express
* PostgreSQL



## Entity Relationship Diagram

![snacks ERD](./snacks_erd.jpg)

**NOTE:** The migrations and seeds for the `snacks` table are included. You will need to implement the `users` and `reviews` tables yourself following this relationship diagram.

## Routes

| Request Method | Request URL | Request Body | Response Status | Response Body                                                  |
|----------------|-------------|--------------|-----------------|----------------------------------------------------------------|
| `POST`         | `/api/users`           | `{ "first_name": "Linus", "last_name": "Torvalds", "email": "linus.torvalds@hotmail.com", "password": "ilovelinux" }` | `200`           | `{ id: 2, "first_name": "Linus", "last_name": "Torvalds", ... } |


## Setup

Start by forking and cloning this repo.
Then install all dependencies

```shell
cd shikai-gSnacks-backend
npm install
```

Create the databases:

```shell
createdb snacks
createdb users
createdb reviews
```

and run migrations and seeds:

```shell
npm run knex migrate:latest
npm run knex seed:run
```

Start the server:

```shell
npm run dev
```
