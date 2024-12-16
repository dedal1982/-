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
const calculationBtn = document.querySelector(".promo__text a");
const calculationPopup = document.querySelector(".calculation-popup");
const calculationBtnClose = document.querySelector(".calculation-close");

if (calculationBtn) {
  calculationBtn.addEventListener("click", () => {
    calculationPopup.classList.add("active");
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
