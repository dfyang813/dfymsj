/**
 * Created by bjwsl-001 on 2017/6/21.
 */
//var lis=document.querySelectorAll("#roud li");
//var uls=document.getElementById("banner-top");
//var long=990;
//
//for(var i=0;i<lis.length;i++){
//    uls.style.left=-long*i+"px";
//
//    //lis[i].onmouseout=function(){
//    //    this.className=""
//    //}
//}
$(()=>{
    var imgs=[
        "img/lb1.jpg",
        "img/lb2.jpg",
         "img/lb3.jpg"
    ];
    var ban=$("#banner-top");
    var roud=$("#roud");
    var WIDTH=990,
        moved=0,
        str="",
        stri="",
        interval=500,
        WAIT=2500,
        timer=null;
    for(var src of imgs){
        str+=`<li><img src="${src}"</li>`;
        stri+="<li></li>"
    }
    str+=`<li><img src="${imgs[0]}"</li>`;
    ban.append(str).css("width",(imgs.length+1)*WIDTH);
    roud.append(stri).children().first().addClass("active");
    function play(){
        timer=setInterval(e=>{
            moved++;
            ban.animate({
                left:-moved*WIDTH
            },interval,()=>{
                if(moved==3){
                    moved=0;
                    ban.css("left",0);
                }
                roud.children(":eq("+moved+")").addClass("active").siblings().removeClass("active");
            })
        },WAIT)
    }
    play();
    $("#banner").hover(
        e=>{
            clearInterval(timer);
            timer=null;
        },e=>
        play()
    );
    roud.on("click","li",e=>{
        moved=$(e.target).index();
        ban.animate({
            left:-moved*WIDTH
        },interval,function(){
            $(e.target).addClass("active").siblings().removeClass("active");
        })
    })
});
var Imgs=document.querySelectorAll(".hottop");
for(var i=0;i<Imgs.length;i++){
Imgs[i].onmouseover=function(){
    this.firstElementChild.firstElementChild.className="acte";
};
    Imgs[i].onmouseout=function(){
        this.firstElementChild.firstElementChild.className="";
    }
}
var lis=document.querySelectorAll(".hotbto>li>a>img");
for(var m=0;m<lis.length;m++){
    lis[m].onmouseover=function(){
        this.className="acti";
    }
    lis[m].onmouseout=function(){
        this.className="";
    }
}
var x=0;
function run(){
    if(x<2)
    x+=1;
    else{
    x=0;}
    $("#banner-top>li").hide().eq(x).show();
    $("#roud>li").removeClass("active").eq(x).addClass("active");
}
//var t=setInterval(run,1500);
//$("#banner-top").on("mouseover",function(){
//    clearInterval(t)
//})
//$("#banner-top").on("mouseout",function(){
//    t=setInterval(run,1500);
//})
$(()=>{
    var lis=$("#ban-bto>li");
    lis.hover(function(){
        var col=$(this).children(":nth-child(2)").css("backgroundColor");
        $(this).children(":nth-child(3)").css("backgroundColor",col).addClass("active");
        $(this).children(":nth-child(2)").css("backgroundColor","#fff").css("color",col);
    },function(){
        var col=$(this).children(":nth-child(3)").css("backgroundColor");
        $(this).children(":nth-child(3)").css("backgroundColor","#fff").removeClass("active");
        $(this).children(":nth-child(2)").css("backgroundColor",col).css("color","#fff");
    });
    var shaws=$("#main-list>li");
    shaws.hover(function(){
        $(this).addClass("activ");
    },function(){
        $(this).removeClass("activ");
    })
});
$(()=>{
var bts=$("#task>li>button");
for(var i=0;i<bts.size();i++) {
        var bt=$(bts.get(i));
    if (bt.html()=="已过期") {
        bt.css("background","#dddddd");
    }
    else if (bt.html()=="领取任务") {
        bt.css("background","#ff4c35");
    } else{
        bt.css("background","#aaaaaa");
    }
}
});
var app=angular.module('myApp',['ng']);
app.controller('myCtrl',['$scope',function($scope){
    $scope.myList=[
        {imgUrl:'1.jpeg',title:'蘑菇酱豆角焖面',info:'19浏览 · 1评论 · 1赞',name:'肥小姑'},
        {imgUrl:'2.jpeg',title:'日本黑料理，芒果大福',info:'12浏览 · 1评论 · 1赞',name:'肥小姑'},
        {imgUrl:'3.jpeg',title:'非常有爱的 ：南瓜子面包',info:'22浏览 · 1评论 · 2赞',name:'肥小姑'},
        {imgUrl:'4.jpg',title:'#冬瓜全身都是宝#菜谱征集获奖名单',info:'43浏览 · 1评论 · 2赞',name:'肥小姑'},
        {imgUrl:'5.jpg',title:'清新爽口——橙汁瓜条',info:'18浏览 · 1评论 · 1赞',name:'肥小姑'},
        {imgUrl:'6.jpeg',title:'鸡胸肉这样做，只需7分钟，就能做',info:'86浏览 · 2评论 · 4赞',name:'肥小姑'},
        {imgUrl:'7.jpeg',title:'亦菜亦饭，美味又可口的【龙口粉丝',info:'56浏览 · 1评论 · 1赞',name:'肥小姑'},
        {imgUrl:'8.jpeg',title:'水果加糯米不错的搭配，特别适合夏',info:'41浏览 · 2评论 · 2赞',name:'肥小姑'},
        {imgUrl:'9.jpeg',title:'比鸡肉更香的素鸡',info:'35浏览 · 1评论 · 2赞',name:'肥小姑'},
        {imgUrl:'10.jpeg',title:'一个慵懒周末的早餐~~豆角鸡蛋炒',info:'16浏览 · 1评论 · 2赞',name:'肥小姑'},
        {imgUrl:'11.jpeg',title:'豆角正当时~~煎酿豆角',info:'21浏览 · 1评论 · 2赞',name:'肥小姑'},
        {imgUrl:'12.jpeg',title:'香辣爽口下饭的菜-酸辣包菜',info:'42浏览 · 1评论 · 2赞',name:'肥小姑'},
        {imgUrl:'13.jpeg',title:'无油版超级软的蛋黄面包',info:'29浏览 · 1评论 · 2赞',name:'肥小姑'},
        {imgUrl:'14.jpeg',title:'不一样的中秋----桃山皮月饼',info:'14浏览 · 1评论 · 2赞',name:'肥小姑'},
        {imgUrl:'15.jpeg',title:'夏日，你需要一碗鲜掉眉毛的快手',info:'60浏览 · 1评论 · 2赞',name:'肥小姑'},
        {imgUrl:'16.jpeg',title:'降血压的一道好吃-西芹炒鸡肉',info:'12浏览 · 1评论 · 2赞',name:'肥小姑'},
        {imgUrl:'17.jpeg',title:'比外卖还要好吃的-香烤鸡翅',info:'41浏览 · 1评论 · 2赞',name:'肥小姑'},
        {imgUrl:'18.jpeg',title:'很适合减肥朋友吃的菜-青椒炒花菜',info:'22浏览 · 1评论 · 2赞',name:'肥小姑'}
    ];
    var uls=document.querySelector("#main-box");
    var offset=uls.offsetTop;
    var scrollTop=document.body.scrollTop;
    var num=$scope.myList.length;



}])

