let ki_max = 0
let ki_min = 0
let kicker_width_ability = 0
let seconds = 5
let clickcount = 0

$(".btn1").click(function () {
    //forで20回まで伸縮をくりかえす
    for (let i = 0; i < 20; i++) {
        $(".box1").animate(
            //幅を決める、伸縮の時間を決める
            { width: "1000" },
            { duration: 200 },
        )
            .animate(
                //幅を決める、伸縮の時間を決める
                { width: "0" },
                { duration: 200 }
            )
    }
});

$(".btn2").click(function () {
    // box1クラスのアニメーションを停止する
    $(".box1").stop(true, false);

    //横幅のwidhtを取得し、変数testに入れる
    //widthを100で割る
    kicker_width_ability = Math.floor($(".box1").width() / 100)

    //モーダルを表示する
    $('.modal').css('display', 'block');
});

$('#click_button_hits').on('click', function () {
    //クリック回数を１増加させる
    clickcount = clickcount + 1
    $('#clickcount').text(clickcount)
})


$('#btnStart').on('click', function () {
    console.log(seconds)
    //モーダルの表示
    $('.modal').css('display', 'block');

    //カウントダウン表示
    $('#countdown').text(seconds);

    //カウントダウンボタンを隠す
    $('#btnStart').hide();

    //クリックボタンを表示する
    $('#click_button_hits').show();


    setTimeout(function () {
        //1秒おきにカウントをマイナスにする
        cnDown = setInterval(function () {
            seconds--;
            //0になったら停止する
            if (seconds <= 0) {
                clearInterval(cnDown);
                //クリックボタンを隠す
                $('#click_button_hits').hide();

                //kickerの能力値を決める
                ki_max = kicker_width_ability * clickcount
                ki_min = ki_max - 50
                console.log("ki_max確認", ki_max)
                console.log("ki_min確認", ki_min)

                //モーダルを～秒に消す設定をする
                setTimeout(function () {
                    $('.modal').css('display', 'none');
                }, 3000);
            }
            $('#countdown').text(seconds);
            //１秒ごとに減らす指示
        }, 1000);

        //startをおされてから3秒後に始まるように設定
    }, 1000);

});

