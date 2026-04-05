# `gitHub_Actions`

This project is a small Node.js + Express app written using ES modules.
It exposes simple routes and can run locally or inside Docker.

## Project Structure

```text
gitHub_Actions/
├── Dockerfile
├── index.js
├── package.json
├── controllers/
│   ├── aknandan.js
│   └── locations.js
└── routes/
		└── route.js
```

## Prerequisites

- `Node.js` installed on your machine
- `npm` installed with Node.js
- `Docker Desktop` installed if you want to use Docker

## How to Create the Project

If you want to create the same project from scratch, follow these steps.

### 1. Create the folder

```zsh
mkdir gitHub_Actions
cd gitHub_Actions
```

### 2. Initialize Node.js

```zsh
npm init -y
```

### 3. Install dependencies

```zsh
npm install express
npm install -D nodemon
```

### 4. Set ES module support

Add this to `package.json`:

```json
"type": "module"
```

### 5. Create the files

Create these files and folders:

```text
index.js
Dockerfile
readME.md
controllers/aknandan.js
controllers/locations.js
routes/route.js
```

## How the App Works

### `index.js`

- Creates the Express app
- Sets the port from `process.env.PORT` or uses `8000`
- Loads all routes
- Starts the server

### `routes/route.js`

- Connects route files to the app
- Mounts:
	- `/api/aknandan`
	- `/api/locations`

### `controllers/aknandan.js`

- Handles the route `GET /api/aknandan/getAknandan`

### `controllers/locations.js`

- Handles the route `GET /api/locations/getLocations`

## How to Run Locally

### 1. Install packages

```zsh
npm install
```

### 2. Start the app in development mode

```zsh
npm run dev
```

### 3. Start the app in production mode

```zsh
npm start
```

The server runs on port `8000` by default.

## API Endpoints

### 1. Aknandan route

```http
GET /api/aknandan/getAknandan
```

Example response:

```json
{
	"message": "this is get request"
}
```

### 2. Locations route

```http
GET /api/locations/getLocations
```

Example response:

```json
{
	"message": "this is get request for locations"
}
```

## Dockerfile Explanation

Current `Dockerfile`:

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node", "index.js"]
```

### Line by line

- `FROM node:22-alpine` — uses a small Node.js image
- `WORKDIR /app` — sets the working directory inside the container
- `COPY package*.json ./` — copies dependency files first for better caching
- `RUN npm install` — installs app dependencies inside the image
- `COPY . .` — copies the rest of the project files
- `EXPOSE 8000` — documents the app port
- `CMD ["node", "index.js"]` — starts the application

## How to Create the Dockerfile

If you need to create it manually, make a file named `Dockerfile` and paste this content:

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node", "index.js"]
```

## How to Build the Docker Image

Run this command inside the `gitHub_Actions` folder:

```zsh
docker build -t github-actions-app .
```

### What this does

- `docker build` creates the image
- `-t github-actions-app` gives the image a name
- `.` tells Docker to use the current folder as the build context

## How to Start the Docker Container

After the image is built, start a container with:

```zsh
docker run --rm -p 8000:8000 github-actions-app
```

### What this does

- `docker run` starts the container
- `--rm` removes the container after it stops
- `-p 8000:8000` maps container port `8000` to your machine
- `github-actions-app` is the image name

## How to Run on a Different Port

You can override the port with an environment variable:

```zsh
docker run --rm -p 3000:3000 -e PORT=3000 github-actions-app
```

If you do that, your app will run on port `3000` inside the container too.

## How to Test the App

After starting the app, open these URLs in your browser or Postman:

- `http://localhost:8000/api/aknandan/getAknandan`
- `http://localhost:8000/api/locations/getLocations`

## Useful Commands

### Check Node version

```zsh
node -v
```

### Check npm version

```zsh
npm -v
```

### List installed packages

```zsh
npm list --depth=0
```

### Stop a running Docker container

First find the container:

```zsh
docker ps
```

Then stop it:

```zsh
docker stop <container_id>
```

## Common Problems

### Docker daemon is not running

If you see an error like `cannot connect to the Docker daemon`, start Docker Desktop first.

### Port is already in use

If port `8000` is busy, run the app on another port:

```zsh
PORT=3000 npm start
```

or with Docker:

```zsh
docker run --rm -p 3000:3000 -e PORT=3000 github-actions-app
```

### Node version mismatch

This project uses modern JavaScript features and works best with a recent Node.js version.
Use Node `18+` or newer for fewer compatibility issues.

## Suggested Improvement

You can also add a `.dockerignore` file to avoid copying unnecessary files like `node_modules`.

Example:

```text
node_modules
npm-debug.log
.git
```

