document.addEventListener('DOMContentLoaded', function() {
	// Corporate gifts with us slider
	const corporateGiftsWithUsSliders = [],
		corporateGiftsWithUs = document.querySelectorAll('.corporate_gifts_with_us .swiper')

	corporateGiftsWithUs.forEach((el, i) => {
		el.classList.add('corporate_gifts_with_us_s' + i)

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

		corporateGiftsWithUsSliders.push(new Swiper('.corporate_gifts_with_us_s' + i, options))
	})


	// Tabs
	const locationHash = window.location.hash

	document.body.addEventListener('click', function(e) {
		const btn = e.target.closest('.tabs .btn')
		if (!btn) return

		e.preventDefault()

		if (!btn.classList.contains('active')) {
			const parent = btn.closest('.tabs_container')
			const activeTab = btn.dataset.content
			const activeTabContent = document.querySelector(activeTab)
			const level = btn.dataset.level

			parent.querySelector('.tabs').querySelectorAll('.btn').forEach(b => b.classList.remove('active'))
			parent.querySelectorAll(`.tab_content.${level}`).forEach(t => t.classList.remove('active'))

			btn.classList.add('active')
			activeTabContent.classList.add('active')
		}
	})

	if (locationHash && document.querySelector('.tabs_container')) {
		const activeTab = document.querySelector(`.tabs button[data-content="${locationHash}"]`)
		const activeTabContent = document.querySelector(locationHash)

		if (activeTab && activeTabContent) {
			const parent = activeTab.closest('.tabs_container')
			const level = activeTab.dataset.level

			parent.querySelector('.tabs').querySelectorAll('.btn').forEach(b => b.classList.remove('active'))
			parent.querySelectorAll(`.tab_content.${level}`).forEach(t => t.classList.remove('active'))

			activeTab.classList.add('active')
			activeTabContent.classList.add('active')

			const top = activeTabContent.getBoundingClientRect().top + window.scrollY
			window.scrollTo({ top, behavior: 'smooth' })
		}
	}
})


const setHeight = items => {
	let maxheight = 0

	items.forEach(el => {
		if (el.offsetHeight > maxheight) maxheight = el.offsetHeight
	})

	items.forEach(el => el.style.height = maxheight + 'px')
}