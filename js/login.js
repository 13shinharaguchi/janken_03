$(function () {
    $(".login_button").on("click", function () {
        location.href = "/html/m_jyanken.html";

    })


    $(".other_game").on("click", function () {
        $('.button').css('color', 'blue');
        //ランダムでwidthを決める
        $('.button').width((Math.random() * 99) + "%",);
        //css.widthの値を取得する
        const shin = $('button').css('width')
        console.log(shin)
    })

    //キッカーの能力値を決めるゲージを止めるアクション
    $(".btn1").click(function () {
        //forで10回まで伸縮をくりかえす
        for (let i = 0; i < 10; i++) {
            $(".box1").animate(
                { width: "1000" },
                { duration: 500 }
            )
                .animate(
                    { width: "0" },
                    { duration: 500 }
                )
        }
    });
    $(".btn2").click(function () {
        // box1クラスのアニメーションを停止する
        $(".box1").stop(true, false);
        let test = $(".box1").width()
        console.log(test);
    });
});