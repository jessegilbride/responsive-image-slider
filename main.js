const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
const slideCount = document.querySelector('.slider').children.length;
const slideCountProportion = 1/slideCount;
// console.log(slideCountProportion);
let direction;

navRight.addEventListener('click', function() {
	direction = -1;
	sliderContainer.style.justifyContent = 'flex-start';
	// slider.style.transform = 'translate(-'+(1/12)+'%)';
	slider.style.transform = 'translate(-'+(1/slideCountProportion)+'%)';
});

navLeft.addEventListener('click', function() {
	if (direction === -1) {
		direction = 1;
		slider.appendChild(slider.firstElementChild);
	}
	sliderContainer.style.justifyContent = 'flex-end';
	// slider.style.transform = 'translate('+(1/12)+'%)';
	slider.style.transform = 'translate('+(1/slideCountProportion)+'%)';
});

slider.addEventListener('transitionend', function() {
	if (direction === 1) {
		slider.prepend(slider.lastElementChild);
	} else {
		slider.appendChild(slider.firstElementChild);
	}
	slider.style.transition = 'none';
	slider.style.transform = 'translate(0)';
	setTimeout(() => {
		slider.style.transition = 'all 0.5s';
	})
}), false;
