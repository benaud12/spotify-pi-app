# Create image based on the official Node 6 image from dockerhub
FROM arm32v7/node:8

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/spotify-app/dist

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/spotify-app

# Copy dependency definitions
COPY package.json /usr/src/spotify-app

# Install dependecies
RUN npm install

# Expose the port the app runs in
EXPOSE 80

# Copy over application code
COPY dist /usr/src/spotify-app/dist

# Start express server
CMD ["node", "dist/server.js"]
