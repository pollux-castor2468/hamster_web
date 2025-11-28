$(document).ready(function() {
    
    // 點小圖片之後會切換最上面的大圖片
    $("#img-bottom1").click(function(){
		$(".species-img-big").html(
            `<div>
                <img class="species-img-big-img"
                src="https://rodentscare.org/wp-content/uploads/2025/11/IMG_6596.jpg" alt="黃金鼠圖片1">
            </div>`
        );
	});
    $("#img-bottom2").click(function(){
		$(".species-img-big").html(
            `<div>
                <img class="species-img-big-img"
                src="https://rodentscare.org/wp-content/uploads/2025/11/IMG_6595.jpg" alt="黃金鼠圖片1">
            </div>`
        );
	});
    $("#img-bottom3").click(function(){
		$(".species-img-big").html(
            `<div>
                <img class="species-img-big-img"
                src="https://rodentscare.org/wp-content/uploads/2025/11/IMG_6603.jpg" alt="黃金鼠圖片1">
            </div>`
        );
	});
    $("#img-bottom4").click(function(){
		$(".species-img-big").html(
            `<div>
                <img class="species-img-big-img"
                src="https://rodentscare.org/wp-content/uploads/2025/11/IMG_6599.jpg" alt="黃金鼠圖片1">
            </div>`
        );
	});

});