$(document).ready(function() {
    // 嘗試...按下按鍵之後會向左切換到下一個
    // 這是放在首頁最下面的鄧物友善團體的，所以是四個一輪迴
    let turnNumber = 1; //目前顯示第幾個(只有1~4)

    turn = function() { //用來切換位置的 (((...這個到底要怎麼寫qwqq
        if(turnNumber == 1){
            $("#turnLeft").addClass("turn-1");
            $("#turnLeft").removeClass("turn-2"); $("#turnLeft").removeClass("turn-3"); $("#turnLeft").removeClass("turn-4");
            $("#underimgCover1").removeClass("underimg-cover");
            $("#underimgCover2").addClass("underimg-cover"); $("#underimgCover3").addClass("underimg-cover"); $("#underimgCover4").addClass("underimg-cover");
            // console.log(1.1);
        }
        else if(turnNumber == 2){
            $("#turnLeft").addClass("turn-2");
            $("#turnLeft").removeClass("turn-1"); $("#turnLeft").removeClass("turn-3"); $("#turnLeft").removeClass("turn-4");
            $("#underimgCover2").removeClass("underimg-cover");
            $("#underimgCover1").addClass("underimg-cover"); $("#underimgCover3").addClass("underimg-cover"); $("#underimgCover4").addClass("underimg-cover");
            // console.log(1.2);
        }
        else if(turnNumber == 3){
            $("#turnLeft").addClass("turn-3");
            $("#turnLeft").removeClass("turn-1"); $("#turnLeft").removeClass("turn-2"); $("#turnLeft").removeClass("turn-4");
            $("#underimgCover3").removeClass("underimg-cover");
            $("#underimgCover1").addClass("underimg-cover"); $("#underimgCover2").addClass("underimg-cover"); $("#underimgCover4").addClass("underimg-cover");
            // console.log(1.3);
        }
        else if(turnNumber == 4){
            $("#turnLeft").addClass("turn-4");
            $("#turnLeft").removeClass("turn-1"); $("#turnLeft").removeClass("turn-2"); $("#turnLeft").removeClass("turn-3");
            $("#underimgCover4").removeClass("underimg-cover");
            $("#underimgCover1").addClass("underimg-cover"); $("#underimgCover2").addClass("underimg-cover"); $("#underimgCover3").addClass("underimg-cover");
            // console.log(1.4);
        }
    }

    // 左右按鍵的
    $("#bottomRight").click(function(){ 
        turnNumber = turnNumber + 1; 
        if(turnNumber >= 5){ turnNumber = 1; }
        // console.log(turnNumber);
    }).click(turn)
    $("#bottomLeft").click(function(){ 
        turnNumber = turnNumber - 1; 
        if(turnNumber <= 0){ turnNumber = 4; }
        // console.log(turnNumber);
    }).click(turn)

    // 小圖示按鍵的
    $("#underimg1").click(function(){ turnNumber = 1; }).click(turn)
    $("#underimg2").click(function(){ turnNumber = 2; }).click(turn)
    $("#underimg3").click(function(){ turnNumber = 3; }).click(turn)
    $("#underimg4").click(function(){ turnNumber = 4; }).click(turn)

    
});