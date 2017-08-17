$("input").on("keypress", function(e){
  if (e.which == 13) {
    $(this).insertBefore(".line")
    $(this).val("")
  }
})
//parses text
//responds to text
//moves autofocus down
