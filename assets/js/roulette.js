define(function(require, exports, module){
    exports.spin = function() {
      return spinRouletteWheel();
    };
    exports.play = function(bets) {
      return playRoulette(bets);
    };
});
//pass in bets as an array of tuples
//[100, 'b'] means $100 on black
//[5, '34'] means 5 on 34 only
//odd, even, etc.
PAYOUTS = {'red': 2, 'even': 2};
function playRoulette(bets) {
  bets.forEach(function(e){
    amount = e[0];
    betType = e[1];
    if (PAYOUTS[betType] === undefined)
      console.log('INVALID BET:');
    console.log(e);
  });
}
//do not send in dollar amount, just the bet e.g. odd, even, etc.
function isBetSuccessful(bet, outcome) {
  if (outcome == '0' && bet != '0') {return false; }
  if (outcome == '0' && bet == '0') {return true; }
  if (outcome == '00' && bet != '00') {return false; }
  if (outcome == '00' && bet == '00') {return true; }
  if (Number(bet) >= 0 && Number(bet)< 37) { return Number(bet) == Number(outcome); }
  if (bet=='even') { return Number(outcome) % 2 == 0; }
  if (bet=='odd') { return Number(outcome) % 2 != 0; }
  if (bet=='black') { return Number(outcome) % 2 == 0; }
  if (bet=='red') { return Number(outcome) % 2 != 0; }
  if (bet=='first12') { return Number(outcome) < 13; }
  if (bet=='second12') { return (Number(outcome) > 12 && Number(outcome) < 25); }
  if (bet=='third12') { return Number(outcome) > 24; }

  // black = even;
  // first12 = outcome < 13;
  // second12 = outcome > 12 && outcome < 25;
  // third12 = outcome > 24;
}
function spinRouletteWheel() {
  // outcome = Math.floor(Math.random()*38);
  outcome = 35;
  str = "";
  if (outcome == 0)
    str = "00";
  else
    str = String(outcome - 1);
  // console.log(isBetSuccessful("third12", str));
  // playRoulette([100, 'red'])
  return str;
}
