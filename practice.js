
// ADD YOUR FIREBASE LINKS
//import {initializeApp}  from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYSmuQieZuZNHkGpb9bTNPZsdJGrnnZ-Q",
  authDomain: "kwitter-b3169.firebaseapp.com",
  databaseURL: "https://kwitter-b3169-default-rtdb.firebaseio.com",
  projectId: "kwitter-b3169",
  storageBucket: "kwitter-b3169.appspot.com",
  messagingSenderId: "789159315652",
  appId: "1:789159315652:web:06c2219d464b4817eea191"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


