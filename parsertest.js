$("input").on("keypress", function(e){
  if (e.which == 13) {
    console.log($(this).val())
    $(this).before("<p> test</p>")
    $(this).val("")
  }
})
