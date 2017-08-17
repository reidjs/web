var hintGiven = false
//To strip off the special characters from input
// https://stackoverflow.com/questions/17066399/removing-special-characters-from-the-text-using-jquery
$(".input-group").on("keypress", function(e){
  if (e.which == 13) {
    // sanitize user input for injections
    var text = $("#entertext").val().replace(/[^a-z0-9\s]/gi, ' ').replace(/[_\s]/g, ' ')
    $(this).before(evaluateText(text))
    $("input").val("")
    // Scrolling to input box automatically
    // https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page
    document.body.scrollTop = document.body.scrollHeight;
  }
})

function evaluateText(text) {
  // var text = texts
  // console.log(text)
  var words = text.split(" ")
  var userInput = "<h1 class='userEntered'>: "+text+"</h1>"
  if (words[0] === "echo")
    return userInput + "<h1 class='userEntered'>" + words.slice(1).join() + "</h1>"
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
    var str = "try typing 'help' for available commands"
    !hintGiven ? hintGiven = true : str = "command not found"
    return userInput + "<h1 class='userEntered'>" +
     str + "</h1>"
  }
}
function changeDirectory(path) {
  var path = path.toLowerCase()
  if (path == "reid") {
    return window.location.href = "https://reidsherman.com/wp/"
  }
  else if (path == "wordpress") {
    return window.location.href = "https://reidsherman.com/wp/"
  }
  else if (path == "geology") {
    return window.location.href = "https://reidsherman.com/wp/"
  }
  else {
    return evaluateText('help')
  }

}
function clear() {
  $(".userEntered").remove()
}
