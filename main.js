function logout(){
  firebase.auth().signOut()
      .then(function (response) {
        location.href="login.html";
      })
      .catch(function (error) {
        var errorMessage = error.message;
        alert(errorMessage);
      });    
}