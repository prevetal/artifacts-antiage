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


	initProductsSliders()
})


window.addEventListener('resize', function () {
	initProductsSliders()
})


let productsSliders = []

function initProductsSliders() {
  const windowWidth = window.innerWidth
  const productsSections = document.querySelectorAll('.production_what .products')

  if (windowWidth < 1279) {
    productsSections.forEach(section => {
      const row = section.querySelector('.row')
      if (row) {
        Array.from(row.children).forEach(child => child.classList.add('swiper-slide'))

        row.classList.add('swiper-wrapper')
        row.classList.remove('row')

        const swipers = section.querySelectorAll('.swiper')
        swipers.forEach((swiperEl, i) => {
          swiperEl.classList.add('products_s' + i)

          const options = {
            loop: false,
            speed: 500,
            watchSlidesProgress: true,
            slideActiveClass: 'active',
            slideVisibleClass: 'visible',
            slidesPerView: 'auto',
            spaceBetween: 20,
            on: {
              init: swiper => {
                setHeight(swiper.el.querySelectorAll('.item'))
              },
              resize: swiper => {
                const items = swiper.el.querySelectorAll('.v')
                items.forEach(el => el.style.height = 'auto')

                setHeight(items)
              }
            }
          }

          productsSliders.push(new Swiper('.products_s' + i, options))
        })
      }
    })
  } else {
    productsSliders.forEach(slider => slider.destroy(true, true))
    productsSliders = []

    productsSections.forEach(section => {
      const wrapper = section.querySelector('.swiper-wrapper')
      if (wrapper) {
        wrapper.classList.add('row')
        wrapper.classList.remove('swiper-wrapper')

        Array.from(wrapper.children).forEach(child => child.classList.remove('swiper-slide'))
      }
    })
  }
}



const setHeight = items => {
	let maxheight = 0

	items.forEach(el => {
		if (el.offsetHeight > maxheight) maxheight = el.offsetHeight
	})

	items.forEach(el => el.style.height = maxheight + 'px')
}