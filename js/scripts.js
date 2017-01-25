var newGame;
var winner = false;
var computer = false;

function checkWinner(){
  switch (winner === false) {
    case (newGame.board[0] === newGame.board[1] && newGame.board[0] === newGame.board[2]):
    winner = true;
    break;
    case (newGame.board[3] === newGame.board[4] && newGame.board[3] === newGame.board[5]):
    winner = true;
    break;
    case (newGame.board[6] === newGame.board[7] && newGame.board[6] === newGame.board[8]):
    winner = true;
    break;
    case (newGame.board[0] === newGame.board[3] && newGame.board[0] === newGame.board[6]):
    winner = true;
    break;
    case (newGame.board[1] === newGame.board[4] && newGame.board[1] === newGame.board[7]):
    winner = true;
    break;
    case (newGame.board[2] === newGame.board[5] && newGame.board[2] === newGame.board[8]):
    winner = true;
    break;
    case (newGame.board[0] === newGame.board[4] && newGame.board[0] === newGame.board[8]):
    winner = true;
    break;
    case (newGame.board[2] === newGame.board[4] && newGame.board[2] === newGame.board[6]):
    winner = true;
    break;
  }

  if(winner){
    alert('someone won');
  } else if (newGame.counter === 8 && !winner){
    alert('no one won, restart the game');
  }
}

function Board() {
  this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  this.counter = 0;
  this.entry = "X";
}

Board.prototype.iterate = function(){
  if(this.counter%2===0){
    this.entry="X";
  } else {
    this.entry="O";
  }
}

$(document).ready(function(){
  newGame = new Board();

  $('#twoPlayerButton, #quit').click(function() {
    $('#twoPlayer, .modeButton').toggleClass("hide");
  });

  $('#singlePlayerButton').click(function(){
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
    var userEntry=$(this).val()
    newGame.board[parseInt(userEntry)] = newGame.entry;
    checkWinner();
    newGame.counter++;
  });
})
