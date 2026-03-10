<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-storage.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAfzNKih4tBJulHl2nvUrqT57el14F1qEA",
    authDomain: "computerweb-e00b2.firebaseapp.com",
    databaseURL: "https://computerweb-e00b2-default-rtdb.firebaseio.com",
    projectId: "computerweb-e00b2",
    storageBucket: "computerweb-e00b2.appspot.com",
    messagingSenderId: "272175031990",
    appId: "1:272175031990:web:cca4e8f1966456bebde817",
    measurementId: "G-JM6CHF6NMK"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
  export const storage = getStorage(app);
  export const auth = getAuth(app);
  const analytics = getAnalytics(app);
</script>
