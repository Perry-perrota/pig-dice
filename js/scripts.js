var Rounds = function() {
  this.roll = 0;
  this.turnscore = 0;
  this.totalscore = 0;
};

var rollval = function() {
  return Math.round(5 * Math.random()) + 1;
};

Rounds.prototype.roll = function() {
  if (this.rollval=== 1) {
    this.turnscore = 0;
      $(document).getElementById('display')="Sorry you rolled a 1. Your turn score is zero";
      $(document).getElementById('score')= score;
  } else {
    this.turnscore += this.rollval;
  }
};
Rounds.prototype.hold = function() {
  this.totalscore += this.turnscore;
  this.turnscore = 0;
    $(document).getElementById('display')="Its the next player's turn!";
    $(document).getElementById('score')= score;
};
Rounds.prototype.checkForWinner = function() {
  if (this.totalscore > 99) {
    $(document).getElementById('display')="Congratulations You have won the game";
  }
};

$("button#roll1").click(function(event) {
  event.preventDefault();
  Rounds.prototype.roll();

});
$("button#roll2").click(function(event) {
  event.preventDefault();
    Rounds.prototype.hold();

});
$("button#hold1").click(function(event) {
  event.preventDefault();
    Rounds.prototype.roll();

});
$("button#hold2").click(function(event) {
  event.preventDefault();
    Rounds.prototype.hold();

});
