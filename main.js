import { db } from "firebase.js";
import { collection, getDocs, getDoc, doc, addDoc } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// Header
async function loadHeader() {
  const ref = doc(db, "settings", "header");
  const snap = await getDoc(ref);

  if (snap.exists()) {
    document.getElementById("logo").src = snap.data().logoURL;
    document.getElementById("centerName").innerText = snap.data().centerName;
  }
}

// Marquee
async function loadMarquee() {
  const ref = doc(db, "settings", "marquee");
  const snap = await getDoc(ref);

  if (snap.exists()) {
    document.getElementById("marqueeText").innerText = snap.data().text;
  }
}

// Slider
let sliderImages = [];
let index = 0;

async function loadSlider() {
  const querySnapshot = await getDocs(collection(db, "sliderImages"));

  querySnapshot.forEach(doc => {
    sliderImages.push(doc.data().url);
  });

  changeImage();
}

function changeImage() {
  if (sliderImages.length === 0) return;

  document.getElementById("sliderImage").src = sliderImages[index];
  index = (index + 1) % sliderImages.length;

  setTimeout(changeImage, 3000);
}

// Courses
async function loadCourses() {
  const container = document.getElementById("courses");
  const querySnapshot = await getDocs(collection(db, "courses"));

  querySnapshot.forEach(doc => {
    let course = doc.data();

    let div = document.createElement("div");
    div.className = "course-box";

    div.innerHTML = `
      <h3>${course.name}</h3>
      <p>Duration: ${course.duration}</p>
      <p>Fees: ${course.fees}</p>
    `;

    container.appendChild(div);
  });
}

// Map
async function loadMap() {
  const ref = doc(db, "settings", "location");
  const snap = await getDoc(ref);

  if (snap.exists()) {
    document.getElementById("mapFrame").src = snap.data().mapURL;
  }
}

// Contact Form
document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let message = document.getElementById("message").value;

  await addDoc(collection(db, "messages"), {
    name,
    mobile,
    message,
    time: new Date()
  });

  alert("Message Sent");
});

// Load everything
loadHeader();
loadMarquee();
loadSlider();
loadCourses();
loadMap();
