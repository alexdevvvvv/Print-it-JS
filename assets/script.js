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

// Récupération des éléments flèches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Récupération du conteneur des dots
const dotsContainer = document.querySelector('.dots');

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

// Ajout des event listeners sur les flèches
arrowLeft.addEventListener('click', function() {
	console.log('Clic sur la flèche gauche');
});

arrowRight.addEventListener('click', function() {
	console.log('Clic sur la flèche droite');
});
