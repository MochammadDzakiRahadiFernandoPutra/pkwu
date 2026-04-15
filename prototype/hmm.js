// ===== SLIDER =====
let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumbs img");

function showSlide() {
  if (!mainImage) return;

  mainImage.src = images[index];

  thumbs.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) img.classList.add("active");
  });
}

function nextSlide() {
  index = (index + 1) % images.length;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  showSlide();
}

function setSlide(i) {
  index = i;
  showSlide();
}

// AUTO SLIDE
setInterval(() => {
  if (mainImage) nextSlide();
}, 3000);


// ===== SIDEBAR =====
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.classList.toggle("active");
  }
}


// ===== DATE SELECT =====
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

if (day && month && year) {

  // DAY
  for (let i = 1; i <= 31; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.text = i;
    day.appendChild(opt);
  }

  // MONTH
  const months = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
  months.forEach((m,i)=>{
    let opt = document.createElement("option");
    opt.value = i+1;
    opt.text = m;
    month.appendChild(opt);
  });

  // YEAR
  for (let i = 2025; i >= 1950; i--) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.text = i;
    year.appendChild(opt);
  }
}


// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  showSlide();
});

let interval = setInterval(nextSlide, 3000);

mainImage?.addEventListener("mouseenter", () => {
  clearInterval(interval);
});

mainImage?.addEventListener("mouseleave", () => {
  interval = setInterval(nextSlide, 3000);
});
