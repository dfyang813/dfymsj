/**
 * Created by bjwsl-001 on 2017/7/8.
 */
$("#week-box-rt li").hover(function(){
    $(this).children(":last-child").addClass("actv");
},function(){
    $(this).children(":last-child").removeClass("actv");
});
$("#box-btom li").click(function(e){
    e.preventDefault();
    $(this).children(":last-child").css("display","block").parent().siblings()
        .children(":last-child").css("display","none");
});
$(()=> {
    var moved=0;
    $(".normal").children(":eq(1)").show().siblings().hide();
    $("#box-lf-top").children(":eq(1)").addClass("curt").siblings().removeClass("curt");
    $("#box-lf-top").click(function (e) {
        moved=$(e.target).index();
        $(e.target).addClass("curt").siblings().removeClass("curt");
        $(".normal").children(":eq("+moved+")").show().siblings().hide();
    });
});
$(()=>{
    var moved=0;
$(".load").click(function(){
    moved++;
    $(".list-two").toggleClass("aive");
    if(moved%2!=0)
    $(this).html("<<收起");
    else{
        $(this).html("展开全部>>");
    }
})
var change=$("#objs").find(".change");
    $.each(change,function(){
    $(this).on("click",function(){
        if($(this).next().is(":visible")==false){
            $("#objs .list").slideUp(300);
        }
        $(this).next().slideToggle(300);
    })
})
});
var spans=document.querySelectorAll(".span-one");


$("#box-btom li a").click(function(){
    var word=$(this).children(":nth-child(2)").html();
    var spanMain=document.querySelectorAll(".vg");
    var del="X";
    $("#check").css("display","block");
    for(var n=0,str="";n<spanMain.length;n++){
        str+=spanMain[n].innerHTML;
    }
    charge(spans,str,word,del);
});
$(".list-one li").click(function(){
    var word=$(this).html();
    var del="X";
    var spanMain=document.querySelectorAll(".list-one li");
    for(var n=0,str="";n<spanMain.length;n++){
        str+=spanMain[n].innerHTML;
    }
    charge(spans,str,word,del);
})
function charge(spans,str,word,del){
    for(var i=0;i<spans.length;i++){
        if(spans[0].innerHTML==""){
            spans[0].innerHTML=word;
            spans[0].nextElementSibling.innerHTML=del;}
        else{
            var main=spans[0].innerHTML;
            if(str.indexOf(main)!=-1){
                spans[0].innerHTML=word;
                spans[0].nextElementSibling.innerHTML=del
            }else{
                spans[1].innerHTML=word;
                spans[1].nextElementSibling.innerHTML=del
            }
        }
        }
    $("#check").css("display","block");
}
var delt=document.querySelectorAll(".span-two");
$(".span-two").click(function(){
    var inmain=$(this).siblings().html();
    $(this).html("");
    $(this).siblings().html("");
    var spanMain=document.querySelectorAll(".vg");
    for(var n=0,stg="";n<spanMain.length;n++){
        stg+=spanMain[n].innerHTML;
    }
    if(inmain.indexOf(inmain)!=-1){
        $("#box-btom li").children(":last-child").css("display","none")
    }
    for(var i=0,str="";i<delt.length;i++){
        str+=delt[i].innerHTML;
    }
    if(str==""){
        $("#check").css("display","none");
    }
})

