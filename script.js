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

// Andra sidan frågor

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
    <button class="progress1 disabled-btn2 ">Nästa</button>
  </div>`;

  let nextSlide = document.getElementById("new");
  nextSlide.innerHTML = html;

  const buttons2 = document.querySelectorAll(".progress-btn2");
  const nextbutton2 = document.querySelector(".disabled-btn2");
  const img = document.querySelector(".cover");
  nextbutton2.classList.add("disabled-btn");

  buttons2.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const value = button.value;
      selectedValues.push(value);
      console.log(selectedValues);
      progressSpan.style.width = "60%";

      if (value === "snacks") {
        img.style.transform = "rotate(1050deg)";
      }

      button.disabled = true;

      if (lastClickedButton) {
        lastClickedButton.classList.remove("active");
      }

      button.classList.add("active");
      lastClickedButton = button;

      if (value === "promenader" || "snacks") {
        nextbutton2.classList.remove("disabled-btn");

        // tredje sidan frågor
        nextbutton2.addEventListener("click", () => {
          let html = "";
          html += `<h2>Ge hundgodis eller vanlig mat?</h2>
  <div>
    <button id="snacks" class="progress-btn3 btn-margin-r" value="snacks">
      Hundgodis
    </button>
    <button id="walks" class="progress-btn3" value="all">
      Vanlig mat
    </button>
  </div>
  <div>
    <button class="progress1 back-btn">← Tillbaka</button>
    <button class="progress1 disabled-btn3 ">Nästa</button>
  </div>`;

          let nextSlide = document.getElementById("new");
          nextSlide.innerHTML = html;

          const buttons3 = document.querySelectorAll(".progress-btn3");
          const nextbutton = document.querySelector(".disabled-btn3");
          const img = document.querySelector(".cover");
          nextbutton.classList.add("disabled-btn");

          /*  nextbutton2.classList.remove("disabled-btn2"); */
          buttons3.forEach((button) => {
            button.addEventListener("click", (e) => {
              e.preventDefault();
              const value = button.value;
              selectedValues.push(value);
              console.log(selectedValues);
              progressSpan.style.width = "90%";

              if (value === "all") {
                img.style.transform = "rotate(1050deg)";
              }

              button.disabled = true;

              if (lastClickedButton) {
                lastClickedButton.classList.remove("active");
              }

              button.classList.add("active");
              lastClickedButton = button;

              if (value === "snacks" || "all") {
                nextbutton.classList.remove("disabled-btn");
                nextbutton.addEventListener("click", () => {
                  // Handle the next button click (e.g., display results or proceed to the next step)
                  console.log("Selected values:", selectedValues);
                });
              }
            });
          });

          console.log("Selected values:", selectedValues);
        });
      }
    });
  });
});
