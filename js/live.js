// toggle 
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
// close
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
// popup 
$(function () {
    $(".btn").on("click", function () {
        $("#popup, .bg").fadeIn();
    });
    $(".close").on("click", function () {
        $("#popup, .bg").fadeOut();
    });

    // 배경 클릭시 팝업과 배경 사라짐
    $("#popup, .bg").on("click", function () {
        $("#popup, .bg").fadeOut(); //사라짐 
    });
});