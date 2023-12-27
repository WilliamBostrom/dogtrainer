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

const startPage = function () {
  let html = "";
  html += `  <h2>Vad kan du hjälpa dig med?</h2>
  <div>
    <button id="walk" class="progress-btn btn-margin-r" value="walk">
      Gå promenad
    </button>
    <button id="pet" class="progress-btn" value="pet">
      Klappa mig
    </button>
  </div>
  <div>
    <button id="food" class="progress-btn btn-margin-r" value="food">
      Ge mig snacks
    </button>
    <button id="all" class="progress-btn" value="all">
      Alla samtidigt
    </button>
  </div>
  <button class="progress1 disabled-btn">Nästa</button>`;

  let nextSlide = document.getElementById("new");
  nextSlide.innerHTML = html;
};

startPage();

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
              setTimeout(welcomeHome, 1000);
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
                html += `<h2>Hundgodis eller vanlig mat?</h2>
  <div>
    <button id="snacks" class="progress-btn3 btn-margin-r" value="snack">
      Hundgodis
    </button>
    <button id="food" class="progress-btn3" value="all">
      Vanlig mat
    </button>
  </div>
  <div>
    
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

                    if (value === "snack") {
                      setTimeout(welcomeHome, 1000);
                      img.style.transform = "rotate(1050deg)";
                    } else {
                      setTimeout(welcomeHome, 1000);
                      img.style.transform = "rotate(-1110deg)";
                    }

                    button.disabled = true;

                    if (lastClickedButton) {
                      lastClickedButton.classList.remove("active");
                    }

                    button.classList.add("active");
                    lastClickedButton = button;

                    if (value === "snacks" || "all") {
                      setTimeout(welcomeHome, 1000);
                      nextbutton.classList.remove("disabled-btn");
                      nextbutton.addEventListener("click", () => {
                        nextButton.classList.add("active");

                        let html = "";
                        html += `<h2>Varför vill du bli min vän?</h2>
                  <div>
                    <textarea rows="4" id="motivation" value="motivation"> Har alltid velat men inte vågat ansöka förens nu...
                    </textarea>
        
                  </div>
                  <div>
                    
                    <button class="progress1 disabled-btn4 ">Nästa</button>
                  </div>`;

                        let nextSlide = document.getElementById("new");
                        nextSlide.innerHTML = html;

                        const nextbutton3 =
                          document.querySelector(".disabled-btn4");
                        nextbutton3.addEventListener("click", function () {
                          const textArea =
                            document.getElementById("motivation");
                          const textAreavalue = textArea.innerHTML;
                          selectedValues.push(textAreavalue);
                          setTimeout(welcomeHome, 3000);

                          let html = "";
                          html += `<h2>Tack för din ansökan, voff!</h2>
                  <div>
                    <h3 class="h2" > Just nu är vänlistan full...
                    </h3>
                    <div class="center">
                          <p class="contact-me">Kontakta mig på instagram ifall du vill skicka snacks</p>
                          <a target="_blank" href="https://www.instagram.com/lokethestaffy/"> <img src="images/instagram.svg" alt="instagram" class="moveInBottom" /></a>
                 </div>
                          </div>
                 `;

                          let nextSlide = document.getElementById("new");
                          nextSlide.innerHTML = html;

                          progressSpan.style.width = "100%";
                          progressSpan.style.borderRadius = "50px";
                        });
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
    }
  });
});

const nextbutton3 = document.querySelector(".disabled-btn4");
nextbutton3.addEventListener("click", function () {
  let html = "";
  html += `<h2>Tack för din ansökan!</h2>
                  <div>
                    <h2>Just nu är det många som ansöker, ifall du vill nå mig så är det smidigast att skriva på instagram. </h2>
        
                  </div>
                  <div>
                    
                    <button class="progress1 disabled-btn4 ">Nästa</button>
                  </div>`;

  let nextSlide = document.getElementById("new");
  nextSlide.innerHTML = html;
});
