  const timelineContainer = document.querySelector('.single-timeline-area .row');
  const firstCard = document.getElementById('tarjeta1');

  const nuevaTarjeta = document.querySelectorAll('.single-timeline-area .row .col-12:nth-child(n+2)');
  firstCard.addEventListener('mouseenter', mostrarTarjeta);
  firstCard.addEventListener('mouseleave', esconderTarjeta);

let mostrarTarjetaEjecutado = false;
function mostrarTarjeta() {
    if (!mostrarTarjetaEjecutado) {
      nuevaTarjeta.forEach(tarjeta => {
        tarjeta.style.display = 'block';
      });
      for (let i = 1; i <= 5; i++) {
        const apiUrl = `https://swapi.dev/api/people/${i}`;
        createTimelineCard(apiUrl);
    }
    mostrarTarjetaEjecutado = true;
  }
}

function esconderTarjeta() {
  nuevaTarjeta.forEach((tarjeta, index) => {
    if (index >= 1) {
      tarjeta.style.display = 'none';
    }
  });
}
  function createTimelineCard(apiUrl) {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'col-12 col-md-6 col-lg-4';

        const contenidoTarjeta = document.createElement('div');
        contenidoTarjeta.className = 'single-timeline-content d-flex wow fadeInLeft';
        contenidoTarjeta.setAttribute('data-wow-delay', '0.3s');
        contenidoTarjeta.setAttribute('style', 'visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;');

        const timelineIcon = document.createElement('div');
        timelineIcon.className = 'timeline-icon';
        timelineIcon.innerHTML = '<i class="" aria-hidden="true"></i>';

        const timelineText = document.createElement('div');
        timelineText.className = 'timeline-text';

        const timelineTitle = document.createElement('h6');
        timelineTitle.textContent = data.name;

        const timelineDescription = document.createElement('p');
        timelineDescription.textContent = `Estatura: ${data.height} cm, Peso: ${data.mass} kg`;

        timelineText.appendChild(timelineTitle);
        timelineText.appendChild(timelineDescription);
        contenidoTarjeta.appendChild(timelineIcon);
        contenidoTarjeta.appendChild(timelineText);
        tarjeta.appendChild(contenidoTarjeta);
        timelineContainer.appendChild(tarjeta);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }


/* SEGUNDO DESPLIEGUE */

  const timelineContainer2 = document.getElementById('cuek') /* document.querySelector('.single-timeline-area .row'); */
  const firstCard2 = document.getElementById('tarjeta2');

  const nuevaTarjeta2 = document.querySelectorAll('.single-timeline-area .row .col-12:nth-child(n+2)');
  firstCard2.addEventListener('mouseenter', mostrarTarjeta2);
  firstCard2.addEventListener('mouseleave', esconderTarjeta2);

let mostrarTarjetaEjecutado2 = false;
function mostrarTarjeta2() {
    if (!mostrarTarjetaEjecutado2) {
      nuevaTarjeta.forEach(tarjeta => {
        tarjeta.style.display = 'block';
      });
      for (let i = 6; i <= 10; i++) {
        const apiUrl = `https://swapi.dev/api/people/${i}`;
        createTimelineCard2(apiUrl);
    }
    mostrarTarjetaEjecutado2 = true;
  }
}
function esconderTarjeta2() {
  nuevaTarjeta.forEach((tarjeta, index) => {
    if (index >= 1) {
      tarjeta.style.display = 'none';
    }
  });
}


function createTimelineCard2(apiUrl) {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const tarjeta = document.createElement('div');
      tarjeta.className = 'col-12 col-md-6 col-lg-4';

      const contenidoTarjeta = document.createElement('div');
      contenidoTarjeta.className = 'single-timeline-content d-flex wow fadeInLeft';
      contenidoTarjeta.setAttribute('data-wow-delay', '0.3s');
      contenidoTarjeta.setAttribute('style', 'visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;');

      const timelineIcon = document.createElement('div');
      timelineIcon.className = 'timeline-icon2';
      timelineIcon.innerHTML = '<i class="" aria-hidden="true"></i>';

      const timelineText = document.createElement('div');
      timelineText.className = 'timeline-text';

      const timelineTitle = document.createElement('h6');
      timelineTitle.textContent = data.name;

      const timelineDescription = document.createElement('p');
      timelineDescription.textContent = `Estatura: ${data.height} cm, Peso: ${data.mass} kg`;

      timelineText.appendChild(timelineTitle);
      timelineText.appendChild(timelineDescription);
      contenidoTarjeta.appendChild(timelineIcon);
      contenidoTarjeta.appendChild(timelineText);
      tarjeta.appendChild(contenidoTarjeta);
      timelineContainer2.appendChild(tarjeta);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

/* TERCER DESPLIEGUE */


const timelineContainer3 = document.getElementById('cuek3') /* document.querySelector('.single-timeline-area .row'); */
const firstCard3 = document.getElementById('tarjeta3');

const nuevaTarjeta3 = document.querySelectorAll('.single-timeline-area .row .col-12:nth-child(n+2)');
firstCard3.addEventListener('mouseenter', mostrarTarjeta3);
firstCard3.addEventListener('mouseleave', esconderTarjeta3);

let mostrarTarjetaEjecutado3 = false;
function mostrarTarjeta3() {
  if (!mostrarTarjetaEjecutado3) {
    nuevaTarjeta.forEach(tarjeta => {
      tarjeta.style.display = 'block';
    });
    for (let i = 11; i <= 15; i++) {
      const apiUrl = `https://swapi.dev/api/people/${i}`;
      createTimelineCard3(apiUrl);
  }
  mostrarTarjetaEjecutado3 = true;
}
}
function esconderTarjeta3() {
nuevaTarjeta.forEach((tarjeta, index) => {
  if (index >= 1) {
    tarjeta.style.display = 'none';
  }
});
}


function createTimelineCard3(apiUrl) {
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'col-12 col-md-6 col-lg-4';

    const contenidoTarjeta = document.createElement('div');
    contenidoTarjeta.className = 'single-timeline-content d-flex wow fadeInLeft';
    contenidoTarjeta.setAttribute('data-wow-delay', '0.3s');
    contenidoTarjeta.setAttribute('style', 'visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;');

    const timelineIcon = document.createElement('div');
    timelineIcon.className = 'timeline-icon3';
    timelineIcon.innerHTML = '<i class="" aria-hidden="true"></i>';

    const timelineText = document.createElement('div');
    timelineText.className = 'timeline-text';

    const timelineTitle = document.createElement('h6');
    timelineTitle.textContent = data.name;

    const timelineDescription = document.createElement('p');
    timelineDescription.textContent = `Estatura: ${data.height} cm, Peso: ${data.mass} kg`;

    timelineText.appendChild(timelineTitle);
    timelineText.appendChild(timelineDescription);
    contenidoTarjeta.appendChild(timelineIcon);
    contenidoTarjeta.appendChild(timelineText);
    tarjeta.appendChild(contenidoTarjeta);
    timelineContainer3.appendChild(tarjeta);
  })
  .catch(error => {
    console.log('Error:', error);
  });
}