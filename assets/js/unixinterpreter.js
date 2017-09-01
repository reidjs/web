// var elizabot = require('./elizabot.js');
var hintGiven = false;
var userInput = "";
//To strip off the special characters from input
// https://stackoverflow.com/questions/17066399/removing-special-characters-from-the-text-using-jquery
$(".input-group").on("keypress", function(e){
  if (e.which == 13) {
    // sanitize user input for injections
    var text = $("#entertext").val().replace(/[^a-z0-9\s]/gi, ' ').replace(/[_\s]/g, ' ');
    //parse the text and determine what function to use
    //var replyFunction = returnFunctionFromUserInput(text);
    //get the output from the function
    console.log("TEXT INPUT: "+text);
    // var reply = replyFunction(text);
    // var replytext = f(text)
    userInput = htmlizeUserText(text);
    returnFunctionFromUserInput(text);
    // $(is).before(f(text))
    // $(this).before(rep, requirejs(['elizabot'], function(require, exports, module){
    //   console.log(require.reply(text));
    //   rep = "Adsf"
    //   $("input").val("");
    //   document.body.scrollTop = document.body.scrollHeight;
    // }));



    // Scrolling to input box automatically
    // https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page

  }
});
// function lastresponse(t) {
//   return t
// }
function htmlizeUserText(text) {
  return "<h1 class='userEntered'>: "+text+"</h1>";
}
function reply(text){
  $(".input-group").before(userInput, htmlizeUserText(text));
  $("input").val("");
  document.body.scrollTop = document.body.scrollHeight;
}
function elizaReply(text) {
  requirejs(['elizabot'], function(require, exports, module){
    reply(require.reply(text));
  });
}
function echo(text) {
  t = text.split(" ").slice(1);
  reply(t);
}
function help() {
  reply("In case of an emergency, please dial 911");
}
//returns the function based on the sanitzed text provided by user. Every return function
//MUST take one argument.
function returnFunctionFromUserInput(text) {
  var request = text.toLowerCase().split(" ")[0]; //the first word
  // var userInput = htmlizeUserText(text);
  if (request === "echo") {
    echo(text);
  }
  else if (request === "clear") {
    clear();
  }
  else if (request === "help") {
    help();
  }
  else {
    elizaReply(text);
  }
}
function evaluateText(text) {
  var words = text.toLowerCase().split(" ")
  var userInput = "<h1 class='userEntered'>: "+text+"</h1>"
  if (words[0] === "echo" && words.length > 1) {
    if (words.slice(-1)[0].includes("path"))
      return pathlink()
    else
      return userInput + "<h1 class='userEntered'>" + words.slice(1).join() + "</h1>"
  }
  else if (words[0] === "clear")
    return clear()
  else if (words[0] == "help")
    return userInput + "<ul class='userEntered'>"+
    "<li>echo: repeat back</li>"+
    "<li>clear: removes previous commands</li>" +
    "<li>cd [dir]: change to directory (e.g., Reid/geology/)</li>" + "</ul>"
  else if (words[0] == "cd")
    return changeDirectory(words.pop())
  else {
    // var str = "try typing 'help' for available commands"
    // !hintGiven ? hintGiven = true : str = "command not found"
    // return userInput + "<h1 class='userEntered'>" +
    //  str + "</h1>"
    //elizabot.start();
    // elizabot.reply(text);

    // console.log(result);
  }
}
function printText(text) {

}
// function elizaReply(text){
//   var x = function(text){
//     requirejs(["elizabot"], function() {
//     console.log(text);
//     // result=reply;
//     // return "<h1 class='userEntered'>"+reply+"</h1>";
//     return text;
//     });
//   };
//   return x(text);
// }
function changeDirectory(path) {
  var path = path.toLowerCase()
  if (path == "reid") {
    return window.location.href = "/"
  }
  else if (path == "wordpress") {
    return window.location.href = "https://reidsherman.com/wp/"
  }
  else if (path == "geology") {
    return window.location.href = "/cv.php"
  }
  else {
    return evaluateText('help')
  }

}
function pathlink() {
  return "<h1 class='userEntered'> Reid/geology/astrophysics/educator/<a href='https://reidsherman.com/projects/'>software-developer</a></h1>"
}
function clear() {
  $(".userEntered").remove()
}
