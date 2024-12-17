const playButton = document.querySelector(".warranty__play img");
const videoPopup = document.querySelector(".video-popup");
const playButtonClose = document.querySelector(".video-wrapper img");

if (playButton) {
  playButton.addEventListener("click", () => {
    videoPopup.classList.add("active");
  });
}

if (playButtonClose) {
  playButtonClose.addEventListener("click", () => {
    videoPopup.classList.remove("active");
  });
}

//переключение табов / мапа
//функция переключения табов
const makeCodeUniversal = (
  tabItemsQuery,
  formItemsQuery,
  tabClassName = "active"
) => {
  const tabItems = Array.from(document.querySelectorAll(tabItemsQuery));
  const formItems = Array.from(document.querySelectorAll(formItemsQuery));

  const clearActiveTabs = (element) => {
    element.find((item) => item.classList.remove(tabClassName));
  };

  const setActiveTab = (element, index) => {
    element[index].classList.add(tabClassName);
  };

  const chekTab = (item, index) => {
    item.addEventListener("click", () => {
      clearActiveTabs(tabItems);
      clearActiveTabs(formItems);

      setActiveTab(tabItems, index);
      setActiveTab(formItems, index);
    });
  };
  tabItems.forEach(chekTab);
};

makeCodeUniversal(".map__tab", ".map__page");

const calculationPopup = document.querySelector(".calculation-popup");
const theBellPopup = document.querySelector(".the-bell-popup");
const calculationBtnClose = document.querySelector(".calculation-close");
const theBellBtnClose = document.querySelector(".the-bell-close");

function addActiveClassOnClick(triggerSelector, targetSelector) {
  const triggerElement = document.querySelector(triggerSelector);
  const targetElement = document.querySelector(targetSelector);

  if (triggerElement && targetElement) {
    triggerElement.addEventListener("click", function (ev) {
      ev.preventDefault();
      targetElement.classList.add("active");
    });
  }
}
addActiveClassOnClick(".promo__text a", ".calculation-popup");
addActiveClassOnClick(".discussion__text a", ".the-bell-popup");

function closePopup(button, popupClass) {
  if (button) {
    button.addEventListener("click", () => {
      popupClass.classList.remove("active");
    });
  }
}

// Пример использования
closePopup(calculationBtnClose, calculationPopup);
closePopup(theBellBtnClose, theBellPopup);

//соглашение на обработку перс. данных
const agreementBtn = document.querySelector(".calculation-agreement");
const agreementCheck = document.querySelector(".calculation-agreement span");
const calculationSubmitButton = document.querySelector(".calculation-btn");

if (agreementBtn) {
  agreementBtn.addEventListener("click", () => {
    if (agreementCheck.classList.contains("active")) {
      agreementCheck.classList.remove("active");
      calculationSubmitButton.classList.remove("active");
    } else {
      agreementCheck.classList.add("active");
      calculationSubmitButton.classList.add("active");
    }
  });
}

//маска ввода телефона в инпут
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(
    document.querySelectorAll('input[type="tel"]'),
    function (input) {
      let keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) : a;
          });
        i = new_value.indexOf("_");
        if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i);
        }
        let reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
          !reg.test(this.value) ||
          this.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
        ) {
          this.value = new_value;
        }
        if (event.type == "blur" && this.value.length < 5) {
          this.value = "";
        }
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
    }
  );
});
