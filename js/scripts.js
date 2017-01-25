var newGame;
var counter = 0;
var entry = "X";

var winner = false;
// var winArr = [["00", "01", "02"], ["10", "11", "12"], ["20", "21", "22"], ["00", "10", "20"], ["01", "11", "21"], ["02", "12", "22"], ["00", "11", "22"], ["02", "11", "20"]];

function checkWinner(){
  switch (winner === false) {
    case (newGame.board[0][0] === newGame.board[0][1] && newGame.board[0][0] === newGame.board[0][2]):
    winner = true;
    break;
    case (newGame.board[1][0] === newGame.board[1][1] && newGame.board[1][0] === newGame.board[1][2]):
    winner = true;
    break;
    case (newGame.board[2][0] === newGame.board[2][1] && newGame.board[2][0] === newGame.board[2][2]):
    winner = true;
    break;
    case (newGame.board[0][0] === newGame.board[1][0] && newGame.board[0][0] === newGame.board[2][0]):
    winner = true;
    break;
    case (newGame.board[0][1] === newGame.board[1][1] && newGame.board[0][1] === newGame.board[2][1]):
    winner = true;
    break;
    case (newGame.board[0][2] === newGame.board[1][2] && newGame.board[0][2] === newGame.board[2][2]):
    winner = true;
    break;
    case (newGame.board[0][0] === newGame.board[1][1] && newGame.board[0][0] === newGame.board[2][2]):
    winner = true;
    break;
    case (newGame.board[0][2] === newGame.board[1][1] && newGame.board[0][2] === newGame.board[2][0]):
    winner = true;
    break;
  }

  if(winner){
    alert('someone won');
  } else if (counter === 8 && !winner){
    alert('no one won, restart the game');
  }
}

function iterate(){
  if(counter%2===0){
    entry="X";
  } else {
    entry="O";
  }
}

function Board() {
  this.board = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
  ];
}

function Player(chosen) {
  this.mark = chosen;
}

function winCondition() {

}


$(document).ready(function(){
  newGame = new Board();

  $('#reset').click(function(){
    $('div > span').text("");
    $('div > button').show();
    newGame = new Board();
    counter = 0;
    winner = false;
    console.log("hello")
  })
//================================================
  $('#00 button').click(function() {
    iterate();
    $(this).hide();
    $(this).next().text(entry);
    newGame.board[0][0] = entry;
    checkWinner();
    counter++;

  });
  $('#01 button').click(function() {
    iterate();
    $(this).hide();
    $(this).next().text(entry);
    newGame.board[0][1] = entry;
    checkWinner();
    counter++;

  });
  $('#02 button').click(function() {
    iterate();
    $(this).hide();
    $(this).next().text(entry);
    newGame.board[0][2] = entry;
    checkWinner();
    counter++;

  });
  $('#10 button').click(function() {
    iterate();
    $(this).hide();
    $(this).next().text(entry);
    newGame.board[1][0] = entry;
    checkWinner();
    counter++;

  });
  $('#11 button').click(function() {
    iterate();
    $(this).hide();
    $(this).next().text(entry);
    newGame.board[1][1] = entry;
    checkWinner();
    counter++;

  });
  $('#12 button').click(function() {
    iterate();
    $(this).hide();
    $(this).next().text(entry);
    newGame.board[1][2] = entry;
    checkWinner();
    counter++;

  });
  $('#20 button').click(function() {
    iterate();
    $(this).hide();
    $(this).next().text(entry);
    newGame.board[2][0] = entry;
    checkWinner();
    counter++;

  });
  $('#21 button').click(function() {
    iterate();
    $(this).hide();
    $(this).next().text(entry);
    newGame.board[2][1] = entry;
    checkWinner();
    counter++;

  });
  $('#22 button').click(function() {
    iterate();
    $(this).hide();
    $(this).next().text(entry);
    newGame.board[2][2] = entry;
    checkWinner();
    counter++;

  });

})
