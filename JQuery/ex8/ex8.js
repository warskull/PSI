$(document).ready(function(){
	$(".info").hide();

	$("p").css({
		"font-size": "24px"						 				 
	});

	$("#imagem").click(function(){
		$(".info").show();
		$("#imagem").slideUp("slow");
	})

	$("input:text").focus(function(){
		$(this).css({
			"background-color": "#ff69b4"
		})
	})

	$("input:text").focusout(function(){
		$(this).css({
			"background-color": "#ffffff"
		})
	})

	$("#passe").focusout(function(){
		$("#imagem").slideDown(1000);
		$(".info").fadeOut("slow");
	})

})