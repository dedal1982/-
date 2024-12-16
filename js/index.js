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

//открытие формы расчета стоимости
const calculationBtn = document.querySelectorAll(
  ".promo__text a,.discussion__text a"
);
const calculationPopup = document.querySelector(".calculation-popup");
const calculationBtnClose = document.querySelector(".calculation-close");

if (calculationBtn) {
  calculationBtn.forEach((item) => {
    item.addEventListener("click", (ev) => {
      ev.preventDefault();
      calculationPopup.classList.add("active");
    });
  });
}

if (calculationBtnClose) {
  calculationBtnClose.addEventListener("click", () => {
    calculationPopup.classList.remove("active");
  });
}

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
