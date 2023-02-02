# TIC-TAC-TOE

This project implements the popular tic-tac-toe game for 2 players. During alternate turns, each player has to mark an
'X' or an 'O' symbol, with the goal of marking a 3-symbols sequence before the opponent. Winning combinations are any
vertical, horizontal or oblique line.

## Features
- The central grid represent the current status of the match
- On the lect side, the status message may tell:
  - who is the next player that has to perform a move
  - who is the winning player
  - if the match is ended in a tie
- The game history is also represented using interactive buttons. After each move, a new list item is added with:
  - the move number
  - who performed the move
  - the position where the mark was applied
- List items are interactive: when selected the game board configuration is restored as the same as it was when the move was performed
- It is possible to restart the match at any point after restoring the board using the history items
- The history list can be sorted in ascending or descending order using a toggle button
- Winning combinations are highlighted as soon as a player wins a match

![alt text](https://user-images.githubusercontent.com/19650706/216344549-69719d52-299e-43ce-8219-0b71b331b332.png)
## Technical details

The project is implemented and tested with React 18.2.0 Jest 29.4.1

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.