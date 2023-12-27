/// Animation när sidan startar

const welcome = document.querySelector(".header_js");
const headerImg = document.querySelector(".header__img");

const welcomeHome = () => {
  headerImg.classList.add("header_js");
  setTimeout(function () {
    headerImg.classList.remove("header_js");
  }, 1500);
  clearTimeout();
};

setTimeout(welcomeHome, 3000);

// Fixa knapparna till vän-anmälan

const progressSpan = document.querySelector(".progress span");
const buttons = document.querySelectorAll(".progress-btn");
const nextButton = document.querySelector(".disabled-btn");
let lastClickedButton = null;

let selectedValues = [];
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const value = button.value;
    selectedValues.push(value);
    console.log(selectedValues);
    progressSpan.style.width = "40%";

    button.disabled = true;
    if (lastClickedButton) {
      lastClickedButton.classList.remove("active");
    }

    button.classList.add("active");
    lastClickedButton = button;

    if (selectedValues) {
      nextButton.classList.remove("disabled-btn");
      nextButton.addEventListener("click", () => {
        // Handle the next button click (e.g., display results or proceed to the next step)
        console.log("Selected values:", selectedValues);
      });
    }
  });
});

nextButton.addEventListener("click", function () {
  nextButton.classList.add("active");
  let html = "";
  html += `<h2>Promenader eller bjuda på snacks?</h2>
  <div>
    <button id="snacks" class="progress-btn2 btn-margin-r" value="snacks">
      Snacks!
    </button>
    <button id="walks" class="progress-btn2" value="promenader">
      Promenader
    </button>
  </div>
  <div>
    

  <button class="progress1 back-btn">← Tillbaka</button>
  <button class="progress1 disabled-btn ">Nästa</button>  </div>`;
  let nextSlide = document.getElementById("new");
  nextSlide.innerHTML = html;
});

const buttons2 = document.querySelectorAll(".progress-btn2");

buttons2.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const value = button.value;
    selectedValues.push(value);
    console.log(selectedValues);
    progressSpan.style.width = "60%";

    button.disabled = true;
    if (lastClickedButton) {
      lastClickedButton.classList.remove("active");
    }

    button.classList.add("active");
    lastClickedButton = button;

    if (selectedValues) {
      nextButton.classList.remove("disabled-btn");
      nextButton.addEventListener("click", () => {
        // Handle the next button click (e.g., display results or proceed to the next step)
        console.log("Selected values:", selectedValues);
      });
    }
  });
});
