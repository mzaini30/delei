/**
 * Custom jQuery scripts
 */
		
		jQuery(function(){
			jQuery('.nav-menu').slicknav({
			});
		});
		
		jQuery(function() {
			jQuery('#bar-dropdown').css({
				'margin-top':'-100%',
				'opacity':'0',
				'transition':'all .4s ease'
			});
			jQuery(window).on('scroll', function() {
				var y = window.pageYOffset;
				var x = 550;
				
				if ( y > x ) {
					jQuery('#bar-dropdown').css({
						'margin-top':'0',
						'opacity':'1',
						'transition':'all .4s ease'
					});
				}
				else {
					jQuery('#bar-dropdown').css({
						'margin-top':'-100%',
						'opacity':'0',
						'transition':'all .4s ease'
					});
				}
			});
		});
		