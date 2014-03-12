'use strict';


$('#nav-link').click(function(e) {
	e.preventDefault();
	$('#header-navigation').toggleClass('open');
	$('#shade').toggleClass('hide');
});