$(".contactcard-toggle").on("click", function(){
	
	// Card toggle state 	
	$(".contactcard-toggle").removeClass("active");
	$(this).addClass("active");
	
	var isAnimating = false;
	
	if( !isAnimating ){
		isAnimating = true;
		
		$(".contactcard").find(".contactcard-content").css("z-index",0);
		$(".contactcard").removeClass("active");

		var that = $(this);

		$(this).siblings().css("z-index",1);

		setTimeout(function(){
			that.parent().toggleClass("active").find(".card-content").on("transitionend", function(){
				isAnimating = false;
			});	;
			
		},10);
	} else {
		return;
	}
});
