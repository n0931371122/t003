'use strict';
var windowW,windowH,mobileMode;
$(function (){
    // windowW=$(window).innerWidth();
    // mobileMode=windowW<992?true:false;
    // $(".jqimgFill").imgLiquid();
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
    // $(".goTop").on("click", function () {
    //     $("html, body").scrollTop(0);
    // });
    // $(window).scroll(function () {  
    //     $(window).scrollTop() > 400?$(".goTop").addClass("show"): $(".goTop").removeClass("show");
    // });

    /* ==========================================================================
		[page]
    ==========================================================================*/
    //index
         $("#index").each(function(){
        
            $(".enter").click(function(){
                $("#index").addClass("menuMode");
            });

            let startObj={
                xPercent: 100,
                autoAlpha:0,
            } 
            let finalObj={
                duration: 1,
                ease: Power2.easeOut,
                xPercent: 0,
                autoAlpha:1,
            }
            function init() {
                setTimeout(function(){
                    $(".cover .logo").addClass("located");
                },2800);
                var tl = new TimelineMax({
                    repeat: 0,
                });
                for(let i=0;i<7;i++){
                    tl.fromTo(".text-"+(i+1),startObj,finalObj,(0.2*i))
                }
                 tl.fromTo(".subTitle",{
                    yPercent: 20,
                    autoAlpha:0,
                 },{
                    yPercent: 0,
                    autoAlpha:1,
                 },1.8)

                 tl.fromTo(".enter",{
                    yPercent: 20,
                    autoAlpha:0,
                 },{
                    yPercent: 0,
                    autoAlpha:1,
                 },2.2)


                    // $(".enter-wrapper").mouseover(function(){
                    //     $(".enter-wrapper").mousemove(function(e){
                    //         TweenLite.to($(this).find(".enter"), 0.8, {
                    //             css: {
                    //                 left: e.pageX-$(e.target).offset().left - $(e.target).width()/2 ,
                    //                 top: e.pageY-$(e.target).offset().top- $(e.target).height()/2 ,
                    //             }
                    //         });
                    //     });
                    // });
                    // $(".enter-wrapper").mouseout(function(){
                    //     TweenLite.to($(this).find(".enter"), 0.8, {
                    //         css: {
                    //             left: 0,
                    //             top: 0
                    //         }
                    //     });
                    // });

            }
            init();
            $("main .menu a").hover(function(){
                $("#index").addClass("menuHoverMode");
            },function(){
                $("#index").removeClass("menuHoverMode");
            });
        });
    /* ==========================================================================
		[common]
    ==========================================================================*/
    // $('.selectpicker').selectpicker();
    // imgFill();
    // numberElementEvent();
    // windowW<1200?$("[data-aos-delay]").removeAttr("data-aos-delay"):"";
    // aosInit();
    /* ==========================================================================
		[resize]
    ==========================================================================*/

    function resize(){
        // if($(window).width()>575){
        //     var left=($(window).width()/1903)*238;;
        //     $(".index-banner-section .more").css("left",left)
        // }

        
    }
    $(window).resize(function(){
        resize();
    }).trigger('resize');
})
function aosInit(){
    AOS.init({
        duration: 500,
        offset: 10,
        mirror: true,
    });
}


