'use strict';
var windowW,windowH,mobileMode,headerH;
$(function (){
    $(window).resize(function(){
        resize();
    }).trigger('resize');
    $(".jqimgFill").imgLiquid();
    $('main').css("opacity","1");
    /* ==========================================================================
		[layout]
    ==========================================================================*/
        $("header .menu-section .menu a").on("mouseenter",function(){
            $("header .menu-section .number-block").addClass("active").find("div").css("transform","translateY("+$(this).position().top+"px)")
            $("header .menu-section .number-block .now").text($(this).parent().index() + 1);
        });
        $("header .menu-section .menu a").on("mouseleave",function(){
            $("header .menu-section .number-block").removeClass("active").find("div").css("transform","translateY(0px)")
            $("header .menu-section .number-block .now").text(1);
        });
        $(".mouse").click(function(){
            $(window).scrollTop(windowH - 80);
        });
        $(window).scroll(function(){
            $(window).scrollTop()==0?$("html").removeClass("scrollMode"):$("html").addClass("scrollMode");
        });   
     /* ==========================================================================
		[page]
    ==========================================================================*/
        if($("#project").length!==0){
            new Swiper ('.swiper-container', {
                loop: true,
                centeredSlides:true,
                centeredSlidesBounds:true,
                speed: 1000,
                spaceBetween:24,
                slidesPerView: "auto",

                breakpoints: {
                    1200: {
                         spaceBetween:64,
                    },
                },
                    pagination: {
                    el: '.swiper-pagination',
                    type:"fraction"
                },
            }) 
        }
        if($("#services").length!==0){
            let url = location.href;
            if (url.indexOf('?') != -1) {
                var nav = url.split('?')[1].split('=')[1];
                let position=$(".block-"+nav).offset().top;
                $(window).scrollTop(position - 80);
            } 
        }
        if($("#contact").length!==0){
            let url = location.href;
            if (url.indexOf('?') != -1) {
                var nav = url.split('?')[1].split('=')[1];
                let position;
                if(nav=="information"){
                    position=$(".information-block").offset().top;
                }
                else{
                    position=$(".form-block").offset().top;
                }
                $(window).scrollTop(position - 80);
            } 
            $(".form-field input,.form-field textarea").focus(function(){
                $(this).parent(".form-field").addClass("active");
            });
            $(".form-field input,.form-field textarea").blur(function(){
                $(this).parent(".form-field").removeClass("active");
            });
            $("#contactForm").validate({
                    rules: {
                        name: "required",
                        tel: "required",
                        email: {
                            required: true,
                            email: true
                        },
                        issue:"required",
                        content: "required",
                        verificationCode:"required"
                    },
                    messages: {
                        name: "此欄位為必填",
                        tel: "此欄位為必填",
                        email: "此欄位為必填",
                        issue: "此欄位為必填",
                        content: "此欄位為必填",
                        verificationCode: "此欄位為必填",
                    },
                    submitHandler: function() {
                        var myModal = new bootstrap.Modal(document.getElementById('sendModal'))
                        myModal.show()
                    }
                });

            var inputs=$(".form-field input,.form-field textarea,.form-field select");
            var mutationObserver = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation){
                    console.log(mutation.target);
                    if($(mutation.target).hasClass("error")){
                        $(mutation.target).parents(".form-field").addClass("error");
                    }
                    else{
                        $(mutation.target).parents(".form-field").removeClass("error");
                    }
                    
                });
            });
            inputs.each(function(){
                mutationObserver.observe($(this).get(0), {
                    attributes: true,
                    attributeFilter: ["class"]
                });
            });
            if(windowW<576){
                $(".verificationCode-input").attr("placeholder","")
            }

        }
    /* ==========================================================================
		[common]
    ==========================================================================*/
    $(".scrollbarY").mCustomScrollbar({axis: "y",});
    $('.tlt').textillate({
        loop: false,
        initialDelay: 0,
        in: {
        effect: 'fadeInUp',
        delay: 80,
        
        },
    });
    $(".tlt_2").each(function(){
        let text=$(this).text()
        let length=text.length;
        let html="";
        if($(this).hasClass("large")){
            for(let i=0;i<length;i++){
                html+="<span style='animation-delay:"+(i)*0.1+"s;'>"+text.substr(i,1)+"</span>";
            }
        }
        else if($(this).hasClass("small_tlt")){
            for(let i=0;i<length;i++){
                html+="<span style='animation-delay:"+(i)*0.025+"s;'>"+text.substr(i,1)+"</span>";
            }
        }
        else{
            for(let i=0;i<length;i++){
                html+="<span style='animation-delay:"+(i)*0.05+"s;'>"+text.substr(i,1)+"</span>";
            }
        }

        $(this).html(html)
    });
    $(".tlt_menu").each(function(){
        let text=$(this).text()
        let length=text.length;
        let html="";
            for(let i=0;i<length;i++){
                html+="<span>"+text.substr(i,1)+"</span>";
            }

        $(this).html(html)
    });



    

  
    aosInit();
    /* ==========================================================================
		[resize]
    ==========================================================================*/

    function resize(){
        windowW=$(window).innerWidth();
        windowH=$(window).height();
        headerH=$("header").height();
        windowW<1400?$("[data-aos-delay]").removeAttr("data-aos-delay"):"";
    }

})
function aosInit(){
    AOS.init({
        duration: 500,
        offset: 10,
        mirror: true,
    });
}


