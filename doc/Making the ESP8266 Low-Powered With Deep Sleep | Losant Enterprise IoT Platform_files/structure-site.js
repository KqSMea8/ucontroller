$(function(){$("#nav-expander").on("click",function(a){a.preventDefault();a.stopPropagation();$("body").toggleClass("nav-open")});$(document).on("click",function(){if($("body").hasClass("nav-open")){$("body").removeClass("nav-open")}});$(".nav-email-setup").on("click",function(){$(this).fadeOut(100,function(){$(".nav-email-form").fadeIn(200)})});$(window).scroll(function(a){if($(this).scrollTop()>75){$(".header").addClass("sticky");$(".body-container-wrapper").addClass("sticky")}else{$(".header").removeClass("sticky");$(".body-container-wrapper").removeClass("sticky")}});$(".overlay-link").on("click",function(b){var a=$(b.currentTarget).parent().parent().find(".overlay-contents");$("#content-overlay .container .contents").html(a.html());$("#content-overlay").fadeIn()});$("#content-overlay").on("click",function(a){if(a.target.className=="container"){$("#content-overlay").fadeOut()}});$(document).keyup(function(a){if(a.keyCode===27){$("#content-overlay").fadeOut()}});setTimeout(function(){var a=$("#schedule-demo-form form > div.hs_submit > div.actions > input");a.on("click",function(){ga("send","event",{eventCategory:"Schedule Demo",eventAction:"click",eventLabel:"Schedule Demo Form Submitted"})});$(".start-building-ga").on("click",function(){ga("send","event",{eventCategory:"Start Building",eventAction:"click",eventLabel:"Start Building Button Clicked"})});$(".sign-up-button").on("click",function(){ga("send","event",{eventCategory:"Sign Up",eventAction:"click",eventLabel:"signup button clicked"})});$(".hero-subheader .cta_button").on("click",function(){ga("send","event",{eventCategory:"Sign Up",eventAction:"click",eventLabel:"signup button clicked"})})},2000)});