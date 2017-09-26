/**
 * Created by bjwsl-001 on 2017/7/6.
 */
var pro=$(".pro-box");
var uls=$("#squre");
var timer=null;
var x=0;
function run(){
    if(x<5){
        x++;
    }else{
        x=0
    }
    pro.children().hide(400).eq(x).show(400);
    uls.children().eq(x).addClass("active").siblings().removeClass("active");
}
timer=setInterval(run,2000);
pro.hover(function(){
    clearInterval(timer);
    timer=null;
},function(){
    timer=setInterval(run,2000);
});
uls.hover(function(e){
    clearInterval(timer);
    timer=null;
    x=$(e.target).index();
    uls.children().eq(x).addClass("active").siblings().removeClass("active");
    pro.children().hide(400).eq(x).show(400);
},function(){
    timer=setInterval(run,3000);
});