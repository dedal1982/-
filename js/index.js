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
