# Tic Tac Toe Game

A modern, interactive Tic Tac Toe game built with React, Next.js, and Tailwind CSS.

## 🎮 Features

-   **Interactive Gameplay**: Click on grid squares to make your move
-   **Visual Feedback**: Clean, modern UI with responsive design
-   **Two Player Mode**: Alternating turns between X and O players
-   **React-Powered**: Built with modern React hooks and state management
-   **Responsive Design**: Styled with Tailwind CSS for a beautiful, mobile-friendly interface

## 🛠️ Tech Stack

-   **Framework**: [Next.js 14](https://nextjs.org/) - React framework for production
-   **Frontend**: [React 18](https://reactjs.org/) - JavaScript library for building user interfaces
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
-   **Language**: JavaScript (ES6+)

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository**

    ```bash
    git clone [https://github.com/codewithjihad1/tic-tac-toe-game.git]
    cd tic-tac-toe-game
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**

    Navigate to [http://localhost:3000](http://localhost:3000) to see the game in action!

## 📝 Available Scripts

In the project directory, you can run:

-   `npm run dev` - Runs the app in development mode
-   `npm run build` - Builds the app for production
-   `npm start` - Runs the built app in production mode
-   `npm run lint` - Runs the linter to check for code issues

## 🎯 How to Play

1. The game starts with Player 1 (O)
2. Click on any empty square to place your mark
3. Players alternate turns between O and X
4. The first player to get three marks in a row (horizontally, vertically, or diagonally) wins
5. If all squares are filled without a winner, the game is a draw

## 📁 Project Structure

```
tic_tac_toe/
├── public/                 # Static assets
│   ├── next.svg
│   └── vercel.svg
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles
│   │   ├── layout.js      # Root layout component
│   │   └── page.js        # Home page component
│   ├── assets/            # Game assets
│   │   └── images/        # Game icons and images
│   │       ├── circle.png
│   │       └── close.png
│   └── components/        # React components
│       ├── GameBoard.jsx  # Game board component
│       └── copu.jsx       # Additional component
├── jsconfig.json          # JavaScript configuration
├── next.config.js         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── postcss.config.js      # PostCSS configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🔧 Configuration Files

-   **`next.config.js`** - Next.js configuration
-   **`tailwind.config.js`** - Tailwind CSS customization
-   **`postcss.config.js`** - PostCSS plugins configuration
-   **`jsconfig.json`** - JavaScript project configuration for better IDE support

## 🎨 Styling

The project uses Tailwind CSS for styling with custom components:

-   **Grid Layout**: 3x3 game board using CSS Grid
-   **Interactive Elements**: Hover effects and responsive design
-   **Custom Classes**: `.box` class for game squares with consistent styling

## 🚧 Current Development Status

This is a work-in-progress project with the following features implemented:

-   ✅ Basic game board layout
-   ✅ Click handling for game squares
-   ✅ Player turn alternation
-   ✅ Responsive design with Tailwind CSS

### Planned Improvements

-   🔄 Win condition detection
-   🔄 Game reset functionality
-   🔄 Score tracking
-   🔄 Animation effects
-   🔄 Game history

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature`)
5. Open a Pull Request

## 🙋‍♂️ Support

If you have any questions or run into issues, please feel free to open an issue in the repository.

---

**Happy Gaming! 🎮**
