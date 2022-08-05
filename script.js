const ADVICE_URL = "https://api.adviceslip.com/advice";
const adviceGeneratorButton = document.getElementById("advice-generator");
const adviceIdSpan = document.getElementById("advice-number");
const adviceQuote = document.getElementById("textContainer--quote");

// add event listener to the button
adviceGeneratorButton.addEventListener("click", generateAdvice);

// to generate a random advice from the beginning
generateAdvice();

//generate the advice id and advice quote to the container
function generateAdvice() {
  fetchAdvice().then((data) => {
    adviceIdSpan.innerHTML = data.slip.id;
    adviceQuote.innerHTML = `"${data.slip.advice}"`;
  });
}

// fetch advice
async function fetchAdvice() {
  let adviceSlip = await fetch(ADVICE_URL);
  let res = await adviceSlip.json();
  return res;
}
