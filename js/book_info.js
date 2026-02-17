document.addEventListener('DOMContentLoaded', function() {
    // Tabs
	var locationHash = window.location.hash

	document.body.addEventListener('click', function (e) {
		const btn = e.target.closest('.tabs .btn')
		if (!btn) return

		e.preventDefault()

		if (btn.classList.contains('active')) return

		const parent = btn.closest('.tabs_container'),
			activeTab = btn.dataset.content,
			activeTabContent = document.querySelector(activeTab),
			level = btn.dataset.level

		parent.querySelectorAll('.tabs .btn')
			.forEach(el => el.classList.remove('active'))

		parent.querySelectorAll('.tab_content.' + level)
			.forEach(el => el.classList.remove('active'))

		btn.classList.add('active')

		if (activeTabContent) {
			activeTabContent.classList.add('active')
		}
	})


	// Book fragments slider
	const bookFragmentsSliders = [],
		bookFragments = document.querySelectorAll('.book_fragments .swiper')

	bookFragments.forEach((el, i) => {
		el.classList.add('book_fragments_s' + i)

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
			spaceBetween: 24,
			slidesPerView: 1
		}

		bookFragmentsSliders.push(new Swiper('.book_fragments_s' + i, options))
	})


	// Book about
	const switchActive = (selector, index) => {
		document.querySelectorAll(selector)
			.forEach(el => el.classList.remove('active'))

		const target = document.querySelector(selector + index)
		if (target) target.classList.add('active')
	}

	document.querySelectorAll('.book_about .bottom .btns .btn')
		.forEach((btn, i) => {
			btn.addEventListener('click', e => {
				e.preventDefault()

				const index = i + 1

				document
					.querySelectorAll('.book_about .bottom .btns .btn')
					.forEach(b => b.classList.remove('active'))

				btn.classList.add('active')

				switchActive('.book_about .bottom .price', index)
				switchActive('.book_about .info', index)
				switchActive('.book_about .image .picture', index)
			})
		})

})