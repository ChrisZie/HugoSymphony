$(document).ready(function(){
  var zindex = 10;
  
  $("div.foldOutCard").click(function(e){
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.foldOutCards").hasClass("showing")) {
      // a foldOutCard is already in view
      $("div.foldOutCard.show")
        .removeClass("show");

      if (isShowing) {
        // this foldOutCard was showing - reset the grid
        $("div.foldOutCards")
          .removeClass("showing");
      } else {
        // this foldOutCard isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.foldOutCards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
});