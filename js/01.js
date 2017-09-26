/**
 * Created by bjwsl-001 on 2017/6/17.
 */
$(()=> {
    var moved=0;
    $("#sub-top").click(function (e) {
        moved=$(e.target).index();
        $(e.target).addClass("curnt").siblings().removeClass("curnt");
        $("#sub-box").children(":eq("+moved+")").fadeIn(600).siblings().fadeOut(600);
    });
});
$(()=> {
    var moved=0;
var uls=$(".ul-box");
    uls.on("mouseover","li",function(e){
        var tar=$(e.target);
        moved=tar.index();
        if(tar.siblings().has(".cunt"))
        tar.addClass("cunt").siblings(".cunt").removeClass("cunt");
        tar.parent().siblings().children(":eq("+moved+")").show().siblings().hide();
    }).on("mouseout","li",function(e){
        var tar=$(e.target);
        moved=tar.index();
        if(!tar.siblings().has(".cunt"))
            tar.addClass("cunt");
    })
});
(function(){
    var childs=$(".lasted>ul").children(":not(:last-child)");
        childs.hover(
        function(){
            $(this).children(":last-child").addClass("actv");
        },function(){
                $(this).children(":last-child").removeClass("actv");
            }
    );
    var divs=$("#tab");
    var moved=0;
    var long=990;
    var uls=$("#week-list");
    var timer=null;
    function play(){
        timer=setInterval(
            function(){
                moved++;
                divs.animate({
                    left:-moved*long+"px"
                },1000,function(){
                    if(moved==4){
                        moved=0;
                        divs.css("left",0);
                    }
            uls.children(":eq("+moved+")").addClass("active").siblings().removeClass("active");
                })
            },5000
        )
    }
    play();
    $(".jt-left").click(function(){
        if(moved>0){
            moved--;
            divs.stop(true).animate({
                left:-moved*long+"px"
            },1000,function(){
                uls.children(":eq("+moved+")").addClass("active").siblings(".active").removeClass("active");
            })
        }
    });
    $(".jt-right").click(function(){
        if(moved<4){
            moved++;
            divs.stop(true).animate({
                left:-moved*long+"px"
            },1000,function(){
                uls.children(":eq("+moved+")").addClass("active").siblings(".active").removeClass("active");
            })
        }
    });
    $("#tab-box").hover(function(){
        clearInterval(timer);
        timer=null;
    },function(){
        play();
    })
})();
$(()=>{
   var lf=$(".jt-lf");
    var rt=$(".jt-rt");
    var moved=0;
    var long=990;
    var ulList=$("#sprig");
    var bar=$("#bar");
    lf.click(function(){
        if(moved>0){
            moved--;
            ulList.animate({
                left:-moved*long+"px"
            },1000,function(){
                bar.children(":eq("+moved+")").addClass("active").siblings().removeClass("active");
            })}
    });
    rt.click(function(){
    if(moved<2) {
        moved++;
        ulList.animate({
            left: -moved * long + "px"
        }, 1000, function () {

            bar.children(":eq(" + moved + ")").addClass("active").siblings().removeClass("active");
        });
    }
    })
});
var WIDTH=990;
var moved=null;
var run=$("#meal");
var lis=$("#time>li");
var times=$("#time");
var now=new Date();
var h=now.getHours();
h=parseInt(h);
var timer=setInterval(function(){
if(h>=4&&h<10)
moved=1;
if(h>=10&&h<13)
    moved=2;
if(h>=13&&h<16)
    moved=3;
if(h>=16&&h<21)
    moved=4;
if(h>=21||h<4)
    moved=5;
    run.css("left",-moved*WIDTH);
    times.children(":nth-child(" + moved + ")").addClass("current").siblings().removeClass("current");
    times.children(":nth-child(" + moved + ")").children().addClass("curnt").parent()
            .siblings().children(".curnt").removeClass("curnt");
},50);

    lis.mouseover(function(){
        clearInterval(timer);
        var tar = $(this);
        var n = tar.index();
        run.stop(true).animate({
            left: -(n + 1) * WIDTH + "px"
        }, 2000);
        tar.addClass("current").siblings().removeClass("current");
        tar.children().addClass("curnt").parent()
            .siblings().children().removeClass("curnt");
    });




