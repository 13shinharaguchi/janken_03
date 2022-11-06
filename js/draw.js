 
$("#button1").click(function () {
    const competition = $("#text1").val(); // テキストボックスのvalue値を取得
    const competition_v = Number(competition)
    const competition_random = Math.floor(Math.random() * (10 - 1 + 1)) + 1

    if (competition_v === competition_random) {
        $('#hantei').text('ゴール')
    } else {
        $('#hantei').text('外したー、負け')
    }

    console.log(competition_random)
});