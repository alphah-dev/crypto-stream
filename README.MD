# CryptoStream

*Decentralized Video Streaming Platform Powered by Web3*

## Overview
CryptoStream is a decentralized video streaming platform that leverages **IPFS** for storage, **Hive blockchain** for posting and rewards, and **Web3 technologies** for a censorship-resistant and creator-friendly ecosystem.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Decentralized Video Hosting** – IPFS ensures secure, distributed storage.
- **Hive Blockchain Integration** – Earn rewards in HIVE tokens for your content.
- **Creator Studio** – Easily upload and manage videos.
- **Upcoming Features:**
  - NFT Market for video monetization.
  - Live streaming capabilities.
  - Enhanced creator rewards system.

## Tech Stack
### Backend
- Node.js
- Express.js
- Helia (IPFS implementation)
- @hiveio/dhive (Hive API)
- Pinata (IPFS pinning service)

### Frontend
- React
- Vite
- Tailwind CSS (if used)

### Deployment
- **Render** (Hosting Platform)
- **IPFS** (Decentralized Storage)
- **Hive Blockchain** (Posting & Rewards)

## Installation

### Prerequisites
- Node.js (v20.x or later)
- npm (Node Package Manager)
- Git (for cloning the repository)

### Clone the Repository
```bash
# Clone backend
git clone https://github.com/alphah-dev/crypto-stream-backend.git
cd crypto-stream-backend

# Clone frontend
git clone https://github.com/alphah-dev/cryptostream-frontend.git
cd cryptostream-frontend
```

### Backend Setup
```bash
npm install
```
Create a `.env` file with:
```ini
PORT=5000
HIVE_POSTING_KEY=your_hive_posting_key
PINATA_API_KEY=your_pinata_api_key
PINATA_SECRET_KEY=your_pinata_secret_key
```
Start the server:
```bash
npm start
```

### Frontend Setup
```bash
cd ../cryptostream-frontend
npm install
```
Update `API_URL` in frontend (e.g., `src/config.js`):
```javascript
const API_URL = "https://crypto-stream-backend.onrender.com";
```
Build and run:
```bash
npm run build
npm run dev
```

## Usage
- Start the backend (`npm start` in the backend directory).
- Start the frontend (`npm run dev` in the frontend directory).
- Visit `http://localhost:5173` to access CryptoStream.
- Upload videos via **Creator Studio** and log in with **Hive via Ecency**.

## Deployment
### Backend (Render)
1. Push to GitHub: `git push origin main`
2. Deploy on Render as a **Web Service**.
3. Set environment variables (PORT, API keys, etc.).
4. Deploy and retrieve live URL (`https://crypto-stream-backend.onrender.com`).

### Frontend (Render)
1. Push to GitHub: `git push origin main`
2. Deploy as a **Static Site** on Render.
3. Set **Build Command**: `npm install && npm run build`
4. Set **Publish Directory**: `dist`
5. Deploy and retrieve live URL (`https://cryptostream-frontend.onrender.com`).

## Contributing
We welcome contributions to CryptoStream! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make changes and commit: `git commit -m "Add new feature"`.
4. Push the branch: `git push origin feature-branch`.
5. Open a **Pull Request**.

## License
This project is licensed under the **MIT License**. See the `LICENSE` file for details.

## Contact
**Author:** [HARSH KATIYAR]  
**Email:** [katiyarh76@gmail.com]  
**GitHub:** [https://github.com/alphah-dev](https://github.com/alphah-dev)  
**Live Demo:** [Frontend URL:- https://cryptostreamweb3.netlify.app/] | [Backend URL:- https://crypto-stream-backend-5.onrender.com]  
**Feedback:** Open an issue or reach out!
