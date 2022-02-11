 $(function (){
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
                $(".logo-wrapper").addClass("move");
                $("#holder").addClass("in");
            },2000);
            var tl = new TimelineMax({
                repeat: 0,
            });

            tl.from(".path", {
                drawSVG: 0,
                duration: 2,
            }, 0)


            for(let i=0;i<7;i++){
                tl.fromTo(".text-"+(i+1),startObj,finalObj,(0.2*i+2.2))
            }
                tl.fromTo(".subTitle",{
                yPercent: 20,
                autoAlpha:0,
                },{
                yPercent: 0,
                autoAlpha:1,
                },3)

                tl.fromTo(".enter",{
                yPercent: 20,
                autoAlpha:0,
                },{
                yPercent: 0,
                autoAlpha:1,
                },3.2)


        }
        init();
        $("main .menu a").hover(function(){
            $("#index").addClass("menuHoverMode");
        },function(){
            $("#index").removeClass("menuHoverMode");
        });

        var svgEl = document.querySelector(".animated-lines"),
            randomRange = function(t, e) {
                return ~~(Math.random() * (e - t + 1)) + t
            },
            numberOfLines = 10,
            lineDataArr = [],
            createPathString = function() {
                for (var t = "", e = 0; e < numberOfLines; e++) {
                    var i = lineDataArr[e],
                        n = {
                            x: 45 * Math.sin(i.counter / i.sin),
                            y: 45 * Math.cos(i.counter / i.cos)
                        },
                        o = "M" + i.startX + "," + i.startY + " Q" + i.pointX + "," + (1.5 * n.y).toFixed(3) + " " + (n.x / 10 + i.centerX).toFixed(3) + "," + (n.y / 5 + i.centerY).toFixed(3) + " T" + i.endX + "," + i.endY;
                    i.counter++, t += o
                }
                return t
            },
            createLines = function() {
                for (var t = document.createElementNS("http://www.w3.org/2000/svg", "path"), e = 0; e < numberOfLines; e++) {
                    var i = {
                        counter: randomRange(1, 500),
                        startX: randomRange(-5, -40),
                        startY: randomRange(-5, -30),
                        endX: randomRange(200, 220),
                        endY: randomRange(120, 140),
                        sin: randomRange(85, 150),
                        cos: randomRange(85, 150),
                        pointX: randomRange(30, 55),
                        centerX: randomRange(90, 120),
                        centerY: randomRange(60, 70)
                    };
                    lineDataArr.push(i)
                }
                var n = function() {
                    t.setAttribute("d", createPathString()), requestAnimationFrame(n)
                };
                svgEl.appendChild(t), n()
            };
        createLines();

        
});