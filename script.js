"use strict"

//*МЕНЮ БУРГЕР=================
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
//*============================


//*СЛАЙДЕР SWIPER===============
const swiper = new Swiper('.swiper', {
	//стрелки
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev'
	// },
	//буллеты
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		//динамисеские буллеты
		// dynamicBullets:true,
		//кастомные буллеты - цифры внутри буллета
		// renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// },
		//Фракция
		// type: 'fraction',
		//кастомный вывод фракции (показывает какой по счету слайд и сколько осталось)
		// renderFraction: function (currentClass, totalClass) {
		// 	return 'Фото <span class="' + currentClass + '"></span>' +
		// 	' из ' +
		// 	'<span class"' + totalClass + '"></span>';
		// },
		// type: 'progressbar'
		// },

		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// возможность перетаскивать скролл
		// 	draggable: true
	},

	//Переклюяение на след слайд при клике мышкой
	// slideToClickedSlide: true,

	//Управление клавиатурой
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	//управление колесом мыши
	mousewheel: {
		sensitivity: 1,
		// eventsTarget: "."
	},
	//автовысота
	autoHeight: true,

	//колисемтво слайдов для показа (можно дробное число)
	slidesPerView: 1,

	//отступы между слайдами
	spaceBetween: 40,

	//Количество пролистываемых страниц
	slidesPerGroup: 1,

	//активный слайд по центру
	// centeredSlides: true,

	//бесконечный прокрут
	// loop: true,

	//свободный режим- прокручиваешь на сколько сам хочешь
	// freeMode: true,

	//автопрокрутка
	// autoplay: {
	// 	delay: 1000,
	// 	stopOnLastSlide: true,
	//отключить после ручного переключения
	// 	disableOnInteraction: false
	// },

	// speed: 800,

	//вертикальный скролл 
	// direction: 'vertical',

	//эффект переключения слайдов
	// effect: 'fade',
	//дополнение к fade
	// fadeEffect: {
	// crossFade: true
	// },

	//Адаптив
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 	},
	// 	480: {
	// 		slidesPerView: 2,
	// 	},
	// 	992: {
	// 		slidesPerView: 3,
	// 	},
	// }
});