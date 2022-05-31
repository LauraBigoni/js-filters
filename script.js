// prendo gli elementi dal DOM
const submit = document.getElementById('submit');
let newImage = document.querySelector('input[type="url"]');

let image = document.querySelector('img');
let labels = document.querySelectorAll('label:not([for="image"])');
const filterControls = document.querySelectorAll('input[type="range"]');

// Creo una funzione per la validazione dell'url
function checkURL(url) {
  return (url.match(/\.(jpeg|jpg|gif|png|bmp|webp)$/) != null);
}

// Creo la funzione per caricare un immagine da un link
function changeImage() {
  if (checkURL(newImage.value)) {
    image.src = newImage.value;
  } else {
    alert('The image URL you provided is not valid. Please try again with another URL.');
  }
  newImage.value = '';
  image.setAttribute('style', '');
};

// Creo la funzione per i filtri
function applyFilter() {
  let filters = '';
  filterControls.forEach(function (item) {
    // Qui devo dare lo style all'immagine
    filters += item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ') ';
  });
  image.setAttribute('style', 'filter: ' + filters + ';');
  // console.log(filters);
  // console.log(image);
};

// Faccio comparire l'input range al click del label
for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener('click', function () {
    filterControls[i].classList.toggle("d-none");
  })
}