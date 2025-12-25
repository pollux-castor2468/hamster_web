$(function(){
    // 計算數量用的變數區
    let hamster1 = 0;
    let hamster2 = 0;
    let hamster3 = 0;
    let hamster4 = 0;
    let tot1 = 0;     //前面四個的總和

    let love1 = [0, 0, 0, 0];  //tot是上面的每一個的數量
    let love2 = [0, 0, 0, 0];
    let love3 = [0, 0, 0, 0];
    let love4 = [0, 0, 0, 0];

    //要寫進firebase用的計算的變數
    let counter = 0;
    let number = 0;
    let numberrange = [0, 0, 0, 0];


// 切換表單 & 數據按鈕
    $("#surveyForm").click(function(){
        $("#surveyForm").addClass("present-nav-bottom");
        $("#surveyData").removeClass("present-nav-bottom");
        $("#data").addClass("hide");
        $("#form").removeClass("hide");
        $("#formBottom").removeClass("hide");
    })
    $("#surveyData").click(function(){
        $("#surveyData").addClass("present-nav-bottom");
        $("#surveyForm").removeClass("present-nav-bottom");
        $("#form").addClass("hide");
        $("#formBottom").addClass("hide");
        $("#data").removeClass("hide");
    })

// 表單按鈕-選擇倉鼠類型
    let nowHamster = 0; //還沒選擇就是0
    $("#surveyHamster1").click(function(){
        nowHamster = 1;
        $("#surveyHamster1").addClass("now-hamster-type");
        $("#surveyHamster2").removeClass("now-hamster-type"); $("#surveyHamster3").removeClass("now-hamster-type"); $("#surveyHamster4").removeClass("now-hamster-type");
    })
    $("#surveyHamster2").click(function(){
        nowHamster = 2;
        $("#surveyHamster2").addClass("now-hamster-type");
        $("#surveyHamster1").removeClass("now-hamster-type"); $("#surveyHamster3").removeClass("now-hamster-type"); $("#surveyHamster4").removeClass("now-hamster-type");
    })
    $("#surveyHamster3").click(function(){
        nowHamster = 3;
        $("#surveyHamster3").addClass("now-hamster-type");
        $("#surveyHamster1").removeClass("now-hamster-type"); $("#surveyHamster2").removeClass("now-hamster-type"); $("#surveyHamster4").removeClass("now-hamster-type");
    })
    $("#surveyHamster4").click(function(){
        nowHamster = 4;
        $("#surveyHamster4").addClass("now-hamster-type");
        $("#surveyHamster1").removeClass("now-hamster-type"); $("#surveyHamster2").removeClass("now-hamster-type"); $("#surveyHamster3").removeClass("now-hamster-type");
    })

// 愛鼠濃度區切換按鈕
    // $("#dataNumber1").click(function(){
    //     $("#dataNumber1").addClass("present-nav-bottom");
    //     $("#dataNumber2").removeClass("present-nav-bottom"); $("#dataNumber3").removeClass("present-nav-bottom"); $("#dataNumber4").removeClass("present-nav-bottom");
    //     $("#surveyData2").addClass("hide"); $("#surveyData3").addClass("hide"); $("#surveyData4").addClass("hide");
    //     $("#surveyData1").removeClass("hide");
    // })
    // $("#dataNumber2").click(function(){
    //     $("#dataNumber2").addClass("present-nav-bottom");
    //     $("#dataNumber1").removeClass("present-nav-bottom"); $("#dataNumber3").removeClass("present-nav-bottom"); $("#dataNumber4").removeClass("present-nav-bottom");
    //     $("#surveyData1").addClass("hide"); $("#surveyData3").addClass("hide"); $("#surveyData4").addClass("hide");
    //     $("#surveyData2").removeClass("hide");
    // })
    // $("#dataNumber3").click(function(){
    //     $("#dataNumber3").addClass("present-nav-bottom");
    //     $("#dataNumber1").removeClass("present-nav-bottom"); $("#dataNumber2").removeClass("present-nav-bottom"); $("#dataNumber4").removeClass("present-nav-bottom");
    //     $("#surveyData1").addClass("hide"); $("#surveyData2").addClass("hide"); $("#surveyData4").addClass("hide");
    //     $("#surveyData3").removeClass("hide");
    // })
    // $("#dataNumber4").click(function(){
    //     $("#dataNumber4").addClass("present-nav-bottom");
    //     $("#dataNumber1").removeClass("present-nav-bottom"); $("#dataNumber2").removeClass("present-nav-bottom"); $("#dataNumber3").removeClass("present-nav-bottom");
    //     $("#surveyData1").addClass("hide"); $("#surveyData2").addClass("hide"); $("#surveyData3").addClass("hide");
    //     $("#surveyData4").removeClass("hide");
    // })


// firebase初始化!!!
    firebase.initializeApp({
        apiKey: "AIzaSyCUIKCitYDEECKgK4TKbFXx35CrVcKpkdA",
        authDomain: "practice20251212.firebaseapp.com",
        projectId: "practice20251212",
        storageBucket: "practice20251212.firebasestorage.app",
        messagingSenderId: "1072287923194",
        appId: "1:1072287923194:web:50dda25b66860ef3cec243"
  });

//   firebase功能的變數區
    let db = firebase.firestore();
    let hamster = db.collection("hamster");
    let surveyform = hamster.doc("surveyForm");

//   可以偷聽firebase然後寫資料進去
    surveyform.onSnapshot(function(doc){
        hamster1 = doc.data().favorite[0];
        hamster2 = doc.data().favorite[1];
        hamster3 = doc.data().favorite[2];
        hamster4 = doc.data().favorite[3];
        tot1 = hamster1 + hamster2 + hamster3 + hamster4;  //相加就可以變成百分比啦，但我不知道怎麼取小數?
        //console.log(Math.floor((hamster1 / tot1) * 100));
        love1[0] = doc.data().MesocricetusAuratus[0];  love1[1] = doc.data().MesocricetusAuratus[1];  love1[2] = doc.data().MesocricetusAuratus[2];  love1[3] = doc.data().MesocricetusAuratus[3];
        love2[0] = doc.data().DjungarianHamster[0];    love2[1] = doc.data().DjungarianHamster[1];    love2[2] = doc.data().DjungarianHamster[2];    love2[3] = doc.data().DjungarianHamster[3];
        love3[0] = doc.data().PhodopusCampbelli[0];    love3[1] = doc.data().PhodopusCampbelli[1];    love3[2] = doc.data().PhodopusCampbelli[2];    love3[3] = doc.data().PhodopusCampbelli[3];
        love4[0] = doc.data().PhodopusRoborovskii[0];  love4[1] = doc.data().PhodopusRoborovskii[1];  love4[2] = doc.data().PhodopusRoborovskii[2];  love4[3] = doc.data().PhodopusRoborovskii[3];
        // console.log(love1[4]);
// 倉鼠人氣區
        $("#dataHamstertot").html(`愛鼠總人數： ${tot1} 人`);
        $("#dataHamster1").html(`${Math.floor((hamster1 / tot1) * 100)} %`);
        $("#dataHamster2").html(`${Math.floor((hamster2 / tot1) * 100)} %`);
        $("#dataHamster3").html(`${Math.floor((hamster3 / tot1) * 100)} %`);
        $("#dataHamster4").html(`${Math.floor((hamster4 / tot1) * 100)} %`);
        $("#dataLine1").css('height', Math.floor((hamster1 / tot1) * 190 + 10)+'px')
        $("#dataLine2").css('height', Math.floor((hamster2 / tot1) * 190 + 10)+'px')
        $("#dataLine3").css('height', Math.floor((hamster3 / tot1) * 190 + 10)+'px')
        $("#dataLine4").css('height', Math.floor((hamster4 / tot1) * 190 + 10)+'px')
// 愛鼠濃度區
        // 黃金鼠
        $("#hamster1Data1").html(`${Math.floor((love1[0] / hamster1) * 100)} %`);
        $("#hamster1Data2").html(`${Math.floor((love1[1] / hamster1) * 100)} %`);
        $("#hamster1Data3").html(`${Math.floor((love1[2] / hamster1) * 100)} %`);
        $("#hamster1Data4").html(`${Math.floor((love1[3] / hamster1) * 100)} %`);
        $("#hamster1Line1").css('height', Math.floor((love1[0] / hamster1) * 190 + 10)+'px')
        $("#hamster1Line2").css('height', Math.floor((love1[1] / hamster1) * 190 + 10)+'px')
        $("#hamster1Line3").css('height', Math.floor((love1[2] / hamster1) * 190 + 10)+'px')
        $("#hamster1Line4").css('height', Math.floor((love1[3] / hamster1) * 190 + 10)+'px')
        // 三線鼠
        $("#hamster2Data1").html(`${Math.floor((love2[0] / hamster2) * 100)} %`);
        $("#hamster2Data2").html(`${Math.floor((love2[1] / hamster2) * 100)} %`);
        $("#hamster2Data3").html(`${Math.floor((love2[2] / hamster2) * 100)} %`);
        $("#hamster2Data4").html(`${Math.floor((love2[3] / hamster2) * 100)} %`);
        $("#hamster2Line1").css('height', Math.floor((love2[0] / hamster2) * 190 + 10)+'px')
        $("#hamster2Line2").css('height', Math.floor((love2[1] / hamster2) * 190 + 10)+'px')
        $("#hamster2Line3").css('height', Math.floor((love2[2] / hamster2) * 190 + 10)+'px')
        $("#hamster2Line4").css('height', Math.floor((love2[3] / hamster2) * 190 + 10)+'px')
        // 1線鼠
        $("#hamster3Data1").html(`${Math.floor((love3[0] / hamster3) * 100)} %`);
        $("#hamster3Data2").html(`${Math.floor((love3[1] / hamster3) * 100)} %`);
        $("#hamster3Data3").html(`${Math.floor((love3[2] / hamster3) * 100)} %`);
        $("#hamster3Data4").html(`${Math.floor((love3[3] / hamster3) * 100)} %`);
        $("#hamster3Line1").css('height', Math.floor((love3[0] / hamster3) * 190 + 10)+'px')
        $("#hamster3Line2").css('height', Math.floor((love3[1] / hamster3) * 190 + 10)+'px')
        $("#hamster3Line3").css('height', Math.floor((love3[2] / hamster3) * 190 + 10)+'px')
        $("#hamster3Line4").css('height', Math.floor((love3[3] / hamster3) * 190 + 10)+'px')
        // 老公公鼠
        $("#hamster4Data1").html(`${Math.floor((love4[0] / hamster4) * 100)} %`);
        $("#hamster4Data2").html(`${Math.floor((love4[1] / hamster4) * 100)} %`);
        $("#hamster4Data3").html(`${Math.floor((love4[2] / hamster4) * 100)} %`);
        $("#hamster4Data4").html(`${Math.floor((love4[3] / hamster4) * 100)} %`);
        $("#hamster4Line1").css('height', Math.floor((love4[0] / hamster4) * 190 + 10)+'px')
        $("#hamster4Line2").css('height', Math.floor((love4[1] / hamster4) * 190 + 10)+'px')
        $("#hamster4Line3").css('height', Math.floor((love4[2] / hamster4) * 190 + 10)+'px')
        $("#hamster4Line4").css('height', Math.floor((love4[3] / hamster4) * 190 + 10)+'px')

    }
  );

// 表單填寫完成
  $("#finishBottom").click(function(){
    if(nowHamster == 1){        //如果選擇黃金鼠
        counter = hamster1 + 1;
        number = $("#surveyNumber").val();
        if(number < 100) { numberrange = [love1[0]+1, love1[1], love1[2], love1[3]]; }
        else if(number < 200 && number >= 100) { numberrange = [love1[0], love1[1]+1, love1[2], love1[3]]; }
        else if(number < 300 && number >= 200) { numberrange = [love1[0], love1[1], love1[2]+1, love1[3]]; }
        else if(number <= 300) { numberrange = [love1[0], love1[1], love1[2], love1[3]+1]; }
        // console.log(numberrange[1]);
        surveyform.update({
            "favorite":  [ counter, hamster2, hamster3, hamster4 ],
            "MesocricetusAuratus": [ numberrange[0], numberrange[1], numberrange[2], numberrange[3] ],
        });
    }
    else if(nowHamster == 2){   //如果選擇三線鼠
        counter = hamster2 + 1;
        number = $("#surveyNumber").val();
        if(number < 100) { numberrange = [love2[0]+1, love2[1], love2[2], love2[3]]; }
        else if(number < 200 && number >= 100) { numberrange = [love2[0], love2[1]+1, love2[2], love2[3]]; }
        else if(number < 300 && number >= 200) { numberrange = [love2[0], love2[1], love2[2]+1, love2[3]]; }
        else if(number <= 300) { numberrange = [love2[0], love2[1], love2[2], love2[3]+1]; }
        // console.log(numberrange[1]);
        surveyform.update({
            "favorite":  [ hamster1, counter, hamster3, hamster4 ],
            "DjungarianHamster": [ numberrange[0], numberrange[1], numberrange[2], numberrange[3] ],
        });
    }
    else if(nowHamster == 3){   //如果選擇1線鼠
        counter = hamster3 + 1;
        number = $("#surveyNumber").val();
        if(number < 100) { numberrange = [love3[0]+1, love3[1], love3[2], love3[3]]; }
        else if(number < 200 && number >= 100) { numberrange = [love3[0], love3[1]+1, love3[2], love3[3]]; }
        else if(number < 300 && number >= 200) { numberrange = [love3[0], love3[1], love3[2]+1, love3[3]]; }
        else if(number <= 300) { numberrange = [love3[0], love3[1], love3[2], love3[3]+1]; }
        // console.log(numberrange[1]);
        surveyform.update({
            "favorite":  [ hamster1, hamster2, counter, hamster4 ],
            "PhodopusCampbelli": [ numberrange[0], numberrange[1], numberrange[2], numberrange[3] ],
        });
    }
    else if(nowHamster == 4){   //如果選擇老公公鼠
        counter = hamster4 + 1;
        number = $("#surveyNumber").val();
        if(number < 100) { numberrange = [love4[0]+1, love4[1], love4[2], love4[3]]; }
        else if(number < 200 && number >= 100) { numberrange = [love4[0], love4[1]+1, love4[2], love4[3]]; }
        else if(number < 300 && number >= 200) { numberrange = [love4[0], love4[1], love4[2]+1, love4[3]]; }
        else if(number <= 300) { numberrange = [love4[0], love4[1], love4[2], love4[3]+1]; }
        // console.log(numberrange[1]);
        surveyform.update({
            "favorite":  [ hamster1, hamster2, hamster3, counter ],
            "PhodopusRoborovskii": [ numberrange[0], numberrange[1], numberrange[2], numberrange[3] ],
        });
    }
  })

});