import { db } from "./firebase.js";
import { doc, setDoc, addDoc, collection } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// SEED BUTTON
document.getElementById("seedBtn").addEventListener("click", async () => {

  await setDoc(doc(db, "settings", "header"), {
    centerName: "Mintu Computer Center",
    logoURL: "https://via.placeholder.com/200x100?text=LOGO"
  });

  await setDoc(doc(db, "settings", "marquee"), {
    text: "Admissions Open | New Batches Starting Soon"
  });

  await setDoc(doc(db, "settings", "location"), {
    mapURL: "https://www.google.com/maps/embed?pb=!1m14..."
  });

  await addDoc(collection(db, "sliderImages"), {
    url: "https://picsum.photos/1000/300?1"
  });

  await addDoc(collection(db, "sliderImages"), {
    url: "https://picsum.photos/1000/300?2"
  });

  await addDoc(collection(db, "courses"), {
    name: "Basic Computer",
    duration: "3 Months",
    fees: "2000"
  });

  await addDoc(collection(db, "courses"), {
    name: "Web Designing",
    duration: "6 Months",
    fees: "5000"
  });

  alert("Demo data inserted ✅ Now open your website.");
});

// HEADER UPDATE
document.getElementById("updateHeader").addEventListener("click", async () => {
  await setDoc(doc(db, "settings", "header"), {
    centerName: centerName.value,
    logoURL: logoURL.value
  });
  alert("Header Updated");
});

// MARQUEE UPDATE
document.getElementById("updateMarquee").addEventListener("click", async () => {
  await setDoc(doc(db, "settings", "marquee"), {
    text: marqueeText.value
  });
  alert("Marquee Updated");
});

// COURSE ADD
document.getElementById("addCourse").addEventListener("click", async () => {
  await addDoc(collection(db, "courses"), {
    name: courseName.value,
    duration: courseDuration.value,
    fees: courseFees.value
  });
  alert("Course Added");
});

// MAP UPDATE
document.getElementById("updateMap").addEventListener("click", async () => {
  await setDoc(doc(db, "settings", "location"), {
    mapURL: mapURL.value
  });
  alert("Map Updated");
});
