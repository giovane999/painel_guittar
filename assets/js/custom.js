var guittar = $(".img_list_guittar");
	guittar.on("click", function(){
		guittar.removeClass();
		$(this).addClass("li_active");

		var texto = $(this).text();
		var troca_texto = $("#title_guittar").text(texto);
	})

var foto = $(".img_troca");
foto.on("click", function(){
	var troca_img = $(this).attr("src");
		$(".guittar").attr("src", troca_img);
})
