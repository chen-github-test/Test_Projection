/**
第一次的javascript的测试 段落改写。
*/
changeFlag=true;
function test0930001ChangeContent(){
    ele=document.getElementById("test0930001")
    if(changeFlag){
        ele.innerText='>段落已经被修改了！';
        changeFlag=false;
    }
    else{
        ele.innerText="段落又改回来了！"
        changeFlag=true;
    }
}

$(document).ready(function(){
    $("#testHide20210118").click(
        function(){
            $("#testJquery20210118001").hide(500,"linear");
        }
    );
    $("#testShow20210118").click(
        function(){
            $("#testJquery20210118001").show(500,"linear");
        }
    );
    $("#testToggle20210118").click(
        function(){
            $("#testJquery20210118001").toggle(500,"linear");
        }
    );
    
})


$(document).ready(function(){
    $(".2022010401").on("click",function(event){
        window.alert("test001");
        $(".2022010402").append(event.isPropagationStopped().toString());
    })
    $(".2022010401 div").on("click",function(event){
        window.alert("test002");
        event.stopPropagation();
        $(".2022010402").append(event.isPropagationStopped().toString());
    })
    $(".2022010501").on("click",function(e){
        $(".2022010502").html(e.metaKey.toString());
    })
    $(".2022010601").bind("test.zcNameSpace",function(event){
        $(".2022010602").html(event.namespace);
    })
    $(".2022010601").on("click",function(){
      $(this).trigger("test.zcNameSpace");
        
    })
    $(".2022010701").on("mousemove",function(e){
        $(this).html("("+e.pageX+","+e.pageY+")");
    })
   
})
