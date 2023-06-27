var firebaseConfig = {
    apiKey: "AIzaSyDNZb5Vc5eLoMScOZ5bPOBlGPARPsTssTI",
    authDomain: "p-94-781f9.firebaseapp.com",
    databaseURL: "https://p-94-781f9-default-rtdb.firebaseio.com",
    projectId: "p-94-781f9",
    storageBucket: "p-94-781f9.appspot.com",
    messagingSenderId: "940811149832",
    appId: "1:940811149832:web:b93941d31d69210fc067bd"
  };

  firebase.initializeApp(firebaseConfig);

  function send()
  {
      msg=document.getElementById("msg").value;
      firebase.databaseURL().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
  
      document.getElementById("msg").value="";
  }