document.addEventListener('DOMContentLoaded', function() {
    // Filter
	document.querySelectorAll('.articles .filter .label').forEach(label => {
		label.addEventListener('click', () => {
			const content = label.nextElementSibling;
      		if (!content) return

			const isOpen = content.classList.contains('show')

			label.classList.toggle('active')
			content.classList.toggle('show')

			if (isOpen) {
				content.style.height = content.scrollHeight + 'px'
				content.offsetHeight
				content.style.height = '0px'
			} else {
				content.style.height = content.scrollHeight + 'px'

				content.addEventListener('transitionend', function handler(e) {
					if (e.propertyName === 'height') {
						content.style.height = 'auto'

						content.removeEventListener('transitionend', handler)
					}
				})
			}
		})
	})


	const mobFilterBtn = document.querySelector('.articles .mob_filter_btn'),
		filter = document.querySelector('.articles .filter_wrap'),
		filterCloseBtn = document.querySelector('.articles .filter_wrap .close_btn'),
		filterOverlay = document.querySelector('.articles .filter_wrap .overlay')

	if (mobFilterBtn && filter) {
		mobFilterBtn.addEventListener('click', () => {
			mobFilterBtn.classList.add('active')
			filter.classList.add('show')
		})
	}

	if (filterCloseBtn) {
		filterCloseBtn.addEventListener('click', () => {
			mobFilterBtn.classList.remove('active')
			filter.classList.remove('show')
		})
	}

	if (filterOverlay) {
		filterOverlay.addEventListener('click', () => {
			mobFilterBtn.classList.remove('active')
			filter.classList.remove('show')
		})
	}
})