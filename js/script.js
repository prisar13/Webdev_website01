
$(function(){ //same as document.addEventListener("DOMContentLoaded".....)
    // Same as document.querySelector(".navbar-toggler").addEventListener("blur...")
    $(".navbar-toggler").blur(function(event) {
        var screenWidth = window.innerWidth; //grab the window width
        if (screenWidth < 975) {
            $(".navbar-collapse").collapse('hide');
        }
    })
});

(function(global){
    var dc={};
    var homeHtml="snippets/home_snippet.html";
    var insertHtml=function(selector, html){
        var targetElem=document.querySelector(selector);
        targetElem.innerHTML=html;
    };

    var showLoading= function(selector){
        var html="<div class='text-center'>";
        html+="<img src='home/ajax-loader.gif'></div>";
        insertHtml(selector,html);
    };

    document.addEventListener("DOMContentLoaded",function(event){

        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,function(responseText){
                document.querySelector("#main-content").innerHTML=responseText;
            },
            false);
    });

    global.$dc=dc;

})(window);