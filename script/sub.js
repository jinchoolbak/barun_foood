$(() => {

    //tabs
    $(".c-title li:nth-child(1)").on("click", (() => {
        //tab 활성화
        $(".c-body1").css("display", "inline")
        $(".c-body2").css("display", "none")
        $(".c-body3").css("display", "none")
        $(".c-body4").css("display", "none")
        $(".c-body5").css("display", "none")
        $(".c-body6").css("display", "none")
        $(".c-body7").css("display", "none")
        //tab title 클릭 시 백그라운드 적용
        $(".c-title li:nth-child(1)").addClass("bg-blue")
        $(".c-title li:nth-child(2)").removeClass("bg-blue")
        $(".c-title li:nth-child(3)").removeClass("bg-blue")
        $(".c-title li:nth-child(4)").removeClass("bg-blue")
        $(".c-title li:nth-child(5)").removeClass("bg-blue")
        $(".c-title li:nth-child(6)").removeClass("bg-blue")
        $(".c-title li:nth-child(7)").removeClass("bg-blue")
        
    }))

    $(".c-title li:nth-child(2)").on("click", (() => {
        //tab 활성화
        $(".c-body1").css("display", "none")
        $(".c-body2").css("display", "inline")
        $(".c-body3").css("display", "none")
        $(".c-body4").css("display", "none")
        $(".c-body5").css("display", "none")
        $(".c-body6").css("display", "none")
        $(".c-body7").css("display", "none")
        //tab title 클릭 시 백그라운드 적용
        $(".c-title li:nth-child(1)").removeClass("bg-blue")
        $(".c-title li:nth-child(2)").addClass("bg-blue")
        $(".c-title li:nth-child(3)").removeClass("bg-blue")
        $(".c-title li:nth-child(4)").removeClass("bg-blue")
        $(".c-title li:nth-child(5)").removeClass("bg-blue")
        $(".c-title li:nth-child(6)").removeClass("bg-blue")
        $(".c-title li:nth-child(7)").removeClass("bg-blue")
    }))

    $(".c-title li:nth-child(3)").on("click", (() => {
        //tab 활성화
        $(".c-body1").css("display", "none")
        $(".c-body2").css("display", "none")
        $(".c-body3").css("display", "inline")
        $(".c-body4").css("display", "none")
        $(".c-body5").css("display", "none")
        $(".c-body6").css("display", "none")
        $(".c-body7").css("display", "none")
        //tab title 클릭 시 백그라운드 적용
        $(".c-title li:nth-child(1)").removeClass("bg-blue")
        $(".c-title li:nth-child(2)").removeClass("bg-blue")
        $(".c-title li:nth-child(3)").addClass("bg-blue")
        $(".c-title li:nth-child(4)").removeClass("bg-blue")
        $(".c-title li:nth-child(5)").removeClass("bg-blue")
        $(".c-title li:nth-child(6)").removeClass("bg-blue")
        $(".c-title li:nth-child(7)").removeClass("bg-blue")
    }))

    $(".c-title li:nth-child(4)").on("click", (() => {
        //tab 활성화
        $(".c-body1").css("display", "none")
        $(".c-body2").css("display", "none")
        $(".c-body3").css("display", "none")
        $(".c-body4").css("display", "inline")
        $(".c-body5").css("display", "none")
        $(".c-body6").css("display", "none")
        $(".c-body7").css("display", "none")
       //tab title 클릭 시 백그라운드 적용
       $(".c-title li:nth-child(1)").removeClass("bg-blue")
       $(".c-title li:nth-child(2)").removeClass("bg-blue")
       $(".c-title li:nth-child(3)").removeClass("bg-blue")
       $(".c-title li:nth-child(4)").addClass("bg-blue")
       $(".c-title li:nth-child(5)").removeClass("bg-blue")
       $(".c-title li:nth-child(6)").removeClass("bg-blue")
       $(".c-title li:nth-child(7)").removeClass("bg-blue")
    }))
    $(".c-title li:nth-child(5)").on("click", (() => {
        //tab 활성화
        $(".c-body1").css("display", "none")
        $(".c-body2").css("display", "none")
        $(".c-body3").css("display", "none")
        $(".c-body4").css("display", "none")
        $(".c-body5").css("display", "inline")
        $(".c-body6").css("display", "none")
        $(".c-body7").css("display", "none")
        //tab title 클릭 시 백그라운드 적용
        $(".c-title li:nth-child(1)").removeClass("bg-blue")
        $(".c-title li:nth-child(2)").removeClass("bg-blue")
        $(".c-title li:nth-child(3)").removeClass("bg-blue")
        $(".c-title li:nth-child(4)").removeClass("bg-blue")
        $(".c-title li:nth-child(5)").addClass("bg-blue")
        $(".c-title li:nth-child(6)").removeClass("bg-blue")
        $(".c-title li:nth-child(7)").removeClass("bg-blue")
    }))
    $(".c-title li:nth-child(6)").on("click", (() => {
        //tab 활성화
        $(".c-body1").css("display", "none")
        $(".c-body2").css("display", "none")
        $(".c-body3").css("display", "none")
        $(".c-body4").css("display", "none")
        $(".c-body5").css("display", "none")
        $(".c-body6").css("display", "inline")
        $(".c-body7").css("display", "none")
        //tab title 클릭 시 백그라운드 적용
        $(".c-title li:nth-child(1)").removeClass("bg-blue")
        $(".c-title li:nth-child(2)").removeClass("bg-blue")
        $(".c-title li:nth-child(3)").removeClass("bg-blue")
        $(".c-title li:nth-child(4)").removeClass("bg-blue")
        $(".c-title li:nth-child(5)").removeClass("bg-blue")
        $(".c-title li:nth-child(6)").addClass("bg-blue")
        $(".c-title li:nth-child(7)").removeClass("bg-blue")
    }))
    $(".c-title li:nth-child(7)").on("click", (() => {
        //tab 활성화
        $(".c-body1").css("display", "none")
        $(".c-body2").css("display", "none")
        $(".c-body3").css("display", "none")
        $(".c-body4").css("display", "none")
        $(".c-body5").css("display", "none")
        $(".c-body6").css("display", "none")
        $(".c-body7").css("display", "inline")
        //tab title 클릭 시 백그라운드 적용
        $(".c-title li:nth-child(1)").removeClass("bg-blue")
        $(".c-title li:nth-child(2)").removeClass("bg-blue")
        $(".c-title li:nth-child(3)").removeClass("bg-blue")
        $(".c-title li:nth-child(4)").removeClass("bg-blue")
        $(".c-title li:nth-child(5)").removeClass("bg-blue")
        $(".c-title li:nth-child(6)").removeClass("bg-blue")
        $(".c-title li:nth-child(7)").addClass("bg-blue")
    }))
});
