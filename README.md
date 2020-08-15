# Join react test

The client side application based on [Next.js](https://nextjs.org/). The goal of this app is to cover [technical requirements](TechnicalNotes.md).

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install:

- `node=12.16.1` (recommend to use [nvm](https://github.com/nvm-sh/nvm) to manage version multiple active node.js versions)

### Installing

*If you use `nvm`, you should to execute the next command:

```bash
nvm use
```

To the first you need to clone project:

```bash
git clone git@github.com:hameltomor/join-react-test.git
```

Next you should to install npm dependencies of project:

```bash
npm install
# or
yarn dev
```

### Usage

You should create the `.env` file with necessary variables. You can take them from the `.env.example`.

#### Development environment

#### Locally

The development environment are based on [node.js](https://nodejs.org/). You can run `dev` environment using next npm command:

```bash
npm run dev
# or
yarn dev
```

#### Docker

```bash
# Build image
docker build --tag join-react-test:1.0 .

# Run image
docker run --detach --publish 3000:3000 --name join_react_test join-react-test:1.0
```

#### Production environment

```bash
# Build app
yarn build

# Run builded app
./node_modules/.bin/next start
```

### Preview version

Deployed to [vercel](https://join-react-test.vercel.app/).
