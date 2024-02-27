let SignIn_Credentials = {
  // Set to false to prevent the sign in window to appear
  RequireSignIn: true, 
  // Password for said sign in window
  Password: '1234' 
}

function run(){
  document.getElementById("SignIn-Dialog-Content-Body-Form-Password").value = "";
  var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
  myModal.show();
}

// When the page is loaded, open the sign in window
window.onload = function (){
  if (SignIn_Credentials.RequireSignIn == true){
    run();
  }
}


// When the password is submitted, run this function
document.getElementById("SignIn-Dialog-Content-Body-Form").addEventListener("submit", function(event){
  // Prevents default submit action
  event.preventDefault();
  // Rehides the error message
  document.getElementById("SignIn-Dialog-Content-Body-Form-Password-Error").style.display = "none";
  // Gets the password value
  var password = document.getElementById("SignIn-Dialog-Content-Body-Form-Password").value;
  // Checks if the password is correct
  if(password != SignIn_Credentials.Password) {
    // Password incorrect - Show error message
    document.getElementById("SignIn-Dialog-Content-Body-Form-Password").value = "";
    document.getElementById("SignIn-Dialog-Content-Body-Form-Password-Error").style.display = "block";
  } else {
    // Password correct - Close window
    document.getElementById("SignIn-Dialog-Content-Close").click();
  }
});



// Disable right-click context menu
// document.addEventListener('contextmenu', function (e) {
//   // alert('⚠️ Sorry. Di muna pwede mag right click here ⚠️')
//   e.preventDefault();
// });
  
  // // Disable certain keyboard shortcuts
  // document.onkeydown = function(e) {
  //   // Disable F12
  //   if (e.key == 123) {
  //     e.preventDefault();
  //   }
  //   // Disable Ctrl+Shift+I
  //   if (e.ctrlKey && e.shiftKey && e.key == 'I') {
  //     e.preventDefault();
  //   }
  //   // Disable Ctrl+Shift+C
  //   if (e.ctrlKey && e.shiftKey && e.key == 'C') {
  //     e.preventDefault();
  //   }
  //   // Disable Ctrl+Shift+J
  //   if (e.ctrlKey && e.shiftKey && e.key == 'J') {
  //     e.preventDefault();
  //   }
  //   // Disable Ctrl+U
  //   if (e.ctrlKey && e.key == 'U') {
  //     e.preventDefault();
  //   }
  // };