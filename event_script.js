$(function() {
  $('#eventForm').seamless({loading: 'Loading...'});
});
$( ".item" ).mouseover(function() {
  $( ".day" ).css("font-size", "30px");
  $(".item").find( "span" ).css("font-size", "14px");
  $(this).find(".day").css("font-size", "60px");
  $(this).find("span").css("font-size", "24px");
});
$( ".item" ).mouseleave(function() {
  $( ".day" ).css("font-size", "60px");
  $(".item").find( "span" ).css("font-size", "24px");
});

$(".clock").click(function () {
  var active = !$(this).hasClass("btn_simple_active");
  if ( $(this).hasClass("selectGMT") && active ) {
      toggleTime();
      $(".selectGMT").addClass("btn_simple_active");
      $(".selectEST").removeClass("btn_simple_active");
  }
  if ( $(this).hasClass("selectEST") && active ) {
      toggleTime();
      $(".selectGMT").removeClass("btn_simple_active");
      $(".selectEST").addClass("btn_simple_active");
  }
  function toggleTime() {
      $(".GMT, .EST").toggle().animate({opacity: 0.25}).animate({opacity: 1});
  }
  localStorage.setItem('btnClicked', $(this).text());
});


var tabOne = $('.tab-element-one');
var btnOne = $('.tab-btn-one');
var tabTwo = $('.tab-element-two');
var btnTwo = $('.tab-btn-two');
var tabThree = $('.tab-element-three');
var btnThree = $('.tab-btn-three');

$('.tab-btn-one').click(function () {
  showTab(tabOne, btnOne);
  hideTab(tabTwo, btnTwo);
  hideTab(tabThree, btnThree);
});
$('.tab-btn-two').click(function () {
  hideTab(tabOne, btnOne);
  showTab(tabTwo, btnTwo);
  hideTab(tabThree, btnThree);
});
$('.tab-btn-three').click(function () {
  hideTab(tabOne, btnOne);
  hideTab(tabTwo, btnTwo);
  showTab(tabThree, btnThree);
});
function hideTab(tab, btn){
  $(tab).hide(400);
  $(btn).removeClass("tab-active");
}
function showTab(tab, btn){
  $(tab).show(400);
  $(btn).addClass("tab-active");
}

$(window).scroll(function() {
  var hT = $('#registration').offset().top;
  var hH = $('#registration').outerHeight();
  var wH = $(window).outerHeight();
  var wS = $(window).scrollTop();
  if (wS > (hT-(hH/2)) && wS < hT+(hH/2) || wS < '400'){
      $('.bottomMenu').fadeOut();
  }
  else {
      $('.bottomMenu').fadeIn();
  }
  if (wS > hT+(hH/2)-200) {
      $('.registerBanner').removeClass("downArrow");
      $('.registerBanner').addClass("upArrow");
  } else {
      $('.registerBanner').addClass("downArrow");
      $('.registerBanner').removeClass("upArrow");
  }
});

var getUrlParameter = function getUrlParameter(sParam) {
var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;
  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
          switch(sParameterName[1]) {
              case 'one':
              $('.tab-btn-one').trigger('click');
              break;
              case 'two':
              $('.tab-btn-two').trigger('click');
              break;
              case 'three':
              $('.tab-btn-three').trigger('click');
              break;
              default:
             }
             return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
  return false;
};
var day = getUrlParameter('day');

$(document).ready(function(){
  var $form = $('form');
  $form.submit(function(){
      $('#questionForm').hide(400);
      $('#questionFormSuccess').show(400);
  });
  });




var windowSizeArray = [ "width=200,height=200", "width=760,height=800" ];
$(document).ready(function () {
  //FAQ
  $(".helpWrap").click(function() {
      $(this).toggleClass('toggleHighlight').children('div').first().toggle(200);
  });
  $(".agendaBarToggle").click(function() {
      $(".agendaBar").toggle();
      $(this).toggleClass('is-active').next(".agendaBarToggle").stop().slideToggle(500);
  });
  $('.shareWindow, .formBackup').click(function (){
      window.open($(this).attr('href'),'title', 'width=800, height=700');
      return false;
  });
});

function makeTimer() {

//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
  var endTime = new Date("22 March 2022 15:00:00 GMT+00:00");			
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");		

}
setInterval(function() { makeTimer(); }, 1000);

  $(".toAgenda").click(function() {
      $('html, body').animate({
          scrollTop: ($('#agenda').offset().top)
      },0);
    });
  $(".toRegistration").click(function() {
      $('html, body').animate({
          scrollTop: ($('#registration').offset().top)
      },0);
  });
  $(".toTop").click(function() {
      $('html, body').animate({
          scrollTop: ($('#intro').offset().top)
      },0);
  });
  
