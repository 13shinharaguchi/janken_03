$(function () {
    $(".login_button").on("click", function () {
        location.href = "/html/m_jyanken.html";

    })

    $(".other_game").on("click", function () {
        $('.login_rigth').hide();
        $('.explanation').show();
    })
});