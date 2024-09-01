"use strict"

// const iconMenu = document.querySelector('.menu-test');
// if (iconMenu) {
// 	const menuBody = document.querySelector('.header-right__buttons');
// 	iconMenu.addEventListener("click", function (e) {
// 		document.body.classList.toggle('_lock');
// 		iconMenu.classList.toggle('_active');
// 		menuBody.classList.toggle('_active');
// 	});
// }


//==
const iconMenu = document.querySelector('.menu-test');
const menuBody = document.querySelector('.header-right__buttons');

document.addEventListener('click', menu);

function menu(event) {
	if (event.target.closest('.menu-test')) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	}
	if (!event.target.closest('.menu-test')) {
		document.body.classList.remove('_lock');
		iconMenu.classList.remove('_active');
		menuBody.classList.remove('_active');
	}
}
//==


//*СЛАЙДЕР SWIPER===============
new Swiper('.main-swiper', {
	pagination: {
		el: "#swiper-1 .swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 3000,
	},
	speed: 3000,
	loop: true,
	effect: 'fade',
	//дополнение к fade
	// fadeEffect: {
	// crossFade: true
	// },
}),


	new Swiper(".routes__slider", {
		//стрелки
		navigation: {
			nextEl: '.custom-ar-right',
			prevEl: '.custom-ar-left'
		},
		//буллеты
		pagination: {
			el: '.swiper-routes-number',
			type: 'fraction',
		},

		slidesPerView: 3.5,
		spaceBetween: 5,
		centeredSlides: true,
		loop: true,
		autoplay: {
			delay: 1300,
			disableOnInteraction: false
		},
		speed: 1300,

		breakpoints: {
			320: {
				slidesPerView: 1.3,
			},
			480: {
				slidesPerView: 3,
				centeredSlides: true
			},
			993: {
				slidesPerView: 3.6,
			},
		}
	});




new Swiper(".review__slider", {
	//стрелки
	navigation: {
		nextEl: '.custom-ar-right',
		prevEl: '.custom-ar-left'
	},
	//буллеты
	pagination: {
		el: '.swiper-review-number',
		type: 'fraction',
	},

	// autoHeight: true,

	//количеcтво слайдов для показа (можно дробное число)
	slidesPerView: 3,

	//отступы между слайдами
	spaceBetween: 22,

	//Количество пролистываемых страниц
	slidesPerGroup: 2,

	loop: true,

	//свободный режим- прокручиваешь на сколько сам хочешь
	freeMode: true,

	speed: 1300,


	//Адаптив
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		993: {
			slidesPerView: 2,
		},
		1440: {
			slidesPerView: 3,
		},
	}
});