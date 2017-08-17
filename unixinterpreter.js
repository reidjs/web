var lines = []
//To strip off the special characters from input
// https://stackoverflow.com/questions/17066399/removing-special-characters-from-the-text-using-jquery
$(".input-group").on("keypress", function(e){
  if (e.which == 13) {
    var text = $("#entertext").val().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, ' ')
    $(this).before(evaluateText(text))
    $("input").val("")
  }
})
function evaluateText(text) {
  // var text = texts
  console.log(text)
  var words = text.split(" ")
  var userInput = "<h1 class='userEntered'>: "+text+"</h1>"
  if (words[0] === "echo")
    return userInput + "<h1 class='userEntered'>" + words.slice(1).join() + "</h1>"
  else if (words[0] === "clear")
    return clear()
  else {
    return userInput + "<h1 class='userEntered'>" +
     "command not found" + "</h1>"
  }
}
function clear() {
  $(".userEntered").remove()
}
