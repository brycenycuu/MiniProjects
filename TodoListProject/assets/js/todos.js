// Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete li
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// get new todo
		var todoText = $(this).val();
		$(this).val("");
		// create new li
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todoText + "</li>");
	}
});
$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle()
})