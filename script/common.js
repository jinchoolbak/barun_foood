"use strict";

$(() => {
    //search 
    $(".search input").on("click", (() => {
        $(".search input").addClass("bg-blue");
    }));

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

    //mobile menu
    $(".login a:nth-child(3)").on("click", (() => {
        $(".nav").css("display", "block");
    }))
    $(".close").on("click", (() => {
        $(".nav").css("display", "none");
    }))
})