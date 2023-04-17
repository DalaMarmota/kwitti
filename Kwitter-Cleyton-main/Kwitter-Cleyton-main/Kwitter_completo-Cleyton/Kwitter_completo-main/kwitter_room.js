const firebaseConfig = {
  apiKey: "AIzaSyBciHFqqQz8LETkFnstQdwpmWeM8YoG_dw",
  authDomain: "kiwit-af668.firebaseapp.com",
  databaseURL: "https://kiwit-af668-default-rtdb.firebaseio.com",
  projectId: "kiwit-af668",
  storageBucket: "kiwit-af668.appspot.com",
  messagingSenderId: "329144973403",
  appId: "1:329144973403:web:4607ac4dec69238079277e"
};
firebase.initializeApp(firebaseConfig);
var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Bem vindo(a)"+user_name+"!";
function addRoom(){
    var room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adicionado nome da sala"
    })
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html"

}
function getData(){

 firebase.database().ref("/").on('value', function(snapshot){
    document.getElementById("output").innerHTML="";
    snapshot.forEach(function(chiLdSnapshot){
        childKey=chiLdSnapshot.key;
        Room_names=childKey;
        console.log("Nome da sala+Room_names");
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML+=row
    })
 })
}
getData()
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location="index.html";  
}