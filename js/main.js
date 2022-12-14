$(function () {
    let gk_early_min_element_min = 0
    let gk_early_min_element_max = 0
    let gk_early_max_element_min = 0
    let gk_early_max_element_max = 0
    let isPlaying = false;
    let ki_max = 0
    let ki_min = 0
    let kicker_width_ability = 0
    let seconds = 5
    let clickcount = 0
    //画像を配列に格納する
    const imgs = ['songoku.jpeg','sonmasa.jpeg', 'sonfunn.jpeg']
    let index = 0
    let duration = 500
    $('.power_wrapper').hide();

    $('.click_button_hits').on('click', function () {
        //クリック回数を１増加させる
        clickcount = clickcount + 1
        $('#clickcount').text(clickcount)

        //クリック回数で進化する
        if (clickcount >= 15) {
            $('.modal_img').attr('src', '/img/' + imgs[1]);
            if (clickcount >= 35) {
                $('.modal_img').attr('src', '/img/' + imgs[2]);
            }
        }
    })


    $('.btnStart').on('click', function () {
        console.log(seconds)
        //モーダルの表示
        $('.modal').css('display', 'block');

        //カウントダウン表示
        $('#countdown').text(seconds);

        //カウントダウンボタンを隠す
        $('.btnStart').hide();

        //クリックボタンを表示する
        $('.btn-emergency').show();


        setTimeout(function () {
            //1秒おきにカウントをマイナスにする
            cnDown = setInterval(function () {
                seconds--;
                //0になったら停止する
                if (seconds <= 0) {
                    clearInterval(cnDown);
                    //クリックボタンを隠す
                    $('.click_button_hits').hide();

                    //kickerの能力値を決める
                    ki_max = kicker_width_ability * clickcount
                    ki_min = ki_max - 50
                    console.log("ki_max確認", ki_max)
                    console.log("ki_min確認", ki_min)

                    //モーダルを～秒に消す設定をする
                    setTimeout(function () {
                        $('.modal').css('display', 'none');
                    }, 1000);
                }
                $('#countdown').text(seconds);
                //１秒ごとに減らす指示
            }, 1000);

            //startをおされてから1秒後に始まるように設定
        }, 1000);
    });

    //キャラ初期値の設定の要素
    //画像クリック時に
    $(".elected_1").on("click", function () {
        high_food1 = 10
        cheap_food1 = 0
        high_food2 = 15
        cheap_food2 = 10
        high_food3 = 10
        cheap_food3 = 0
        high_food4 = 30
        cheap_food4 = 10
        gk_power(high_food1, cheap_food1, high_food2, cheap_food2,
            high_food3, cheap_food3, high_food4, cheap_food4)
        audio()
        duration = 500
    })

    $(".elected_2").on("click", function () {
        high_food1 = 150
        cheap_food1 = 90
        high_food2 = 200
        cheap_food2 = 80
        high_food3 = 250
        cheap_food3 = 100
        high_food4 = 300
        cheap_food4 = 200
        gk_power(high_food1, cheap_food1, high_food2, cheap_food2,
            high_food3, cheap_food3, high_food4, cheap_food4)
        audio2()
        duration = 300
    })

    $(".elected_3").on("click", function () {
        high_food1 = 300
        cheap_food1 = 200
        high_food2 = 350
        cheap_food2 = 250
        high_food3 = 290
        cheap_food3 = 230
        high_food4 = 550
        cheap_food4 = 400
        gk_power(high_food1, cheap_food1, high_food2, cheap_food2,
            high_food3, cheap_food3, high_food4, cheap_food4)
        audio3()
        duration = 100
    })

    $(".gauge_start").click(function () {
        //forで20回まで伸縮をくりかえす
        for (let i = 0; i < 20; i++) {
            $(".power").animate(
                //幅を決める、伸縮の時間を決める
                { width: 1000 },
                { duration: duration },
            )
                .animate(
                    //幅を決める、伸縮の時間を決める
                    { width: 0 },
                    { duration: duration }
            )
            console.log(duration)
        }
        
    });

    $(".gauge_stop").click(function () {
        // box1クラスのアニメーションを停止する
        $(".power").stop(true, false);

        //横幅のwidhtを取得し、変数testに入れる
        //widthを100で割る
        kicker_width_ability = Math.floor($(".power").width() / 100)

        //モーダルを表示する
        $('.modal').css('display', 'block');

        //モーダル進化初期画像を表示する
        $('.modal_img').attr('src', '/img/' + imgs[index]);

        //ストップボタンを表示
        $('.gauge_stop').show();
        $('.decision_button').show();
    });


    function gk_power(high_food1, cheap_food1, high_food2, cheap_food2, high_food3, cheap_food3, high_food4, cheap_food4) {
        localStorage.clear();
        gk_early_min_element_min = Math.floor(Math.random() * (high_food1 - cheap_food1 + 1)) + cheap_food1
        gk_early_min_element_max = Math.floor(Math.random() * (high_food2 - cheap_food2 + 1)) + cheap_food2
        gk_early_max_element_min = Math.floor(Math.random() * (high_food3 - cheap_food3 + 1)) + cheap_food3
        gk_early_max_element_max = Math.floor(Math.random() * (high_food4 - cheap_food4 + 1)) + cheap_food4
    }


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

        //キッカー能力値を出す
        const ki_ability = Math.floor(Math.random() * (ki_max - ki_min + 1)) + ki_min
        let ki_ability2 = ki_ability + sp_power

        //能力値確認
        console.log("kicker能力値", ki_ability)
        console.log("spの能力値", sp_power)
        console.log("kickerのsp後能力値", ki_ability + sp_power)

        //勝負をする関数へ
        fight(gk_ability, ki_ability2)

        $('.modal2').css('display', 'block');
        
        //13秒でリロード
        setTimeout("location.reload()", 10000);

    })

    //GK選択時に音楽を流す
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
            if (ki_ability2 - gk_ability >= 150) {
                $('.lose_video').css('display', 'block');
                $('.lose_video').get(0).play();
                $('#victory_or_defeat').text("力みすぎ外した");
            } else if (ki_ability2 - gk_ability === 1) {
                $('.lose_video').css('display', 'block');
                $('.lose_video').get(0).play();
                $('#victory_or_defeat').text("緊張で外した");
            } else {
                if (ki_ability2 - gk_ability === 5) {
                    $('.lose_video').css('display', 'block');
                    $('.lose_video').get(0).play();
                    $('#victory_or_defeat').text("負け負け");
                }
                $('.win_video').css('display', 'block');
                $('.win_video').get(0).play();
                $('#victory_or_defeat').text("ゴール");
            }

        } else if (ki_ability2 === gk_ability) {
            $('#victory_or_defeat').text("再戦だー");
            $(".VS_aera").load("draw.html");


        } else {
            if (ki_ability2 / 2 === gk_early_min_element_min) {
                $('.win_video').css('display', 'block');
                $('.win_video').get(0).play();
                $('#victory_or_defeat').text("神の手炸裂");
            } else if (gk_ability === 77) {
                $('.win_video').css('display', 'block');
                $('.win_video').get(0).play();
                $('#victory_or_defeat').text("GK消滅");
            } else {
                $('.lose_video').css('display', 'block');
                $('.lose_video').get(0).play();
                $('#victory_or_defeat').text("外したー");
            }
        }
    }

    //選択した画像を中央に表示する
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

    $(".back_to_top").on("click", function () {
        location.href = "/html/index.html";
    })

    $(".kicker").on("click", function () {
        $('.display_none').show();
        $('.power_wrapper').show();
    })
});