# 🎮 Tic Tac Toe — React

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)

**A simple two–player Tic Tac Toe game built with React.**  
Live Demo: **[Click Here](https://tic-tac-toe-react-ten-flax.vercel.app/)**

---

## 📌 Description
This project is a fun, interactive version of Tic Tac Toe built in React using Vite for fast development and deployment on Vercel. It’s responsive, simple, and showcases clean component-based architecture.

---

## ✨ Features
- 🟢 **Circle vs Cross** gameplay for 2 players.
- 🔍 Automatic **winner detection**.
- 🤝 **Draw detection**.
- 🔄 **Restart** button.
- 📱 Fully **responsive** design.

---

## 📸 Preview
![Game Screenshot](https://i.imgur.com/mhCjRzZ.png)  
*(Replace with your own screenshot if you want)*

---

## 🛠️ Tech Stack
- **React** (Vite build system)
- **CSS** for styling
- **Vercel** for deployment

---

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed.

### Installation
```bash
# 1️⃣ Clone the repository
git clone <repo-url>
cd <project-folder>

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run development server
npm run dev

# 4️⃣ Build for production
npm run build

# 5️⃣ Preview production build locally
npm run preview
📂 Project Structure
src/
  components/
    Cell.jsx         # Single cell component
  App.jsx            # Main game logic & UI
  App.css            # Styling for the game
  main.jsx           # Entry point
🎮 Game Rules
Circle always starts first.

Click an empty square to place your mark.

Turns alternate between Circle and Cross.

First to match a winning combination wins.

If all squares are filled without a winner → it’s a draw.

Press Play Again to restart.
