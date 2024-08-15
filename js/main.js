document.addEventListener('DOMContentLoaded', function(){
	
	//menu

	const burgerBtn = document.querySelector(".burger-btn")
	const headerNavbar = document.querySelector(".navbar")
	burgerBtn.addEventListener("click", () => {
		headerNavbar.classList.toggle("mobile-show")
	})

	//	catalog

	const showCatalog = document.querySelector(".show-catalog")
	const catalogList = document.querySelector(".catalog-list")
	const catalogListFullHeight = catalogList.offsetHeight
	const catalogListsShortHeight = catalogList.children[0].offsetHeight * 2 + 110
	catalogList.style.height = catalogListsShortHeight + "rem"
	showCatalog.addEventListener("click", (e) => {
		e.preventDefault()
		catalogList.style.height = catalogListFullHeight + "rem"
		catalogList.classList.add("show-all")
		showCatalog.classList.add("hide")
	})
	
	//	advantages slider
	const swiperExists = document.querySelector(".swiper")
	if ( swiperExists ) {
		const primarySlider = new Swiper('.swiper', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 115,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			}
		})
		document.querySelector(".swiper-button-next").click()
	}
	
	//	gallery

	Fancybox.bind("[data-fancybox]", {});

	const galleryItems = document.querySelectorAll(".gallery-item")
	const galleryCols = document.querySelectorAll(".gallery-col")
	const galleryMore = document.querySelector(".gallery-more")

	for (let i = 0; i < 3; i++ ) {
		for (let j = 0; j < 3; j++ ) {
			galleryCols[i].children[j].classList.add("show-item")
		}
		
	}

	galleryMore.addEventListener("click", (e) => {
		e.preventDefault()
		galleryItems.forEach((element) => {
			element.classList.add("show-item")
		})
		//galleryItems.classList.add("show-item")
		galleryMore.classList.add("hide")
	})
})