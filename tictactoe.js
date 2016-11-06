/*
Statussen:
0 = onbekend
1 = X
2 = O

//voorbeeld van de matrix
var Matrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
*/
var myGame = document.getElementById('game');
var turn = 1;
var numrows = 3;
var numcols = 3;
var initialStatus = 0;

// best way to create a 2D array in Javascript: http://www.stephanimoroni.com/how-to-create-a-2d-array-in-javascript/
var grid = [];

//begin taak
function startGame (){
   for (var i = 0; i < numrows; ++i){
      	var columns = [];
      	var row = document.createElement('div');

      	row.setAttribute('id', 'Gamerow' + i);
      	row.setAttribute('class', 'row');

      for (var j = 0; j < numcols; ++j){
         columns[j] = initialStatus;
         var div = document.createElement('div');
         div.innerText = ' ';
         div.setAttribute('class', 'box');
         div.setAttribute('data-index', 0);
         div.setAttribute('data-row', i);
         div.setAttribute('data-col', j);
         div.setAttribute('onclick', 'clickHandler(event)');
         row.appendChild(div);
      }
      	grid[i] = columns;
      	myGame.appendChild(row);
    }

}

function clickHandler(event){
  var elementClicked = event.currentTarget;
  var col = elementClicked.getAttribute('data-col');
  var row = elementClicked.getAttribute('data-row');

  //if the box doesn't belong to a player, it becomes a player's box
  if (grid[row][col] == 0){
    grid[row][col] = turn;
    elementClicked.setAttribute('data-index', turn);
    console.log(elementClicked);

    //switching turns
    if (turn == 1){
      elementClicked.innerText = 'X';
      turn ++;
    }

    //switching turns
    else {
      elementClicked.innerText = 'O';
      turn = 1;
    }
    checkWin(grid, elementClicked);
  }

}

// under construction
function checkWin(grid, event){
  // check horizontal
  for (i=0; i<3; i++){

    if ( (grid[i][0] === grid[i][1] && grid[i][0] === grid[i][2]) && grid[i][0] !== 0 ) {
      won(grid[i][0]);
      return;
      }

  // check vertical
  for (j=0; j<3; j++){

    if((grid[0][j] === grid[1][j] && grid[0][j] === grid[2][j]) && grid[0][j] !== 0 ){
      won(grid[0][j]);
      return;
      }
    }

  // check diagonal, todo: make an algorithm
  if ((grid[0][0] === grid[1][1] && grid[2][2] === grid[1][1]) && grid[1][1] !== 0){
      won(grid[1][1]);
      return;
    }
  // check diagonal
  if ((grid[2][0] === grid[1][1] && grid[0][2] === grid[1][1]) && grid[1][1] !== 0){
      won(grid[1][1]);
      return;
    }

  }

}

function won(gridValue){
  var winner = "Unknown player";

  if (gridValue == 1){
    winner = "Player X";
  }

  if (gridValue == 2){
    winner = "Player O";
  }
    var winnerMessage = document.createElement('div');
    winnerMessage.innerText = winner + " won the game";
    myGame.appendChild(winnerMessage);

    var restart = document.createElement('button');
    restart.setAttribute('type', 'button');
    restart.setAttribute('onclick', 'restartGame()');
    restart.innerText = "restart game";
    myGame.appendChild(restart);  
}

function restartGame(){
  location.reload();
}

startGame();

