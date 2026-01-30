# Tic-Tac-Toe (Console) – JavaScript

A simple console-based Tic-Tac-Toe game built with JavaScript and Node.js.  
This project demonstrates core programming concepts such as control flow, arrays, user input handling, and basic game logic.

---

## Features

- Play Tic-Tac-Toe directly in the terminal
- Two-player mode with alternating turns
- Win detection (rows, columns, diagonals)
- Draw detection
- Input validation
- Option to quit the game at any time

---

## Technologies Used

- JavaScript
- Node.js
- prompt-sync (for synchronous user input)

---

## Project Structure

```
tic-tac-toe-console-js/
├── tictactoe.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Requirements

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher recommended)

- npm (comes bundled with Node.js)

You can verify your Node.js installation by running:

```
node -v
```
---

## Installation

Clone the repository:

```
git clone https://github.com/your-username/tic-tac-toe-console-js.git
```

Navigate to the project directory:

```
cd tic-tac-toe-console-js
```

Install the required dependencies:
```
npm install
```

---

## How to Run

Start the game by running the following command in your terminal:

```
node tictactoe.js
```
---

## How to Play

- The game board consists of 9 cells indexed from 0 to 8.

- Players take turns entering a number corresponding to a cell.

- A move is valid only if the selected cell is empty.

- Enter q at any time to quit the game.

---

## Example prompt:

Player 🐯, enter your move (0-8) or 'q' to quit:

Example Board
🐯 |   | 🍖
------------
  | 🐯 |  
------------
  |   | 🍖

---

## Learning Objectives

This project was built to practice and demonstrate:

- JavaScript fundamentals.

- Control flow and game loops.

- Array manipulation.

- Conditional logic.

- Input validation and error handling.

- Running JavaScript applications using Node.js.

---

## Possible Improvements

- Display cell indices on the board for better usability.

- Add a score tracking system.

- Implement a replay option.

- Create a graphical (web-based) version of the game.

---

## Author

Built by Kawtar Dahman