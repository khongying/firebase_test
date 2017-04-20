(function () {

  const config = {
    apiKey: "AIzaSyBDKJQYw9Nd4LPwV_lOnAu0XyIoXOHXBU8",
    authDomain: "fruitmarket-4a3ab.firebaseapp.com",
    databaseURL: "https://fruitmarket-4a3ab.firebaseio.com",
    projectId: "fruitmarket-4a3ab",
    storageBucket: "fruitmarket-4a3ab.appspot.com",
    messagingSenderId: "630953631631"
  };
  firebase.initializeApp(config);

  //get elements
  const preObject = document.getElementById('object');
  const ulList = document.getElementById('list');


  const dbRefObject = firebase.database().ref().child('object');
  const dbRefList = dbRefObject.child('test')


dbRefObject.on('value', snap =>{
  preObject.innerText = JSON.stringify(snap.val(), null, 3);
});

  dbRefList.on('child_added', snap => {

    const li = document.createElement('li');
    li.innerText = snap.val();
    ulList.appendChild(li);

  });

}());
// Initialize Firebase




// function addOnClick(){
//   var email = document.getElementById('email');
//   var name = document.getElementById('name');
//
//   insertData(email.value,name.value);
// }
// window.onload=function() {
//   showData();
//
// }
// function showData() {
//   var firebaseRef=firebase.database().ref("users");
//   firebaseRef.once('value').then(function (dataSnapshot) {
//    dataSnapshot.forEach(function (childSnapshot) {
//      var childData = childSnapshot.val();
//       var email = childData.email
//       var name = childData.name;
//        //document.getElementById("demo").innerHTML = (email);
//        $("#demo").append(email+"<br>"+name+"<hr/><br>");
//
//
//    });
//   });
//
// }
// function insertData(email,name) {
//   var firebaseRef=firebase.database().ref("users");
//   firebaseRef.push({
//     email:email,
//     name:name
//   });
//   alert("Insert Success");
//
// }
