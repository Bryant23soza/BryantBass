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
const btnSelect = document.getElementById("secretbutton");
const heigthChange = document.querySelector(".main-hidden-img");
const mediaEl = window.matchMedia("(max-width: 475px)");

const toggleHiddenEl = (domElement) => {
  if (domElement.style.display === "none") {
    domElement.style.display = "block";
    btnSelect.innerHTML = "remove content";
    heigthChange.style.height = "55vh";
    if (mediaEl.matches) {
      console.log("console view");
      heigthChange.style.height = "140vh";
    } else {
      console.log("Neta");
    }
  } else {
    domElement.style.display = "none";
    btnSelect.innerHTML = "More Content";
    heigthChange.style.height = "32vh";
  }
};

buttonEl.addEventListener("click", () => {
  toggleHiddenEl(imgEl);
});
