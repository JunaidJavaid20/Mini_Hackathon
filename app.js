import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth , signInWithEmailAndPassword , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAHqsR2hM72io5dVaSVSZqAGng_V8bwAm4",
    authDomain: "data-base-65549.firebaseapp.com",
    projectId: "data-base-65549",
    storageBucket: "data-base-65549.appspot.com",
    messagingSenderId: "420195172782",
    appId: "1:420195172782:web:dd931a3ae4147fcd08883f",
    measurementId: "G-960Z1ZS5C6"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



let lbtn = document.getElementById("lbtn")
lbtn.addEventListener("click",()=>{
    let  email = document.getElementById("lemail").value
    let password = document.getElementById("lpass").value
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
 
    const user = userCredential.user;
    console.log(user.email)
    alert("User Login Successfully")
    location.href = "./welcome.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode , errorMessage)
    alert("Incorrect password");
  });
});



let btn = document.getElementById("sbtn")
btn.addEventListener("click",()=>{
    let email = document.getElementById("semail").value
    let password = document.getElementById("spass").value
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user.email)
    alert("Success")
    location.href = "./welcome.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode , errorMessage)
});
}) ;  

