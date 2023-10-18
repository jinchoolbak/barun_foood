"use strict";

$(() => {
    //carousel
    $(".carousel > img:gt(0)").fadeOut(); //투명도를 0으로 하고 display:none을 추가

    function slide() {
        $(".carousel > img:first")
            .fadeOut()
            .next()
            .fadeIn()
            .end()
            .appendTo(".carousel")
    }
    
    let intervalID = setInterval(slide, 3000);
})