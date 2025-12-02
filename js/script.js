$(document).ready(function(){
    $("#gnb").mouseover(function(){
        $(".lnb, #bg").stop().slideDown();
        $("#gnb").mouseout(function(){
        $(".lnb, #bg").stop().slideUp();
        
    })
    })
})

var count=3;
var current=0;
var position;
setInterval (function(){
    if(current<count-1){current++;}
    else {current=0;}
    position=current*(-100)+"%";
    $("#total").animate({left:position},500);
},3000);


    $(document).ready(function(){
        $("#modalopen").click(function(){
            $("#modal").show();
            $("button").click(function(){
            $("#modal").hide();
            
        })
        })
    })