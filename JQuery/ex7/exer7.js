var nova_mota1 = "nova_mota1.jpg"
var nova_mota2  = "nova_mota2.jpg"
var mota_usada1 = "mota_usada1.jpg"
var mota_usada2 = "mota_usada2.jpg"

$(document).ready(function(){
	var imagem1 = new Image (250, 250)
	var imagem2 = new Image (250, 250)
	var imagem3 = new Image (250, 250)
	var imagem4 = new Image (250, 250)

	imagem1.src = mota_usada1;
	imagem2.src = mota_usada2;
	imagem3.src = nova_mota1;
	imagem4.src = nova_mota2;

	$("#motas_todas").hide();

	$("p").css ({
		width : 100
	})

	$("#motas_usadas").mouseover(function(){
		$("#motas_usadas_div").append(imagem1)
		$("#motas_usadas_div").append(imagem2)
	})

	$("#motas_novas").mouseover(function(){
		$("#motas_novas_div").append(imagem3)
		$("#motas_novas_div").append(imagem4)
	})

	$("#motas_usadas").mouseleave(function() {
		imagem1.remove()
		imagem2.remove()
	})

	$("#motas_novas").mouseleave(function() {
		imagem3.remove()
		imagem4.remove()
	})

	$("#duplo_clique").dblclick(function() {
		$("#motas_todas").show()

		alert(" ");

		$("#motas_todas").append(imagem1)
		$("#motas_todas").append(imagem2)
		$("#motas_todas").append(imagem3)
		$("#motas_todas").append(imagem4)
	})
})