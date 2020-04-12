function login(){
    var email = document.getElementById('txtemail').value;
    var pass = document.getElementById('txtpassword').value;

    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(function (response) {
            obtenerPerfil();
            location.href="main.html";
        })
        .catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
    });     
}


function obtenerPerfil(){
    var user = firebase.auth().currentUser;

    if (user != null) {
    user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
    });
  }
}
