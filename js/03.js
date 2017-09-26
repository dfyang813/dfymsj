/**
 * Created by bjwsl-001 on 2017/7/8.
 */
$("#week>div>ul>li").hover(function(){
    $(this).addClass("active");
},function(){
    $(this).removeClass("active");
});