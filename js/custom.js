const customItems = document.querySelectorAll(".custom__item");
let customWrapper = document.querySelector(".custom");
let spinResultWrapper = document.querySelector(".spin-result-wrapper");
let orderBlock = document.querySelector("#order");
let discountWin = "50%";
let discount1 = "25%";
let discount2 = "10%";
customItems.forEach((toy) => { toy.addEventListener("click", brokenToy); });
document.querySelectorAll(".close-popup, .pop-up-button").forEach((el) => { el.onclick = () => { spinResultWrapper.style.display = "none"; }; });

function brokenToy(e) {
  let winToy = e.currentTarget;
  winToy.classList.add("open");
  winToy.innerHTML = discountWin;
  setTimeout(function () { winToy.classList.add("win"); }, 2300);
  let customItemsLost = [];
  for (let i = 0; i < customItems.length; i++) { if (!customItems[i].classList.contains("open")) { customItemsLost.push(customItems[i]); } }
  for (let i = 0; i < customItemsLost.length; i++) {
    setTimeout(function () {
      customItemsLost[i].classList.add("open");
      customItemsLost[0].innerHTML = discount1;
      customItemsLost[1].innerHTML = discount2;
      setTimeout(function () {
        spinResultWrapper.style.display = "block";
        setTimeout(function () {
          orderBlock.style.display = "block";
          customWrapper.style.display = "none";
          if (document.querySelector("#min")) { start_timer(); }
        }, 1000);
      }, 1000);
    }, 2000);
  }
  for (let j = 0; j < customItems.length; j++) { customItems[j].removeEventListener("click", brokenToy); }
}
const PopUpCss = document.createElement("style");
PopUpCss.innerHTML = `
.pop-up-window {
  position: absolute;
  max-width: 400px;
  width: 85%;
  margin: 0px auto;
  background: #ffffff none repeat scroll 0% 0%;
  text-align: center;
  padding: 10px;
  padding-top: 70px;
  padding-bottom: 20px;
  border-radius: 10px;
  animation: 0.7s ease 0s normal none 1 running pop-up-appear;
  right: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.close-popup {
  position: absolute;
  width: 30px;
  height: 30px;
  background-size: 100%;
  top: -40px;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 10px #fff;
  box-shadow: 0 0 10px #fff;
  right: -40px;
  cursor: pointer;
}
@keyframes pop-up-appear {
  0% {
    transform: translate(-50%, -2000px);
  }
  30% {
    transform: translate(-50%, 100px);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}
@media (max-width: 520px){
  .close-popup {
    right: 0 !important;
  }
}
 `;
var time = 1200;
var intr;

function start_timer() {
  intr = setInterval(tick, 1000);
}

function tick() {
  time = time - 1;
  var mins = Math.floor(time / 60);
  var secs = time - mins * 60;
  if (mins == 0 && secs == 0) {
    clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0" + secs;
  mins = mins >= 10 ? mins : "0" + mins;
  $("#min").html(mins);
  $("#sec").html(secs);
}