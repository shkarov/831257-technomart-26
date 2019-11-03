//модальное окно Напишите нам

 var writeusButton = document.querySelector("#write-us");
 var modalWindow = document.querySelector(".modal-writeus");
 var closeButton = document.querySelector(".modal-close");

 var form = modalWindow.querySelector("form");
 var userName = modalWindow.querySelector("[name=name]");
 var userEmail = modalWindow.querySelector("[name=email]");
 var userComment = modalWindow.querySelector("[name=comment]");

 var isStorageSupport = true;
 var storageName = "";
 var storageEmail = "";

 try {
   storageName = localStorage.getItem("userName");
   storageEmail = localStorage.getItem("userEmail");
 } catch (err) {
   isStorageSupport = false;
 }

 writeusButton.addEventListener("click", function (evt) {
   evt.preventDefault();
   modalWindow.classList.add("modal-show");
   if (storage) {
     userName.value = storageName;
     userEmail.value = storageEmail;
     userComment.focus();
   } else {
     userName.focus();
   }
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userComment.value) {
    evt.preventDefault();
    console.log("Нужно заполнить поля!");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

 window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     if (modalWindow.classList.contains("modal-show")) {
       modalWindow.classList.remove("modal-show");
     }
   }
});

// переключение сервисов

var serviceDelivery = document.querySelector("#services-list__delivery");
var serviceGuarantee = document.querySelector("#services-list__guarantee");
var serviceCredit = document.querySelector("#services-list__credit");

var serviceImage = document.querySelector(".service-container");

var serviceDeliveryBlock = document.querySelector(".services-delivery");
var serviceGuaranteeBlock = document.querySelector(".services-gaurantee");
var serviceCreditBlock = document.querySelector(".services-credit");

serviceDelivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!serviceDelivery.classList.contains("is-active")) {
    serviceDelivery.classList.add("is-active");
    serviceDeliveryBlock.classList.remove("display-off");
    if (serviceGuarantee.classList.contains("is-active")) {
      serviceGuarantee.classList.remove("is-active");
      serviceGuaranteeBlock.classList.add("display-off");
      serviceImage.classList.remove("guarantee");
    }
    if (serviceCredit.classList.contains("is-active")) {
      serviceCredit.classList.remove("is-active");
      serviceCreditBlock.classList.add("display-off");
      serviceImage.classList.remove("credit");
    }
    serviceImage.classList.add("delivery");
  }
});

serviceGuarantee.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!serviceGuarantee.classList.contains("is-active")) {
    serviceGuarantee.classList.add("is-active");
    serviceGuaranteeBlock.classList.remove("display-off");
    if (serviceDelivery.classList.contains("is-active")) {
      serviceDelivery.classList.remove("is-active");
      serviceDeliveryBlock.classList.add("display-off");
      serviceImage.classList.remove("delivery");
    }
    if (serviceCredit.classList.contains("is-active")) {
      serviceCredit.classList.remove("is-active");
      serviceCreditBlock.classList.add("display-off");
      serviceImage.classList.remove("credit");
    }
    serviceImage.classList.add("guarantee");
  }
});

serviceCredit.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!serviceCredit.classList.contains("is-active")) {
    serviceCredit.classList.add("is-active");
    serviceCreditBlock.classList.remove("display-off");
    if (serviceDelivery.classList.contains("is-active")) {
      serviceDelivery.classList.remove("is-active");
      serviceDeliveryBlock.classList.add("display-off");
      serviceImage.classList.remove("delivery");
    }
    if (serviceGuarantee.classList.contains("is-active")) {
      serviceGuarantee.classList.remove("is-active");
      serviceGuaranteeBlock.classList.add("display-off");
      serviceImage.classList.remove("guarantee");
    }
    serviceImage.classList.add("credit");
  }
});
//СЃР»Р°Р№РґРµСЂ

var sliderLeft = window.document.querySelector(".offers-slide__left");
var sliderRight = document.querySelector(".offers-slide__right");
var slideDrills = document.querySelector(".offers-slide__drills");
var slidePunchers = document.querySelector(".offers-slide__punchers");
var backgroundImage = document.querySelector(".offers-slider");

sliderLeft.addEventListener("click", switchSlider);
sliderRight.addEventListener("click", switchSlider);

function switchSlider(evt) {
  evt.preventDefault();
  if (backgroundImage.classList.contains("drills-img")) {
    backgroundImage.classList.remove("drills-img")
    backgroundImage.classList.add("punchers-img")
    slideDrills.classList.add("display-off");
    slidePunchers.classList.remove("display-off");
  } else {
    backgroundImage.classList.remove("punchers-img")
    backgroundImage.classList.add("drills-img")
    slidePunchers.classList.add("display-off");
    slideDrills.classList.remove("display-off");
  }
}

// modal window with map
var mapLink = document.querySelector(".we-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

//модальное окно Товар добавлен

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
// требуется переход на страницу оформления заказа
buttonCartOder.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCart.classList.remove("modal-show");
});

