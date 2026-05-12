document.addEventListener('DOMContentLoaded', function() {
	// Team slider
	const personsSliders = [],
		persons = document.querySelectorAll('.about_persons .swiper')

	persons.forEach((el, i) => {
		el.classList.add('about_persons_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 3
				}
			}
		}

		personsSliders.push(new Swiper('.about_persons_s' + i, options))
	})
})