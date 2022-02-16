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
        $(".selectEDT, .selectCDT").removeClass("btn_simple_active");
        $(".selectGMT").addClass("btn_simple_active");
        $(".GMT").css("display", "block").animate({opacity: 0.25}).animate({opacity: 1});
        $(".EDT, .CDT").css("display", "none");
    }
    if ( $(this).hasClass("selectEDT") && active ) {
        $(".selectGMT, .selectCDT").removeClass("btn_simple_active");
        $(".selectEDT").addClass("btn_simple_active");
        $(".EDT").css("display", "block").animate({opacity: 0.25}).animate({opacity: 1});
        $(".GMT, .CDT").css("display", "none");
    }
    if ( $(this).hasClass("selectCDT") && active ) {
        $(".selectGMT, .selectEDT").removeClass("btn_simple_active");
        $(".selectCDT").addClass("btn_simple_active");
        $(".CDT").css("display", "block").animate({opacity: 0.25}).animate({opacity: 1});
        $(".GMT, .EDT").css("display", "none");
    }
    localStorage.setItem('btnClicked', $(this).text());
});
jQuery($ => {
    var arr = JSON.parse(localStorage.getItem('checked')) || [];
    arr.forEach(function(checked, i) {
      $('.starBox').eq(i).prop('checked', checked);
    });
  
    $(".starBox").click(() => {  
      var arr = $('.starBox').map((i, el) => el.checked).get();
      localStorage.setItem("checked", JSON.stringify(arr));
    });
  });
  
$(document).ready(function () {
    var clicked = localStorage.getItem("btnClicked");
    if (clicked === 'CDT') {
        $(".CDT").css("display", "block");
        $(".GMT, .EDT").css("display", "none");
        $(".selectGMT, .selectEDT").removeClass("btn_simple_active");
        $(".selectCDT").addClass("btn_simple_active");
    } else if (clicked === 'EDT') {
        $(".EDT").css("display", "block");
        $(".GMT, .CDT").css("display", "none");
        $(".selectGMT, .selectCDT").removeClass("btn_simple_active");
        $(".selectEDT").addClass("btn_simple_active");
    } else {
        $(".GMT").css("display", "block");
        $(".EDT, .CDT").css("display", "none");
        $(".selectGMT").addClass("btn_simple_active");
        $(".selectEDT, .selectCDT").removeClass("btn_simple_active");
    }
}); 

$('.modalName').click(function () {
    var modalName = ($(this).attr('class').split(' ')[1])
    var popModal = ('.popModal');
    if ($('.' + modalName + popModal)[0]) {
        //console.log(modalName + popModal);
        $('.' + modalName + popModal).show(300);
        $('body').addClass('stop-scrolling');
        $('.modalWidth').addClass("margin-right");
        $('.modalContent').addClass("modalContent_margin");
        //$('.modalContent').css("margin-right", "42px");
    }
});
$('.close, .modalContainer, .speakingSession a, .speakingSession div').click(function () {
    $('.popModal').hide(300);
    $('body').removeClass('stop-scrolling');
    $('.modalWidth').removeClass("margin-right");
    $('.modalContent').removeClass("modalContent_margin");
    //$('.modalContent').css("margin-right", "25px");
});
$(".modalContainer .modalContent").click(function (e) {
    e.stopPropagation();
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

$(".expandHeader").click(function () {
    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Collapse" : "Expand";
        });
    });
});
$(document).ready(function(){
    var $form = $('form');
    $form.submit(function(){
        $('#quEDTionForm').hide(400);
        $('#quEDTionFormSuccess').show(400);
    });
    });

$( "#toggleView" ).click(function() {
    toggleViewer();
});
$( ".toggleLabel" ).click(function() {
    toggleViewer();
    $("#toggleView").each(function(){
        $(this).prop('checked', !$(this)[0].checked);
    });
});
function toggleViewer() {
    $( ".summit_agenda_session" ).each(function() {
        $(this).find('.typePanelists').toggle('slow');
    });
    $('.session-summary, .researchContainer').toggle('slow');
    $(".toggleLabel span").filter(':nth-child(1), :nth-child(2)').toggle();
}


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
    $(".changeTEDT").click(function() {
        $('.joinTEDT').toggleClass('hiddenContent');
        $('.countDown').toggleClass('hiddenContent');
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
    $(".scrollTo.s100, .scrollTo.s200, .scrollTo.s300").click(function() {
        $('html, body').animate({
            scrollTop: ($('#session-intro').offset().top)
        },0);
    });
    $(".scrollTo.s101, .scrollTo.s201, .scrollTo.s301").click(function() {
        $('html, body').animate({
            scrollTop: ($('#session-1').offset().top)
        },0);
    });
    $(".scrollTo.s102, .scrollTo.s202, .scrollTo.s302").click(function() {
        $('html, body').animate({
            scrollTop: ($('#session-2').offset().top)
        },0);
    });
    $(".scrollTo.s103, .scrollTo.s203, .scrollTo.s303").click(function() {
        $('html, body').animate({
            scrollTop: ($('#session-3').offset().top)
        },0);
    });
    $(".scrollTo.s104, .scrollTo.s204, .scrollTo.s304").click(function() {
        $('html, body').animate({
            scrollTop: ($('#session-4').offset().top)
        },0);
    });
