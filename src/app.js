const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Video Player
let listVideo = document.querySelectorAll(".video_list .vid");
let mainVideo = document.querySelector(".main_video video");
let title = document.querySelector(".main_video .title");

listVideo.forEach((video) => {
  video.onclick = () => {
    listVideo.forEach((vid) => vid.classList.remove("active"));
    video.classList.add("active");
    if (video.classList.contains("active")) {
      let src = video.children[0].getAttribute("src");
      mainVideo.src = src;
      let text = video.children[1].innerHTML;
      title.innerHTML = text;
    }
  };
});

const buttonEl = document.getElementById("secretbutton");
const imgEl = document.getElementById("hidden-img");

const toggleHiddenEl = (domElement) => {
  if (domElement.style.display === "none") {
    domElement.style.display = "block";
  } else {
    domElement.style.display = "none";
  }
};

buttonEl.addEventListener("click", () => {
  toggleHiddenEl(imgEl);
});