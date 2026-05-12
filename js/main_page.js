document.addEventListener('DOMContentLoaded', function() {
	// Persons
	document.querySelectorAll('.persons .btns .btn').forEach((btn, _, btns) => {
		btn.addEventListener('click', (e) => {
			e.preventDefault()

			if (btn.classList.contains('active')) return

			btns.forEach(b => b.classList.remove('active'))
			btn.classList.add('active')

			const persons = document.querySelectorAll('.persons .person')

			persons.forEach(p => p.classList.remove('show'))
			persons[Array.from(btns).indexOf(btn)]?.classList.add('show')
		})
	})


	// Clients
	let clismtsSwiper = new Swiper('.clients .swiper', {
		spaceBetween: 0,
		centeredSlides: true,
		speed: 6000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
		loop: true,
		slidesPerView: 'auto',
		allowTouchMove: false
	})


	// Directions
	document.querySelectorAll('.directions .btns .btn').forEach((btn, index, btns) => {
		btn.addEventListener('click', (e) => {
			e.preventDefault()

			if (btn.classList.contains('active')) return

			btns.forEach(b => b.classList.remove('active'))
			btn.classList.add('active')

			document.querySelectorAll('.directions .info').forEach(el => el.classList.remove('show'))
			document.querySelector(`.directions .info${index + 1}`)?.classList.add('show')
		})
	})


	// Why we
	const items = [
		{ el: document.querySelector('.why_we .item1'), speed: -0.2 },
		{ el: document.querySelector('.why_we .item2'), speed:  0.13  },
		{ el: document.querySelector('.why_we .item3'), speed: -0.25  },
		{ el: document.querySelector('.why_we .image_small'), speed: -0.1  },
	]

	function onScroll() {
		const section = document.querySelector('.why_we')
		const rect = section.getBoundingClientRect()
		const offset = window.innerHeight / 2 - rect.top - rect.height / 2

		items.forEach(({ el, speed }) => {
			if (window.innerWidth > 767) {
				el.style.transform = `translateY(${offset * speed}px)`
			} else {
				el.style.transform = ''
			}
		})
	}

	window.addEventListener('scroll', onScroll, { passive: true })
	onScroll()
})