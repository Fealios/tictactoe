var newGame;
var winner = false;
var computer = false;
var hard = false;

function randomNum(){
  var random = (Math.round(Math.random()*8));
  while(newGame.moves.includes(random) && !winner){
    random = (Math.round(Math.random()*8));
  }
  return random;
}

function checkWinner(array, futureCounter){
  var localWin = false;
  switch (localWin === false) {
    case (array[0] === array[1] && array[0] === array[2]):
    localWin = true;
    break;
    case (array[3] === array[4] && array[3] === array[5]):
    localWin = true;
    break;
    case (array[6] === array[7] && array[6] === array[8]):
    localWin = true;
    break;
    case (array[0] === array[3] && array[0] === array[6]):
    localWin = true;
    break;
    case (array[1] === array[4] && array[1] === array[7]):
    localWin = true;
    break;
    case (array[2] === array[5] && array[2] === array[8]):
    localWin = true;
    break;
    case (array[0] === array[4] && array[0] === array[8]):
    localWin = true;
    break;
    case (array[2] === array[4] && array[2] === array[6]):
    localWin = true;
    break;
  }

  if(computer){
    if (localWin && futureCounter % 2 === 0) {
      return "Human Win";
    } else if (localWin && futureCounter % 2 === 1) {
      return "Computer Win";
    } else {
      return "No Winner Yet";
    }
  } else if(localWin) {
    return "You win!";
  }
}

function Board() {
  this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  this.counter = 0;
  this.entry = "X";
  this.moves = [];
  this.computerSelect = '';
  this.computerWin = false;
}

Board.prototype.iterate = function(){
  if(this.counter%2===0){
    this.entry="X";
  } else {
    this.entry="O";
  }
}

Board.prototype.easyComputerTurn = function(){
  this.iterate();
  this.computerSelect = randomNum();
  this.board[this.computerSelect] = this.entry
  console.log(this.computerSelect)
  this.moves.push(this.computerSelect);
  if (checkWinner(this.board, this.counter) === "Computer Win") {
    winner = true;
    alert('Damn, son. You suck.')
  }
  this.counter++;
}

// COMPUTER HARD MODE ===============================

Board.prototype.hardComputerTurn = function() {
  this.iterate();

}

function score(futureMoves, dummyCount) {
  if (checkWinner(futureMoves, dummyCount) === "Computer Win") {
    return 10;
  } else if(checkWinner(futureMoves, dummyCount) === "Human Win") {
    return -10;
  } else {
    return 0;
  }
}

function minimax(moves, count) {
  if (checkWinner(moves, count) === "Human Win" || checkWinner(moves, count) === "Computer Win")
    return score(moves, count)
}

// END COMPUTER HARD MODE =============================

// begin user logic
$(document).ready(function(){
  newGame = new Board();

  $('#twoPlayerButton, #quit').click(function() {
    $('#gameBoard, .modeButton').toggleClass("hide");
  });

  $('#singlePlayerButton').click(function(){
    $('#gameBoard, .modeButton').toggleClass("hide");
    computer = true;
  })

  $('#reset, #quit').click(function(){
    $('div > span').text("");
    $('div > button').show();
    newGame = new Board();
    winner = false;
    computer = false;
  })
//================================================
  $('.space button').click(function() {

    newGame.iterate();
    $(this).hide();
    $(this).next().text(newGame.entry);
    var movePosition = parseInt($(this).val());
    newGame.board[movePosition] = newGame.entry;
    newGame.moves.push(movePosition);
    if(checkWinner(newGame.board, newGame.counter) === "Human Win"){
      winner = true;
      alert('You have conquered the robots!');
    } else if(checkWinner(newGame.board, newGame.counter) === "You win!"){
      winner = true;
      alert('You win!');
    }
    newGame.counter++;//end of player

    if(!computer){
      console.log('you are playing against a human');
    }
    else if(computer){
      if(!winner){ // checks if there is a winner so computer doesnt go after a victory
        if(!hard){ // random AI turns
          console.log('you are playing against a machine');
          newGame.easyComputerTurn();
          $('#' + newGame.computerSelect).hide();
          $('#' + newGame.computerSelect).next().text(newGame.entry);
        } else { // intelligent AI turns
          newGame.hardComputerTurn();
          $('#' + newGame.computerSelect).hide();
          $('#' + newGame.computerSelect).next().text(newGame.entry);
        }
      }
    }
  });
})
