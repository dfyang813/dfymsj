/**
 * Created by bjwsl-001 on 2017/6/17.
 */
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});
var lis=document.querySelectorAll("#sec,#tre");
for(var i=0;i<lis.length;i++){
    lis[i].onmouseover=function(){
        this.lastElementChild.style.display="block";
        this.children[1].style.display="none";
    };
    lis[i].onmouseout=function(){
        this.lastElementChild.style.display="none";
        this.children[1].style.display="block";
    }
}
$("#nav").on("click","#nav-list>li>a",function(e){
    $(e.target).addClass("active").parent().siblings().children(".active").removeClass("active");
})
