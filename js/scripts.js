var newGame;
var winner = false;
var computer = false;
var hard = false;
var humanOrMachine = "";

function randomNum(){
  var random = (Math.round(Math.random()*8));
  while(newGame.moves.includes(random) && !winner){
    random = (Math.round(Math.random()*8));
  }
  return random;
}

function checkWinner(array){
  switch (winner === false) {
    case (array[0] === array[1] && array[0] === array[2]):
    winner = true;
    break;
    case (array[3] === array[4] && array[3] === array[5]):
    winner = true;
    break;
    case (array[6] === array[7] && array[6] === array[8]):
    winner = true;
    break;
    case (array[0] === array[3] && array[0] === array[6]):
    winner = true;
    break;
    case (array[1] === array[4] && array[1] === array[7]):
    winner = true;
    break;
    case (array[2] === array[5] && array[2] === array[8]):
    winner = true;
    break;
    case (array[0] === array[4] && array[0] === array[8]):
    winner = true;
    break;
    case (array[2] === array[4] && array[2] === array[6]):
    winner = true;
    break;
  }

  if(winner){
    if(newGame.counter%2===0){
      humanOrMachine = "human";
      console.log(humanOrMachine)
    } else {
      humanOrMachine = "computer";
      console.log(humanOrMachine);
    }
    alert('someone won');
  } else if (newGame.counter === 8 && !winner){
    alert('no one won, restart the game');
  }
}

function Board() {
  this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  this.counter = 0;
  this.entry = "X";
  this.moves = [];
  this.computerSelect = '';
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
  checkWinner(this.board);
  this.counter++;
}

// COMPUTER HARD MODE ===============================

Board.prototype.hardComputerTurn = function() {
  this.iterate();
  
}

function score() {
  if (checkWinner()) {
    return 10;
  }
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
    checkWinner(newGame.board);
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
