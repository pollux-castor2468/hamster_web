$(document).ready(function() {
    // 切換圖片&影片區按鈕
    $("#picture").click(function(){
        $("#picture").addClass("present-nav-bottom");
        $("#movie").removeClass("present-nav-bottom");

        $("#species-img").removeClass("species-hidden");
        $("#species-video").addClass("species-hidden");
    })
    $("#movie").click(function(){
        $("#picture").removeClass("present-nav-bottom");
        $("#movie").addClass("present-nav-bottom");

        $("#species-img").addClass("species-hidden");
        $("#species-video").removeClass("species-hidden");
    })


    // 點小圖片之後會出現最上面的大圖片
// cover的部分
    $(".img-bottom").click(function(){
        $("#cover").fadeIn();
	});
    $(".close-bottom").click(function(){
        $("#cover").fadeOut();
    });
    $("#cover").click(function(){
        $("#cover").fadeOut();
        $(".species-img-big").fadeOut();
    });
// 大圖片1
    $("#img-bottom1").click(function(){
		// $("#species-img-big1").removeClass("species-hidden");
        $("#species-img-big1").fadeIn();
	});
    $("#close-bottom1").click(function(){
        // $("#species-img-big1").addClass("species-hidden");
        $("#species-img-big1").fadeOut();
    });
// 大圖片2
    $("#img-bottom2").click(function(){
		$("#species-img-big2").fadeIn();
	});
    $("#close-bottom2").click(function(){
        $("#species-img-big2").fadeOut();
    });
// 大圖片3
    $("#img-bottom3").click(function(){
		$("#species-img-big3").fadeIn();
	});
    $("#close-bottom3").click(function(){
        $("#species-img-big3").fadeOut();
    });
// 大圖片4
    $("#img-bottom4").click(function(){
		$("#species-img-big4").fadeIn();
	});
    $("#close-bottom4").click(function(){
        $("#species-img-big4").fadeOut();
    });
// 大圖片5
    $("#img-bottom5").click(function(){
		$("#species-img-big5").fadeIn();
	});
    $("#close-bottom5").click(function(){
        $("#species-img-big5").fadeOut();
    });
// 大圖片6
    $("#img-bottom6").click(function(){
		$("#species-img-big6").fadeIn();
	});
    $("#close-bottom6").click(function(){
        $("#species-img-big6").fadeOut();
    });

    

});