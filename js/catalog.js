//модальное окно “овар добавлен

var buttonBuyCollection = document.querySelectorAll(".catalog-item__buy");
var buttonBookmarkCollection = document.querySelectorAll(".catalog-item__bookmark");

var modalCart = document.querySelector(".modal-cart");
var btnClose = document.querySelector(".modal-close");

var buttonCartOder = document.querySelector(".cart-order");
var buttonCartBuy = document.querySelector(".cart-buy");

var linkBookmarks = document.querySelector(".header-top__bookmarks");
var linkBasket = document.querySelector(".header-top__basket");

buttonBuyCollection.forEach(function(item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    linkBasket.classList.add("goods-add");
    modalCart.classList.add("modal-show");
  });
});

buttonBookmarkCollection.forEach(function(item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    linkBookmarks.classList.add("goods-add");
  });
});

btnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (modalCart.classList.contains("modal-show")) {
    modalCart.classList.remove("modal-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalCart.classList.contains("modal-show")) {
      modalCart.classList.remove("modal-show");
    }
  }
});

buttonCartBuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCart.classList.remove("modal-show");
});
// требуетс€ переход на страницу оформлени€ заказа
buttonCartOder.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCart.classList.remove("modal-show");
});
