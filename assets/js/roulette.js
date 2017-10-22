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

function playRoulette(bets) {
  outcome = spinRouletteWheel();
  color = colorOfNumber(outcome);
  payouts = setPayouts();
  console.log(`Outcome of roulette spin: ${outcome} ${color}`);
  bets.forEach(function(e){
    amount = e[0];
    betType = e[1];
    payout = payouts[betType];
    if (payout === undefined) {
      throw new BetError(e);
    }
    if (betIsSuccessful(betType, outcome)) {
      console.log(`Bet of $${amount} on ${betType} won ${amount*payout}`);
      return amount*payout;
    }
    else {
      console.log(`Bet of $${amount} on ${betType} lost.`);
      return 0;
    }

  });
}
//idea: make a grid of the numbers to allow for easier betting
function setPayouts(){
  payouts = {
            'red': 1,
            'even': 1,
            'first12': 2,
            'black': 1,
            'odd':1,
            '00': 35
          };
  //straight up
  for(var i = 0; i < 37; i++){
    payouts[String(i)] = 35;
  }
  //street bet
  for (var i = 1; i < 37; i+=3) {
    s = String(i) + String(i+1) + String(i+2);
    payouts[s] = 11;
  }
  //split bet
  for (var i = 1; i < 37; i+=2) {
    s = String(i) + String(i+1);
  }
  return payouts;
}
//do not send in dollar amount, just the bet e.g. odd, even, etc.
function betIsSuccessful(bet, outcome) {
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
//pass in outcome as a string!
function colorOfNumber(str) {
  if (str == '0' || str == '00')
    return 'green';
  else if (Number(str) % 2 == 0)
    return 'black';
  else
    return 'red';
}
//if money is involved this outcome needs to come from a server  somewhere
function spinRouletteWheel() {
  outcome = Math.floor(Math.random()*38);
  // outcome = 35;
  str = "";
  if (outcome == 0)
    str = "00";
  else
    str = String(outcome - 1);
  // console.log(isBetSuccessful("third12", str));
  // playRoulette([100, 'red'])
  return str;
}
