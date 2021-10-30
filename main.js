// init speech synth
const message = new SpeechSynthesisUtterance();
let voices = [];

//Get avolilabel voice

speechSynthesis.addEventListener("vaiceschanged", () => {
  voices = speechSynthesis.getVoices();
  loadVoices(voices);
  //console.log(voices);
});

//dow elements
const quotesElement = document.querySelector(".quotes");
const selectElement = document.querySelector(".custom_select");
const custom = document.querySelector(".custom");
const textareaElement = document.querySelector(".custom_textarea");

// rellenar con los voces selccionadas en
function loadVoices(voices) {
  voices.forEach((voice) => {
    const { name, lang } = voice;
    const optionElement = document.createElement("option");
    optionElement.innerText = `${name} - ${lang}`;
    optionElement.value = name;
    selectElement.appendChild(optionElement);
  });
}

// lista for change event on select
//function changeVoice
selectElement.addEventListener("change", (event) => {
  const name = event.target.value;
  const voice = voices.find((voice) => voice.name === name);
  message.voice = voice;
});

//Liste for form submission
custom.addEventListener("submit", (event) => {
  event.preventDefault();
  const customText = textareaElement.value;
  message.text = customText;
  speechSynthesis.speak(message);
});
// App dato
const quotes = [
  {
    text: "Te conviertes en lo que le das a tu atención»",
    author: "Epictecto",
  },
  {
    text: "«Las obras se tienen medio terminadas cuando se han comenzado bien.» ",
    author: "Séneca",
  },
  {
    text: "«Es esencial que recuerdes que la atención que le des a cualquier acción debe ser proporcional a su valor.»",
    author: "Marco Aurelio",
  },
  {
    text: "«No nos atrevemos a muchas cosas porque son difíciles, pero son difíciles porque no nos atrevemos a hacerlas».",
    author: "Séneca",
  },
  {
    text: "«Si logras algo bueno con trabajo duro, el trabajo pasa rápido, pero el bien perdura. Si haces algo vergonzoso en busca del placer, el placer pasa rápidamente, pero la vergüenza perdura.»",
    author: "Musonio Rufo",
  },
  {
    text: "«No te sabotees a ti mismo adoptando involuntariamente actitudes negativas e improductivas a través de tus relaciones con otros.»",
    author: "Epictecto",
  },
  {
    text: "«No hay viento favorable para el que no sabe donde va.»",
    author: "Séneca",
  },
  {
    text: "«¿No sabes que un buen hombre no hace nada por las apariencias, sino por hacer lo correcto?» ",
    author: "Epictecto",
  },
  {
    text: "«La mayoría de lo que hacemos y decimos no es esencial. Pregúntate en cada momento, ¿es esto necesario?» ",
    author: "Marco Aurelio",
  },
  {
    text: "«No es que tengamos poco tiempo, sino que perdemos mucho.»",
    author: "Séneca",
  },
  {
    text: "«Toma este momento. Sumérgete en sus detalles. Responde a esta persona, este desafío, esta acción. Deja las evasiones.» ",
    author: "Epictecto",
  },
  {
    text: "«En cada momento mantén la atención en la tarea que tienes entre manos. Realiza cada tarea como si fuera la última, evitando la distracción, el drama, la vanidad y la queja por tu situación.» ",
    author: "Marco Aurelio",
  },
  {
    text: "«Lo innecesario, aunque cueste solo un poco, es caro».",
    author: "Séneca",
  },
  {
    text: "«Que no te arrastren los accidentes exteriores; procúrate tiempo libre para aprender algo bueno y cesa ya de girar como un trompo.»  ",
    author: "Marco Aurelio",
  },
  {
    text: "«Largo es el camino de la enseñanza por medio de teorías; breve y eficaz por medio de la práctica»",
    author: "Séneca",
  },
];

// Lood qoutes in the Down
quotes.forEach((quote) => {
  const { text, author } = quote;
  //console.log(text, author);
  const qouteTemplate = `
    <section class="quote">
          <h2 class="quote_text">${text}</h2>
          <h5 class="qoute_author">${author}</h5>
    </section>`;
  quotesElement.innerHTML += qouteTemplate;
});

// lista for clicks on quotes
const quotesCollection = document.querySelectorAll(".quote");
quotesCollection.forEach((quoteElement) => {
  quoteElement.addEventListener("click", (event) => {
    message.text = event.target.innerText;
    speechSynthesis.speak(message);
  });
});
