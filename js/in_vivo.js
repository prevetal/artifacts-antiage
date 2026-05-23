document.addEventListener('DOMContentLoaded', function() {
	// In Vivo steps slider
	const inVivoStepsSliders = [],
		inVivoSteps = document.querySelectorAll('.in_vivo_steps .swiper')

	inVivoSteps.forEach((el, i) => {
		el.classList.add('in_vivo_steps_s' + i)

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
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.item')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		inVivoStepsSliders.push(new Swiper('.in_vivo_steps_s' + i, options))
	})


	// In Vivo methods slider
	const inVivoMethodsSliders = [],
		inVivoMethods = document.querySelectorAll('.in_vivo_methods .swiper')

	inVivoMethods.forEach((el, i) => {
		el.classList.add('in_vivo_methods_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			slidesPerView: 1,
			breakpoints: {
				0: {
					spaceBetween: 12
				},
				768: {
					spaceBetween: 20
				},
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.item')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		inVivoMethodsSliders.push(new Swiper('.in_vivo_methods_s' + i, options))
	})


	// In Vivo results slider
	const inVivoResultSliders = [],
		inVivoResult = document.querySelectorAll('.in_vivo_results .swiper')

	inVivoResult.forEach((el, i) => {
		el.classList.add('in_vivo_results_s' + i)

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
			slidesPerView: 1,
			breakpoints: {
				0: {
					spaceBetween: 12
				},
				768: {
					spaceBetween: 20
				},
			},
		}

		inVivoResultSliders.push(new Swiper('.in_vivo_results_s' + i, options))
	})
})


const setHeight = items => {
	let maxheight = 0

	items.forEach(el => {
		if (el.offsetHeight > maxheight) maxheight = el.offsetHeight
	})

	items.forEach(el => el.style.height = maxheight + 'px')
}