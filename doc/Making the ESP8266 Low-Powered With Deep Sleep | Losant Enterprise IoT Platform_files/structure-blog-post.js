$(function(){$(".share-num").each(function(){var d=$(this);$.sharedCount(window.location.href,function(e){var f=e.Twitter+(e.Facebook?e.Facebook.share_count:0)+e.GooglePlusOne+e.LinkedIn;if(f<5){return}if(f>99){d.addClass("hundreds")}d.text(f);d.parent().show()})});var a=$(".social-sharing-wrapper");var b=parseInt(a.position().top,10)-90;var c=function(f){var d=$(window).scrollTop();if(d>b){a.addClass("fixed")}else{a.removeClass("fixed")}};$(window).scroll(c)});jQuery.sharedCount=function(d,e){d=encodeURIComponent(d||location.href);var f="//free.sharedcount.com/";var c="44404ad2e7efaef3e687ab91ac64b23a2a7fee65";var b={data:{url:d,apikey:c},url:f,cache:true,dataType:"json"};if("withCredentials" in new XMLHttpRequest){b.success=e}else{var a="sc_"+d.replace(/\W/g,"");window[a]=e;b.jsonpCallback=a;b.dataType+="p"}return jQuery.ajax(b)};