var firebaseConfig = {
    apiKey: "AIzaSyDoVSdYoyMAAtQgFru4Z_0TlptGsLmX3Y4",
  authDomain: "data-base-c3820.firebaseapp.com",
  projectId: "data-base-c3820",
  storageBucket: "data-base-c3820.appspot.com",
  messagingSenderId: "93328647847",
  appId: "1:93328647847:web:6af413b8dba5c0a9885d82",
  measurementId: "G-YH8XVWX77R"
  };
firebase.initializeApp(firebaseConfig);
var dbref=firebase.database().ref().child("Users");
function insertUser()
{
    var username=document.getElementById("uname").value;
    var phonenumber=document.getElementById("phno").value;
    dbref.child(username).set({
        User:username,
        PhoneNumber:phonenumber
    })
    console.log("data inserted");
    username="";
    password="";
}
function deleteUser()
{
	var name=document.getElementById("name").value;
    	dbref.child(name).remove();
}
function updateUser()
{
	 var username=document.getElementById("name").value;
    var new_phno=document.getElementById("email").value;
    db.child(username).update({
        PhoneNumber:ph_no
    })
}
function Display()
{
	dbref.on("value",(snap)=>{
        snap.forEach((data)=>{
            console.log(data.val())
        })
    })
}