const body = document.querySelector("body");
const popup = document.querySelector(".popup-country");
const btn = document.querySelector(".country");
const popupClose = document.querySelector(".popup-country__button");

// Country modal
btn.addEventListener("click", (e) => {
  e.preventDefault();
  body.style.overflow = "hidden";
  popup.classList.add("active");
});

popupClose.addEventListener("click", () => {
  body.style.overflow = "visible";
  popup.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target == popup) {
    body.style.overflow = "visible";
    popup.classList.remove("active");
  }
});

// Offer modal
const orderButton = document.querySelector(".main__btn");
const popupOrder = document.querySelector(".popup-order");
const closeOrderButton = document.querySelector(".popup-order__close-btn");
const orderForm = document.getElementById("popup-order__form");

orderButton.addEventListener("click", (e) => {
  e.preventDefault();
  popupOrder.style.display = "flex";
});

closeOrderButton.addEventListener("click", () => {
  popupOrder.style.display = "none";
});

popupOrder.addEventListener("click", (e) => {
  if (e.target === popupOrder) {
    popupOrder.style.display = "none";
  }
});

orderForm.addEventListener("submit", function (event) {
  event.preventDefault();

  document.querySelector(".popup-order").style.display = "none";

  alert(
    "Ваша заявка в обработке, ожидайте, мы свяжемся с вами в течении недели!"
  );
});
