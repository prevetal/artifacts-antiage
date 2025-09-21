document.addEventListener('DOMContentLoaded', function() {
    // Ideas slider
	let ideasSlider = document.querySelector('.production_ideas .swiper')

	if (ideasSlider) {
		new Swiper('.production_ideas .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 10,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 3
				}
			},
		})
	}


    // Information slider
	let informationSlider = document.querySelector('.production_information .swiper')

	if (informationSlider) {
		new Swiper('.production_information .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			slidesPerView: 1,
			lazy: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
		})
	}


    // Flip effect
    document.querySelectorAll('.production_what .products .icon')
        .forEach(icon => {
            icon.addEventListener('click', () => {
                const parentItem = icon.closest('.item')

                if (parentItem) {
                    parentItem.classList.toggle('fliped')
                }
            })
        })
})