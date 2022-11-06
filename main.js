$(function () {
    let gk_early_min_element_min = 0
    let gk_early_min_element_max = 0
    let gk_early_max_element_min = 0
    let gk_early_max_element_max = 0
    let isPlaying = false;
    const kicker_min = []
    const kicker_max = []



    //キャラ初期値の設定の要素
    $(".elected_1").on("click", function () {
        high_food1 = 10
        cheap_food1 = 0
        high_food2 = 20
        cheap_food2 = 10
        high_food3 = 10
        cheap_food3 = 0
        high_food4 = 20
        cheap_food4 = 10
        gk_power(high_food1, cheap_food1, high_food2, cheap_food2,
            high_food3, cheap_food3, high_food4, cheap_food4)
        audio()
    })

    $(".elected_2").on("click", function () {
        high_food1 = 30
        cheap_food1 = 20
        high_food2 = 40
        cheap_food2 = 30
        high_food3 = 30
        cheap_food3 = 20
        high_food4 = 40
        cheap_food4 = 30
        gk_power(high_food1, cheap_food1, high_food2, cheap_food2,
            high_food3, cheap_food3, high_food4, cheap_food4)
        audio2()
    })

    $(".elected_3").on("click", function () {
        high_food1 = 50
        cheap_food1 = 40
        high_food2 = 60
        cheap_food2 = 50
        high_food3 = 50
        cheap_food3 = 40
        high_food4 = 60
        cheap_food4 = 50
        gk_power(high_food1, cheap_food1, high_food2, cheap_food2,
            high_food3, cheap_food3, high_food4, cheap_food4)
        audio3()
    })

    function gk_power(high_food1, cheap_food1, high_food2, cheap_food2, high_food3, cheap_food3, high_food4, cheap_food4) {
        localStorage.clear();
        gk_early_min_element_min = Math.floor(Math.random() * (high_food1 - cheap_food1 + 1)) + cheap_food1
        gk_early_min_element_max = Math.floor(Math.random() * (high_food2 - cheap_food2 + 1)) + cheap_food2
        gk_early_max_element_min = Math.floor(Math.random() * (high_food3 - cheap_food3 + 1)) + cheap_food3
        gk_early_max_element_max = Math.floor(Math.random() * (high_food4 - cheap_food4 + 1)) + cheap_food4
        console.log("minのmin確認", gk_early_min_element_min)
        console.log("minのmax確認", gk_early_min_element_max)
        console.log("maxのmin確認", gk_early_max_element_min)
        console.log("maxのmax確認", gk_early_max_element_max)
    }

    $(".kicker_1").on("click", function () {
        kicker_min.splice(0)
        kicker_max.splice(0)
        kicker_min.push(5,10,15,20,)
        kicker_max.push(30,35,40)
        console.log("kickerのmin確認", kicker_min)
        console.log("kickerのmax確認", kicker_max)
    })

    $(".kicker_2").on("click", function () {
        kicker_min.splice(0)
        kicker_max.splice(0)
        kicker_min.push(5,10,20,40)
        kicker_max.push(40,50,70)
    })

    $(".kicker_3").on("click", function () {
        kicker_min.splice(0)
        kicker_max.splice(0)
        kicker_min.push(30,40)
        kicker_max.push(20,80,90,100)
    })

    $("#sp").on("click", function () {
        //gkの最小の要素を反映する
        localStorage.setItem('sp_reflect', gk_early_min_element_min);
    })


    $(".decision_button").on("click", function () {
        let sp_power = Number(localStorage.getItem('sp_reflect'));
        console.log("sppower", sp_power);
        //GKの能力値を決める要素
        const gk_min = Math.floor(Math.random() * (gk_early_min_element_max - gk_early_min_element_min + 1)) + gk_early_min_element_min
        const gk_max = Math.floor(Math.random() * (gk_early_max_element_max - gk_early_max_element_min + 1)) + gk_early_max_element_min
        console.log("GKの最低値", gk_min)
        console.log("GKの最高値", gk_max)

        //GK能力値を出す
        const gk_ability = Math.floor(Math.random() * (gk_max - gk_min + 1)) + gk_min
        console.log("gkの能力値", gk_ability)

        /////////////////////////////////////////////////////////////////////

        //キッカーの能力値を決める要素
        const ki_min = kicker_min[Math.floor(Math.random() * kicker_min.length)]
        const ki_max = kicker_max[Math.floor(Math.random() * kicker_max.length)]
        console.log("キッカーの最低値配列", kicker_min)
        console.log("キッカーの最高値配列", kicker_max)
        console.log("キッカーの最低値", ki_min)
        console.log("キッカーの最高値", ki_max)

        //キッカー能力値を出す

        const ki_ability = Math.floor(Math.random() * (ki_max - ki_min + 1)) + ki_min

        let ki_ability2 = ki_ability + sp_power

        console.log("kiの能力値1", ki_ability)
        console.log("kiの能力値2", sp_power)
        console.log("kiの能力値", ki_ability + sp_power)

        //勝負をする関数へ
        fight(gk_ability, ki_ability2)

    })


    function audio() {
        if (isPlaying) {
            $("#audio").get(0).pause();
            $("#audio2").get(0).pause();
            $("#audio3").get(0).pause();
        } else {
            $("#audio").get(0).play();
        }

        $("#audio").get(0).onplaying = function () {
            isPlaying = true;
        };
        $("#audio").get(0).onpause = function () {
            isPlaying = false;
        };
    }

    function audio2() {
        if (isPlaying) {
            $("#audio").get(0).pause();
            $("#audio2").get(0).pause();
            $("#audio3").get(0).pause();
        } else {
            $("#audio2").get(0).play();
        }

        $("#audio2").get(0).onplaying = function () {
            isPlaying = true;
        };
        $("#audio2").get(0).onpause = function () {
            isPlaying = false;
        };
    }

    function audio3() {
        if (isPlaying) {
            $("#audio").get(0).pause();
            $("#audio2").get(0).pause();
            $("#audio3").get(0).pause();
        } else {
            $("#audio3").get(0).play();
        }

        $("#audio3").get(0).onplaying = function () {
            isPlaying = true;
        };
        $("#audio3").get(0).onpause = function () {
            isPlaying = false;
        };
    }

    //戦いを判断する関数
    function fight(gk_ability, ki_ability2) {
        $('#gk_ability').text(gk_ability);
        $('#ki_ability').text(ki_ability2);

        if (ki_ability2 > gk_ability) {
            if (ki_ability2 - gk_ability >= 45) {
                $('#victory_or_defeat').text("大きすぎ負け");
            } else if (ki_ability2 - gk_ability === 1) {
                $('#victory_or_defeat').text("強制負け");
            } else {
                if (ki_ability2 - gk_ability === 5) {
                    $('#victory_or_defeat').text("負け負け");
                }
                $('#victory_or_defeat').text("ゴール");
            }

        } else if (ki_ability2 === gk_ability) {
            $('#victory_or_defeat').text("再戦だー");
            alert("ここをモーダルにしたい")
            $(".VS_aera").load("draw.html");
           

        } else {
            if (ki_ability2 / 2 === gk_early_min_element_min) {
                $('#victory_or_defeat').text("神の手炸裂");
            } else if (gk_ability === 77) {
                $('#victory_or_defeat').text("GK消滅");
            } else {
                $('#victory_or_defeat').text("負け");
            }
        }
    }


    $(".js-sub-img img").on("click", function () {
        img = $(this).attr("src");
        $(".js-main-img img").fadeOut(100, function () {
            $(".js-main-img img")
                .attr("src", img)
                .on("load", function () {
                    $(this).fadeIn(100);
                });
        });
    });

    $(".shin img").on("click", function () {
        img = $(this).attr("src");
        $(".js-shin-img img").fadeOut(100, function () {
            $(".js-shin-img img")
                .attr("src", img)
                .on("load", function () {
                    $(this).fadeIn(100);
                });
        });
    });

});