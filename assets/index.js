let SignIn_Credentials = {
  // Set to false to prevent the sign in window to appear
  RequireSignIn: true, 
  // Password for said sign in window
  Password: '1234',
  // If set to true, the user will only enter the pasword once per browser session; set to false if you want the user to enter the password every time they open index.html
  SignInPerSession: false,
}

function run(){
  document.getElementById("SignIn-Dialog-Content-Body-Form-Password").value = "";
  var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
  myModal.show();
}

// When the page is loaded, open the sign in window
window.onload = function (){
  if (SignIn_Credentials.RequireSignIn == true){
    // If RequireSignIn is true, check if SignInPerSession is true
    if (SignIn_Credentials.SignInPerSession == true){
      // If SignInPerSession is true, get the "SAP_UserHasSignedIn" from session storage
      var Session_UserHasSignedIn = sessionStorage.getItem('SAP_UserHasSignedIn');
      // If "SAP_UserHasSignedIn" doesn't exist (null), then the user has only opened the page for the first time since the browser has started
      if (Session_UserHasSignedIn == null){
        // Set "SAP_UserHasSignedIn" to true to save it to session storage; the next refresh of the page will not trigger run();
         sessionStorage.setItem("SAP_UserHasSignedIn", "true");
         run();
      } else {
        SubjectList_GetManifestData(SubjectList_ManifestFileURL);
      }
    } else {
    run();
    }
  } else {
    SubjectList_GetManifestData(SubjectList_ManifestFileURL);
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
    SubjectList_GetManifestData(SubjectList_ManifestFileURL);
  }
});


// Object that contains the subject list
let SubjectList = {};
// URL to the .json file 
let SubjectList_ManifestFileURL = "./../SAP-Subject-Manifest.json";

// Gets the manifest file and returns the data
async function SubjectList_FetchManifest(URL) {
  try {
    const JSON_File = await fetch(URL);
    const JSON_Data = await JSON_File.json();
    return JSON_Data;
  } catch (error) {
    console.error("SubjectList_FetchManifest failed to fetch the manifest file.");
    return null;
  }
}

// Gets the manifest file and stores the data to SubjectList
SubjectList_FetchManifest(SubjectList_ManifestFileURL)
    .then(data => {
        if (data !== null) {
            SubjectList = data;
        }
    })
    .catch(error => {
        console.error('Error fetching JSON file:', error);
    });

// This is used by other functions to get the manifest data
async function SubjectList_GetManifestData(SubjectList_ManifestFileURL) {
  try {
    const data = await SubjectList_FetchManifest(SubjectList_ManifestFileURL);
    SubjectList_Generate_List();
    return data;
  } catch (error) {
    console.error('Error getting manifest data:', error);
    return null;
  }
}

// Generates the subject list
function SubjectList_Generate_List(){
  var SubjectList_Card_ID;
  var SubjectList_Card_Thumbnail;
  var SubjectList_Card_Name;
  
  for (a = 0; a < SubjectList.Subject.length; a++){
    SubjectList_Card_ID = SubjectList.Subject[a].Subject_ID;
    SubjectList_Card_Thumbnail = SubjectList.Subject[a].Subject_Thumbnail;
    SubjectList_Card_Name = SubjectList.Subject[a].Subject_Name;

    const SubjectList_Card_HTML = `
      <div class="card text-center">
          <img class="card-img-top" src="${SubjectList_Card_Thumbnail}" alt="Subject thumbnail image" style="opacity: 0" onload="this.style.opacity = '1'; this.style.transition = '0.3s'" loading='lazy' draggable='false'>
          <div class="card-body card-body-b">
              <h5 class="card-title">${SubjectList_Card_Name}</h5>
              <!--<a href="./inte_prog/prelims/prelims.html" class="btn card-button">Prelims</a>
              <a href="#" class="btn card-button">Midterms</a>
              <a href="#" class="btn card-button">Pre-Finals</a>
              <a href="#" class="btn card-button">Finals</a>-->
          </div>
      </div>
    `;

    var SubjectList_Card = document.createElement('div');
    SubjectList_Card.setAttribute("class", "card-section col-12 col-sm-6 col-lg-3 mb-4 SubjectList_Card");
    SubjectList_Card.setAttribute("onclick", `SubjectList_Generate_ModuleList(${a})`);
    SubjectList_Card.innerHTML = SubjectList_Card_HTML;
    SubjectList_Card.style.animationDelay = 0.1 + (a / 10) + "s";
    document.getElementById("SubjectList_List").appendChild(SubjectList_Card);
  }
}

// Generates the module list
function SubjectList_Generate_ModuleList(ID){
  document.getElementById("SubjectModuleList_SubjectTitle").innerText = SubjectList.Subject[ID].Subject_Name;
  document.getElementById("SubjectModuleList_List").innerHTML = '';

  for (a = 0; a < SubjectList.Subject[ID].Subject_SubFolders.length; a++){
    var SubjectModuleList_Item_Name = SubjectList.Subject[ID].Subject_SubFolders[a].Name;
    var SubjectModuleList_Item_Link = SubjectList.Subject[ID].Subject_SubFolders[a].Link;
    var SubjectModuleList_Item_Status = SubjectList.Subject[ID].Subject_SubFolders[a].Status;
    var SubjectModuleList_Item_LastModified = SubjectList.Subject[ID].Subject_SubFolders[a].LastModified;

    if (SubjectModuleList_Item_Status == "Active"){
      var SubjectModuleList_Item_Name = SubjectList.Subject[ID].Subject_SubFolders[a].Name;
      var SubjectModuleList_Item_Link = SubjectList.Subject[ID].Subject_SubFolders[a].Link;
      var SubjectModuleList_Item_LastModified = SubjectList.Subject[ID].Subject_SubFolders[a].LastModified;
      const SubjectModuleList_Item_HTML_Active = `
          <div class="SubjectModuleList_List_Item" Status="Active">
            <h5 class="SubjectModuleList_List_Item_Text">
              ${SubjectModuleList_Item_Name}
            </h5>
            <span></span>
            <h5 class="SubjectModuleList_List_Item_LastModified">
              ${SubjectModuleList_Item_LastModified}
            </h5>
        </div>
      `;
      var SubjectModuleList_Item = document.createElement('a');
      SubjectModuleList_Item.innerHTML = SubjectModuleList_Item_HTML_Active;
      SubjectModuleList_Item.setAttribute("href", SubjectModuleList_Item_Link);
      SubjectModuleList_Item.style.animationDelay = 0.2 + (a / 10) + "s";
      document.getElementById("SubjectModuleList_List").appendChild(SubjectModuleList_Item);
    }
    
    if (SubjectModuleList_Item_Status == "Inactive"){

      const SubjectModuleList_Item_HTML_Inactive = `
          <div class="SubjectModuleList_List_Item" Status="Inactive">
            <h5 class="SubjectModuleList_List_Item_Text">
              ${SubjectModuleList_Item_Name}
            </h5>
            <h5 class="SubjectModuleList_List_Item_Status">
                Not available
            </h5>
            <h5 class="SubjectModuleList_List_Item_LastModified">
              ${SubjectModuleList_Item_LastModified}
            </h5>
        </div>
      `;
      var SubjectModuleList_Item = document.createElement('a');
      SubjectModuleList_Item.innerHTML = SubjectModuleList_Item_HTML_Inactive;
      SubjectModuleList_Item.style.animationDelay = 0.2 + (a / 10) + "s";
      document.getElementById("SubjectModuleList_List").appendChild(SubjectModuleList_Item);
    }    
  }
  SubjectList_SwitchScreenTo("SubjectModuleList");
}

// Switches between different screens
function SubjectList_SwitchScreenTo(Screen){
  if (Screen == "SubjectModuleList"){
    document.getElementById("SubjectList").setAttribute("State", "Inactive");
    document.getElementById("SubjectModuleList").setAttribute("State", "Active");
  } else if (Screen == "SubjectList") {
    document.getElementById("SubjectList").setAttribute("State", "Active");
    document.getElementById("SubjectModuleList").setAttribute("State", "Inactive");
  }
}

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