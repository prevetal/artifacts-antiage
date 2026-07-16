document.addEventListener('DOMContentLoaded', function() {
	// Contract manufacturing with us slider
	const contractManufacturingWithUsSliders = [],
		contractManufacturingWithUs = document.querySelectorAll('.contract_manufacturing_with_us .swiper')

	contractManufacturingWithUs.forEach((el, i) => {
		el.classList.add('contract_manufacturing_with_us_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: el.querySelector('.swiper-button-next'),
				prevEl: el.querySelector('.swiper-button-prev')
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

		contractManufacturingWithUsSliders.push(new Swiper('.contract_manufacturing_with_us_s' + i, options))
	})


	// Contract manufacturing confirmation slider
	const contractManufacturingConfirmationSliders = [],
		contractManufacturingConfirmation = document.querySelectorAll('.contract_manufacturing_confirmation .swiper')

	contractManufacturingConfirmation.forEach((el, i) => {
		el.classList.add('contract_manufacturing_confirmation_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			pagination: {
				el: el.querySelector('.swiper-pagination'),
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 0,
			slidesPerView: 1
		}

		contractManufacturingConfirmationSliders.push(new Swiper('.contract_manufacturing_confirmation_s' + i, options))
	})
})


const setHeight = items => {
	let maxheight = 0

	items.forEach(el => {
		if (el.offsetHeight > maxheight) maxheight = el.offsetHeight
	})

	items.forEach(el => el.style.height = maxheight + 'px')
}