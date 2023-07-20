var personImage = document.querySelector('.person');
var headline1Image = document.querySelector('.headline1');
var headline2Image = document.querySelector('.headline2');
var subheadlineImage = document.querySelector('.subheadline');
var learnmoreImage = document.querySelector('.learnmore');
var logoImage = document.querySelector('.logo');
var replayImage = document.querySelector('.replay');

function fadeIn(element) {
	element.classList.remove('fade');
	element.classList.add('show');
}

function fadeOut(element) {
	element.classList.remove('show');
	element.classList.add('fade');
}

function slideIn(element) {
	element.classList.remove('slide-out');
	element.classList.add('slide-in');
}

function slideOut(element) {
	element.classList.remove('slide-in');
	element.classList.add('slide-out');
}

function slideRightIn1(element) {
	element.classList.remove('slideRightOut');
	element.classList.add('slideRightIn');
}

function slideRightOut1(element) {
	element.classList.remove('slideRightIn');
	element.classList.add('slideRightOut');
}

function slideLogoIn(element) {
	element.classList.remove('slideLogoOut');
	element.classList.add('slideLogoIn');
}

setTimeout(function () {
	fadeIn(personImage);

	setTimeout(function () {
		fadeOut(personImage);
		slideIn(headline1Image);

		setTimeout(function () {
			slideOut(headline1Image);
			slideRightIn1(headline2Image);

			setTimeout(function () {
				fadeIn(subheadlineImage);

				setTimeout(function () {
					fadeIn(learnmoreImage);

					setTimeout(function () {
						slideLogoIn(logoImage);

						setTimeout(function () {
							fadeIn(replayImage);
						}, 2000);
					}, 2000);
				}, 3000);
			}, 2000);
		}, 2000);
	}, 2000);
}, 2000);

function reloadSite() {
	location.reload();
}
