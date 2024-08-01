# Step 1: Base Image
FROM node:lts-slim

# Install Python and other necessary build tools
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ \
    gcc \
    curl \
    unzip \
    ca-certificates

# Set Python path
ENV PYTHON=/usr/bin/python3

# Install node-gyp globally
RUN npm install -g node-gyp

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to PATH
ENV PATH="/root/.bun/bin:${PATH}"

# Verify Bun installation
RUN bun --version

# # Step 3: Set Working Directory
WORKDIR /app

# # Step 4: Copy Application Files
COPY package.json .

# # Step 5: Install Dependencies
RUN bun install

# # Step 6: Expose Port
EXPOSE 3000

# # Step 7: Copy Application Files
COPY . .

COPY .next .next

# # Step 8: Build Application
# RUN bun run build

# Step 9: Start Application
# CMD ["bun", "dev"]
# CMD ["sleep", "infinity"]
CMD ["bun", "run", "start"]