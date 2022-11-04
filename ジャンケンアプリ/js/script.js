const gu = document.querySelector("#gu_btn");
console.log(gu.id);
console.log(gu.innerHTML)
$("#hand").slideDown(1000);
$("#gu_btn").on("click", function () {
    // 乱数
    const r = Math.ceil(Math.random() * 3);
    // if分岐処理
    let view = "";
    let nice = "";
    if (r == 1) {
        view = '<img src="img/you_win.jpeg">' ;
    } else if (r == 2) {
        view = '<img src="img/honda_aiko.png">';
    } else if (r == 3) {
        view = '<img src="img/you_lose.jpeg">';
    }
    $("#judgment").html(view);
    $("#judgment").fadeOut(0);
    $("#judgment").fadeIn(1000);
    // $("#judgement").fadeIN("slow");
    // $("#judgement").fadeOut(view);
    

    if (r == 1) {
        nice = '<img src="img/cho.jpeg">';
    }else if (r == 2) {
        nice = '<img src="img/gu.jpeg">';
    }else if (r == 3) {
        nice = '<img src="img/pa.jpeg">';
    }
    $("#pc_hands").html(nice);
    $("#pc_hands").fadeOut(0);
    $("#pc_hands").fadeIn(1000);
    // $("#pc_hands").fadeIN(nice);
    // $("#pc_hands").fadeOut(nice);
    
})
// var abc = '<a href="#">リンク</a>';
// $("#pc_hands").html(abc);

$("#cho_btn").on("click", function () {
    // 乱数
    const r = Math.ceil(Math.random() * 3);
    // if分岐処理
    let view = "";
    if (r == 1) {
        view = '<img src="img/you_win.jpeg">';
    }else if (r == 2) {
        view = '<img src="img/honda_aiko.png">';
    }else if (r == 3) {
        view = '<img src="img/you_lose.jpeg">';
    }
    $("#judgment").html(view);
    $("#judgment").fadeOut(0);
    $("#judgment").fadeIn(1000);

    if (r == 1) {
        nice = '<img src="img/pa.jpeg">';
    }else if (r == 2) {
        nice = '<img src="img/cho.jpeg">';
    }else if (r == 3) {
        nice = '<img src="img/gu.jpeg">';
    }
    $("#pc_hands").html(nice);
    $("#pc_hands").fadeOut(0);
    $("#pc_hands").fadeIn(1000);
    
})
$("#par_btn").on("click", function () {
    // 乱数
    const r = Math.ceil(Math.random() * 3);
    // if分岐処理
    let view = "";
    if (r == 1) {
        view = '<img src="img/you_win.jpeg">';
    }else if (r == 2) {
        view = '<img src="img/honda_aiko.png">';
    }else if (r == 3) {
        view = '<img src="img/you_lose.jpeg">';
    }
    $("#judgment").html(view);
    $("#judgment").fadeOut(0);
    $("#judgment").fadeIn(1000);

    if (r == 1) {
        nice = '<img src="img/gu.jpeg">';
    }else if (r == 2) {
        nice = '<img src="img/pa.jpeg">';
    }else if (r == 3) {
        nice = '<img src="img/cho.jpeg">';
    }
    $("#pc_hands").html(nice);
    $("#pc_hands").fadeOut(0);
    $("#pc_hands").fadeIn(1000);
    
})
$("#save").on("click", function () {
    const v = $("#text_area").val();
    localStorage.setItem("memo", v);
    alert("保存しました");
});
$("#clear").on("click", function () {
    localStorage.removeItem("memo");
    alert("削除しました");
    $("#text_area").val();
});
// function audio() {
//     document.getElementById('btn1').currentTime = 0; //連続クリックに対応
//     document.getElementById('btn1').play(); //クリックしたら音を再生
// const music = new Audio('audio/btn1.mp3');
// music.play();
// music.pause();






    




