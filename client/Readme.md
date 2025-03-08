# CryptoStream

CryptoStream is a decentralized video streaming platform that leverages the Hive blockchain, IPFS (InterPlanetary File System), and WebTorrent to enable users to upload, stream, and share videos in a decentralized manner. By integrating Hive for content metadata and IPFS/WebTorrent for file storage and distribution, CryptoStream offers a censorship-resistant and scalable solution for video content creators and viewers.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Overview

CryptoStream aims to empower content creators by providing a decentralized platform where videos are stored on IPFS, shared via WebTorrent, and indexed on the Hive blockchain. The platform includes a React-based frontend for user interaction, a Node.js backend for handling uploads and API requests, and integration with Hive Keychain for user authentication and upvoting. Key features include video uploads with thumbnail support, a trending videos section, a creators showcase, and premium subscription options.

## Features

- **Decentralized Video Uploads**: Upload videos to IPFS and publish metadata to Hive.
- **Peer-to-Peer Streaming**: Stream videos efficiently using WebTorrent for peer-to-peer file sharing.
- **Creator Studio**: A dedicated interface for creators to upload videos, manage content, and share to Ecency.
- **Trending Videos**: Display videos sorted by Hive votes to highlight trending content.
- **Creators Section**: Showcase creators with profile images, follower counts, and follow buttons.
- **Upvote System**: Allow users to upvote videos using Hive Keychain integration.
- **Premium Features**: Enable premium subscriptions for enhanced features, such as exclusive content.
- **Thumbnail Support**: Upload custom thumbnails for videos, with a fallback placeholder for missing images.
- **Reward System**: Earn Ecency Points for activities like uploading and commenting (server-side).

## Prerequisites

Before setting up CryptoStream, ensure you have the following:

- **Node.js and npm**: Version 18 or later.
  - Download from [nodejs.org](https://nodejs.org/) and verify:
 
node -v
npm -v
- **Git**: For version control and cloning the repository.
- Download from [git-scm.com](https://git-scm.com/) or use your package manager.
- **Hive Account**: A Hive account with posting and active keys.
- Posting key for uploading content.
- Active key for transferring rewards (optional for premium features).
- **Hive Keychain**: Browser extension for Hive authentication and upvoting.
- **Windows, Linux, or WSL**: Tested on Windows and WSL/Linux environments.
- **Browser**: A modern browser (e.g., Chrome, Firefox) for frontend interaction.

## Installation

Follow these steps to set up CryptoStream locally:

1. **Clone the Repository**: https://github.com/alphah-dev/crypto-stream
 cd CryptoStream
 
2. **Install Dependencies**:
- For the client: cd client
npm install
- For the server (if in the same repository):
cd server
npm install
- Note: If the client and server are in separate directories (e.g., `D:\crypto-stream\crypto-stream` for client and `D:\crypto-stream\server` for server), adjust the paths accordingly
- cd D:\crypto-stream\crypto-stream
npm install
cd D:\crypto-stream\server
npm install


3. **Set Up Environment Variables**:
- Create a `.env` file in the server directory (e.g., `server/.env` or root if combined):
- HIVE_POSTING_KEY=your_hive_posting_key_here
HIVE_ACTIVE_KEY=your_hive_active_key_here
PORT=5000
- Replace `your_hive_posting_key_here` and `your_hive_active_key_here` with your Hive keys.
- Ensure `.env` is added to `.gitignore` to keep your keys secure.

4. **Start the Application**:
- Start the backend server: node server.js

The server will run on `http://localhost:5000` (or the port specified in `.env`).
- Start the frontend development server in a separate terminal:
- cd client
npm start

The frontend will run on `http://localhost:5173`.

5. **Access the Application**:
- Open `http://localhost:5173` in your browser.
- Ensure the Hive Keychain extension is installed for authentication and upvoting.

## Usage

### For Users
- **Browse Videos**: Visit the homepage (`/`) to see trending videos and creators.
- **Watch a Video**: Click "Watch Video" on a video card to view its details (video playback implementation pending).
- **Upvote Videos**: Log in with Hive Keychain and click "Upvote" on a video to support the creator.
- **Follow Creators**: Click "Follow" next to a creator’s profile to stay updated with their content.

### For Creators
- **Upload a Video**:
1. Navigate to the Creator Studio (`/studio`).
2. Log in with your Hive account via Hive Keychain.
3. Select a video file and an optional thumbnail.
4. Choose a category (e.g., General, Music, Gaming).
5. Click "Upload" to publish the video to IPFS and Hive.
- **Share to Ecency**: After uploading, click "Share to Ecency" to post the video link on the Ecency platform.
- **Subscribe to Premium**: Click "Subscribe to Premium Features (10 HBD)" to unlock premium features (requires Hive Keychain).

## Project Structure

CryptoStream’s codebase is organized as follows (adjust based on your actual structure):

- `client/` (or root directory `D:\crypto-stream\crypto-stream`):
- `Home.jsx`: React component for the homepage, displaying trending videos and creators.
- `CreatorStudio.jsx`: React component for the creator studio, handling video uploads and sharing.
- `package.json`: Client-side dependencies and scripts.
- `server/` (or `D:\crypto-stream\server`):
- `server.js`: Node.js backend handling video uploads, API endpoints, and Hive integration.

- `package.json`: Server-side dependencies.
- `.gitignore`: Excludes sensitive files (e.g., `.env`, `node_modules`) and parent directories.
- `README.md`: Project documentation (this file).
- `LICENSE` (optional): License information.

### Notes
- If your server code is in `D:\crypto-stream\server`, you may want to move it into `D:\crypto-stream\crypto-stream\server` for a unified repository:

- MIT License

Copyright (c) 2025 Harsh Katiyar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
