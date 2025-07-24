const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variable pour suivre l'index de la slide actuelle
let currentSlideIndex = 0;

// Récupération des éléments flèches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Récupération du conteneur des dots
const dotsContainer = document.querySelector('.dots');

// Récupération des éléments à modifier
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');

// Génération des bullet points
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	
	// Le premier dot est sélectionné par défaut
	if (i === 0) {
		dot.classList.add('dot_selected');
	}
	
	dotsContainer.appendChild(dot);
}

// Fonction pour mettre à jour l'affichage du carrousel
function updateSlide(index) {
	// Mise à jour de l'image
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	
	// Mise à jour du texte
	bannerText.innerHTML = slides[index].tagLine;
	
	// Mise à jour des bullet points
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

// Ajout des event listeners sur les flèches
arrowLeft.addEventListener('click', function() {
	console.log('Clic sur la flèche gauche');
	
	// Si on est à la première slide, on va à la dernière
	if (currentSlideIndex === 0) {
		currentSlideIndex = slides.length - 1;
	} else {
		currentSlideIndex--;
	}
	
	updateSlide(currentSlideIndex);
});

arrowRight.addEventListener('click', function() {
	console.log('Clic sur la flèche droite');
	
	// Si on est à la dernière slide, on va à la première
	if (currentSlideIndex === slides.length - 1) {
		currentSlideIndex = 0;
	} else {
		currentSlideIndex++;
	}
	
	updateSlide(currentSlideIndex);
});
