$(function() {
	let header = $('#header');
	$(window).on('scroll reload resize', function() {
		if($(window).scrollTop() > 0) {
			header.addClass('active');
		} else {
			header.removeClass('active');
		}
	});

	let burgerMenu = $('#burger-menu');
	let navigation = $('#navigation');

	$(burgerMenu).on('click', function() {
		burgerMenu.toggleClass('active');
		navigation.toggleClass('active')
	});

	let intro = $('#intro');
	let service = $('#service');
	let events = $('#events');
	let footer = $('#footer');

	let introOffset = intro.offset().top;
	let serviceffset = service.offset().top;
	let eventsOffset = events.offset().top;
	let footerOffset = footer.offset().top;
	
	let headerHeight = header.innerHeight();

	$('.header__navigation-item').on('click', function(event) {
		$('.header__navigation-item').removeClass('active');
		event.preventDefault();

		let blockSelector = $(this).data('scroll');
		let blockOffset = $(blockSelector).offset().top;

		$('html, body').animate({
			scrollTop: blockOffset - headerHeight,
		}, 700);
	});

	$('.service__choose').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		arrows: false,
		responsive: [
		{
		  breakpoint: 767,
		  settings: {
		    arrows: false,
		    centerMode: true,
		    centerPadding: '40px',
		    slidesToShow: 1
		  }
		},
		{
		  breakpoint: 575,
		  settings: {
		    arrows: false,
		    centerMode: true,
		    centerPadding: '40px',
		    slidesToShow: 1
		  }
		}
		]
		})

	$('.events__slider').slick();
});






