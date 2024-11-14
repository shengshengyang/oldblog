# Step 1: Use an official Node.js runtime as a base image
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Expose the port that React's development server will run on (default 3000)
EXPOSE 3000

# Step 7: Start the application (npm start runs the app on port 3000)
CMD ["npm", "start"]
