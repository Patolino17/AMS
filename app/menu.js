$(document).ready(main);

var flag=0;

function main() {
	$('.menu_bar').click(function(){
		
		var contador = document.getElementById('flag').checked;
		
		if (contador == true){			
			$(".articule-prev").fadeOut();	
			$('nav').animate({
				left:'0'
			});			
			contador = false;							
		} else {							
			$('nav').animate({
				left:'-100%'
			});			
			contador = true;									
			$(".articule-prev").fadeIn(1500);

		}
	});
};  