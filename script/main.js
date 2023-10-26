document.addEventListener('DOMContentLoaded', function() {
    // html 이 다 로딩된 후에 레이어 팝업을띄운다.
    $(".popup").css("display", "block");

});
    
// // 닫기 버튼 클릭했을때
$('.p-close').on('click', function() {
    $(".popup").css("display", "none");
});