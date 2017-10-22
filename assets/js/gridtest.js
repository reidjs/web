var Element = function(num){
  this.num = num;
  this.up = null;
  this.down = null;
  this.left = null;
  this.right = null;
};
x = new Element(1);
// console.log(x.num);

//https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'assets/js/bets.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
}

//almost works
var Payouts = loadJSON(function(response) {
    var actual_JSON = JSON.parse(response);
    console.log(actual_JSON);
    return 10;
});
console.log(Payouts);
