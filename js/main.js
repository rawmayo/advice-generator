// Get CTA button element
const ctaBtn = document.getElementById("cta-btn");

// Get initial advice when the window loads
window.addEventListener("load", getAdvice);

// Listen for a click event
ctaBtn.addEventListener("click", getAdvice);

// Get advice from the API
async function getAdvice() {
  // Get the element for the id and body
  const adviceId = document.querySelector(".advice-number");
  const adviceBody = document.querySelector(".advice-body");

  // Set inner text to loading
  adviceBody.innerText = "Getting advice...";
  adviceId.innerText = "";

  // Fetch advice from the API
  const req = await fetch("https://api.adviceslip.com/advice");
  const res = await req.json();

  // Store advice id and body
  let id = res.slip.id;
  let body = res.slip.advice;

  // Change inner text to the new data
  adviceId.innerText = `Advice #${id}`;
  adviceBody.innerText = `"${body}"`;
}
