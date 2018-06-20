# To Duel (Backend)

This is the backend of the project.
The front ends can be found at: https://github.com/bryankai/to-duel-frontend

To Duel is a full-stack to-do web application.  The app allows users to engage in multiple concurrent head-to-head challenges with other users to encourage better daily habits.


## Entity Relationship Diagram

![duel ERD](./erd/duel-erd-clean.JPG)


# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites

What things you need to install the software and how to install them

```shell
* fork and clone this repository
* run npm install
```


### Installing

A step by step series of examples that tell you how to get a development env running to utilize the postgress db

Create the development database:

```shell
* createdb to_duel_dev
```

and run migrations and seeds:

```shell
* npm run knex migrate:latest
* npm run knex seed:run
```

Finally, start the server:

```shell
* npm start
```

Check that you can GET the `/users/16/dailies` endpoint.  If you receive a 200 from the server you are up and running.


## Deployment

This project has been deployed on Heroku at the address:



## Built With

* [JavaScript](https://www.javascript.com/) - The language
* [Materialize](https://materializecss.com/) - The css framework used
* [React](https://reactjs.org/) - Frontend library
* [Redux](https://redux.js.org/) - State container
* [postgreSQL](https://www.postgresql.org/) - database
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [Node](https://nodejs.org/en/) - Package ecosystem


## Contributing

Please send either of the developers a message for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Bryan Kai** - *Initial work* - [bryankai](https://github.com/bryankai)
* **Dustin Ruskell** - *Initial work* - [Ventronik](https://github.com/Ventronik)
