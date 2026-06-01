document.addEventListener('DOMContentLoaded', function() {
	// Pronoun small wholesale slider
	const pronounSmallWholesaleSliders = [],
		pronounSmallWholesale = document.querySelectorAll('.pronoun_small_wholesale .swiper')

	pronounSmallWholesale.forEach((el, i) => {
		el.classList.add('pronoun_small_wholesale_s' + i)

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
					spaceBetween: 12,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 3
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

		pronounSmallWholesaleSliders.push(new Swiper('.pronoun_small_wholesale_s' + i, options))
	})


	// Pronoun with us slider
	const pronounWithUsSliders = [],
		pronounWithUs = document.querySelectorAll('.pronoun_with_us .swiper')

	pronounWithUs.forEach((el, i) => {
		el.classList.add('pronoun_with_us_s' + i)

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
				1280: {
					spaceBetween: 20,
					slidesPerView: 3
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

		pronounWithUsSliders.push(new Swiper('.pronoun_with_us_s' + i, options))
	})
})


const setHeight = items => {
	let maxheight = 0

	items.forEach(el => {
		if (el.offsetHeight > maxheight) maxheight = el.offsetHeight
	})

	items.forEach(el => el.style.height = maxheight + 'px')
}