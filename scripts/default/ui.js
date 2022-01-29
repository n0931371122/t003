'use strict';
var windowW,windowH,mobileMode,headerH;
$(function (){
    $(window).resize(function(){
        resize();
    }).trigger('resize');
    // windowW=$(window).innerWidth();
    // mobileMode=windowW<992?true:false;
    $(".jqimgFill").imgLiquid();
    /* ==========================================================================
		[layout]
    ==========================================================================*/
    // $("header").each(function () {
    //     $("header .menu-item").click(function(){
    //         $(this).find(".submenu").slideToggle();
    //     });
    //     $(".menu-toggle").click(function () {
    //         $("html").toggleClass("menuOpen");
    //     });
    // });

    // $(window).scroll(function () {  
    //     $(window).scrollTop() > 400?$(".goTop").addClass("show"): $(".goTop").removeClass("show");
    // });
        $("header .menu-section .menu a").on("mouseenter",function(){
            $("header .menu-section .number-block").addClass("active").find("div").css("transform","translateY("+$(this).position().top+"px)")
            $("header .menu-section .number-block .now").text($(this).parent().index() + 1);
        });
        $("header .menu-section .menu a").on("mouseleave",function(){
            $("header .menu-section .number-block").removeClass("active").find("div").css("transform","translateY(0px)")
            $("header .menu-section .number-block .now").text(1);
        });
        $(".mouse").click(function(){
            // $("html,body").animate({
            //     scrollTop:windowH
            // });
            $(window).scrollTop(windowH - 80);
        });
        $(window).scroll(function(){
            $(window).scrollTop()==0?$("html").removeClass("scrollMode"):$("html").addClass("scrollMode");
        });   
     /* ==========================================================================
		[page]
    ==========================================================================*/
    //index
         $("#index").each(function(){

        });
    /* ==========================================================================
		[common]
    ==========================================================================*/
    $(".scrollbarY").mCustomScrollbar({
        axis: "y",
    });
    // $('.selectpicker').selectpicker();
    // imgFill();
    // numberElementEvent();
    // windowW<1200?$("[data-aos-delay]").removeAttr("data-aos-delay"):"";
    // aosInit();
    /* ==========================================================================
		[resize]
    ==========================================================================*/

    function resize(){
        windowW=$(window).innerWidth();
        windowH=$(window).height();
        headerH=$("header").height();
        
    }

})
function aosInit(){
    AOS.init({
        duration: 500,
        offset: 10,
        mirror: true,
    });
}


