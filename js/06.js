/**
 * Created by bjwsl-001 on 2017/7/5.
 */
var long=219;
var moved=0;
var divs=$("#prots");
var timer=null;
function play(){
    timer=setInterval(
        function(){
            moved++;
            divs.animate({
                left:-moved*long+"px"
            },1000,function(){
                if(moved==8){
                    moved=0;
                    divs.css("left",0)
                }
            })
        },4000)
}
play();
$("#pto-box").hover(function(){
    clearInterval(timer);
    timer=null;
},function(){
    play();
});
