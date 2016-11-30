jQuery(document).ready(function() {


	$('body').prepend('<a href="#" class="backtotop">Back to top</a>');
		
			$(window).scroll(function(){
				if ($(window).scrollTop() > 400){
					$('a.backtotop').fadeIn('fast');
					
				} else {
						$('a.backtotop').fadeOut('fast');
				}
			})
				
				$('a.backtotop').click(function(){
				$('body')animate({
					scrollTop: ()
				},'fast');
				
				return false;
			
			})