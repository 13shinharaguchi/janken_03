// $(function () {
//     //キッカーの能力値を決めるゲージを止めるアクション
//     $(".btn1").click(function () {
//         //forで10回まで伸縮をくりかえす
//         for (let i = 0; i < 10; i++) {
//             $(".box1").animate(
//                 { width: "1000" },
//                 { duration: 500 }
//             )
//                 .animate(
//                     { width: "0" },
//                     { duration: 500 }
//                 )
//         }
//     });
//     $(".btn2").click(function () {
//         // box1クラスのアニメーションを停止する
//         $(".box1").stop(true, false);
//         let test = $(".box1").width()
//         console.log(test);
//     });
// });

// let count = 10
// count = Math.floor(Math.random() * 10)
// $(function () {
//     $('#btnStart').on('click', function () {
//         //5秒前からカウントスタート
//         $('#countdown').text(count);
//         cnDown = setInterval(function () { //1秒おきにカウントマイナス
//             count--;
//             if (count <= 0) {//0になったら停止する
//                 clearInterval(cnDown);
//             }
//             $('#countdown').text(count);
//         }, 1000);
//     });
// });
let cc = 0
let seconds = 5

$(".btn1").click(function () {
    //forで10回まで伸縮をくりかえす
    for (let i = 0; i < 10; i++) {
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
    test = Math.floor($(".box1").width() / 100)
    
    //モーダルを表示する
    $('.modal').css('display', 'block');
});

$('#ccbtn').on('click', function () {
    //クリック回数を１増加させる
    cc = cc + 1
    $('#countup').text(cc)
    // if (cc === 20) {
    //     alert("成功")
    // } else {

    // }
})


$('#btnStart').on('click', function () {
    console.log(seconds)
    //モーダルの表示
    $('.modal').css('display', 'block');

    //カウントダウン表示
    $('#countdown').text(seconds);

    //カウントダウンボタンを隠す
    $('#btnStart').hide();

    //1秒おきにカウントをマイナスにする
    cnDown = setInterval(function () {
        seconds--;
        //0になったら停止する
        if (seconds <= 0) {
            clearInterval(cnDown);
            //クリックボタンを隠す
            $('#ccbtn').hide();
            //モーダルを5秒後に隠す
            console.log("能力値確認", test)
            console.log("能力値確認",test * cc)
            setTimeout(function () {
                $('.modal').css('display', 'none');
            }, 5000);
        }
        $('#countdown').text(seconds);
        //１秒ごとに減らす指示
    }, 1000);
});


