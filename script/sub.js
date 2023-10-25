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
        //tab 포인트 활성화
        $(".point1").removeClass("d-none")
        $(".point2").addClass("d-none")
        $(".point3").addClass("d-none")
        $(".point4").addClass("d-none")
        $(".point5").addClass("d-none")
        $(".point6").addClass("d-none")
        $(".point7").addClass("d-none")
        
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
        $(".c-title li:nth-child(1)").css("background", "none")
        $(".c-title li:nth-child(2)").css({
            background: "rgb(45, 86, 199)",
            color: "white"
        })
        $(".point3").css("background", "white")
        $(".point4").css("background", "white")
        $(".point5").css("background", "white")
        $(".point6").css("background", "white")
        $(".point7").css("background", "white")
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
        //tab에 포인트 활성화
        $(".point1").addClass("d-none")
        $(".point2").addClass("d-none")
        $(".point3").removeClass("d-none")
        $(".point4").addClass("d-none")
        $(".point5").addClass("d-none")
        $(".point6").addClass("d-none")
        $(".point7").addClass("d-none")
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
        //tab에 포인트 활성화
        $(".point1").addClass("d-none")
        $(".point2").addClass("d-none")
        $(".point3").addClass("d-none")
        $(".point4").removeClass("d-none")
        $(".point5").addClass("d-none")
        $(".point6").addClass("d-none")
        $(".point7").addClass("d-none")
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
        //tab에 포인트 활성화
        $(".point1").addClass("d-none")
        $(".point2").addClass("d-none")
        $(".point3").addClass("d-none")
        $(".point4").addClass("d-none")
        $(".point5").removeClass("d-none")
        $(".point6").addClass("d-none")
        $(".point7").addClass("d-none")
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
        //tab에 포인트 활성화
        $(".point1").addClass("d-none")
        $(".point2").addClass("d-none")
        $(".point3").addClass("d-none")
        $(".point4").addClass("d-none")
        $(".point5").addClass("d-none")
        $(".point6").removeClass("d-none")
        $(".point7").addClass("d-none")
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
        //tab에 포인트 활성화
        $(".point1").addClass("d-none")
        $(".point2").addClass("d-none")
        $(".point3").addClass("d-none")
        $(".point4").addClass("d-none")
        $(".point5").addClass("d-none")
        $(".point6").addClass("d-none")
        $(".point7").removeClass("d-none")
    }))
});
