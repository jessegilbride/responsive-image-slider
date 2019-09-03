const sliderContainer = document.querySelector('.slider-container')
const slider = document.querySelector('.slider');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
// const slideCount = slider.childNodes;
let direction;

navRight.addEventListener('click', function() {
	direction = "right";
	sliderContainer.style.justifyContent = 'flex-start';
	slider.style.transform = 'translate(-'+(1/12)+'%)';
});

navLeft.addEventListener('click', function {
	if (direction = "right") {
		direction = "left";
		slider.appendChild(slider.firstElementChild);
	}
	sliderContainer.style.justifyContent = 'flex-end';
	slider.style.transform = 'translate('+(1/12)+'%)';
});

slider.addEventListener('transitionend', function() {
	if (direction = "left") {
		slider.prepend(slider.lastElementChild);
	} else {
		slider.appendChild(slider.firstElementChild);
	}
	slider.style.transition = 'none';
	slider.style.transform = 'translate(0)';
	setTimeout(function() {
		slider.style transition = 'all 0.5s';
	})
}), false;