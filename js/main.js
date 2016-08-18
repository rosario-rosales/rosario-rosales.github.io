$(document).ready(initPage);

function initPage()
{

ventana();
slider();

}

function ventana()
{
	// $('#home').css({'height':$(window).height()+'px'});
	// $('.wrap').css({'height':$(window).height()+'px'});
	// $('.hero-banner').css({'height':$(window).height()+'px'});

	var flag =false;

	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll>200){
			if(!flag){
				$('header').css({'background-color':'#a0dfbe'});
				$('#nav-wrapper').css({'margin-top':'0'});
				$('#nav ul').css({'border-bottom':'5px solid #000'});
				flag=true;
				}
			}
			else{
			if(flag){
			$('header').css({'background-color':'transparent'});
			$('#nav-wrapper').css({'margin-top':'3%'});
			$('#nav ul').css({'border-bottom':'none'});


			flag=false;
				}
			}
	});

}

function slider()
{
	jQuery(document).ready(function($) {

			$('.vertical-slider').unslider({
			animation:'vertical', autoplay: true, infinite: true, arrows: false});

			$('.automatic-slider').unslider({
			autoplay: true, infinite: true, arrows: false });

			$('.default-slider').unslider();

			$('.infinite-slider').unslider({
			infinite: true 
			});			

		});
}
