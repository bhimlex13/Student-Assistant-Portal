let SignIn_Credentials = {
  // Set to false to prevent the sign in window to appear
  RequireSignIn: true, 
  // Password for said sign in window
  Password: null,
  // If set to true, the user will only enter the pasword once per browser session; set to false if you want the user to enter the password every time they open index.html
  SignInPerSession: true,
}

function run(){
  document.getElementById("SignIn-Dialog-Content-Body-Form-Password").value = "";
  var myModal = new bootstrap.Modal(document.getElementById('SignIn'));
  myModal.show();
  var SignIn_Intro_Line_1 = "Student";
  var SignIn_Intro_Line_2 = "Assistant";
  var SignIn_Intro_Line_3 = "Portal";
  for (a = 0; a < SignIn_Intro_Line_1.length; a++){
    var SignIn_Intro_Letter_HTML = `
      <h1 class="SignIn-Dialog-Content-Body-Banner-Title-Animated-Letter" style="animation-delay: ${0.1 + (a / 10) + "s"}">
          ${SignIn_Intro_Line_1[a]}
      </h1>
    `;
    var SignIn_Intro_Letter = document.createElement('span');
    SignIn_Intro_Letter.innerHTML = SignIn_Intro_Letter_HTML;
    // SignIn_Intro_Letter.style.animationDelay = 0.1 + (a / 10) + "s";
    document.getElementById("SignIn-Dialog-Content-Body-Banner-Title-Animated-1").appendChild(SignIn_Intro_Letter);
  }
  for (a = 0; a < SignIn_Intro_Line_2.length; a++){
    var SignIn_Intro_Letter_HTML = `
    <h1 class="SignIn-Dialog-Content-Body-Banner-Title-Animated-Letter" style="animation-delay: ${0.4 + (a / 10) + "s"}">
          ${SignIn_Intro_Line_2[a]}
      </h1>
    `;
    var SignIn_Intro_Letter = document.createElement('span');
    SignIn_Intro_Letter.innerHTML = SignIn_Intro_Letter_HTML;
    // SignIn_Intro_Letter.style.animationDelay = 0.1 + (a / 10) + "s";
    document.getElementById("SignIn-Dialog-Content-Body-Banner-Title-Animated-2").appendChild(SignIn_Intro_Letter);
  }
  for (a = 0; a < SignIn_Intro_Line_3.length; a++){
    var SignIn_Intro_Letter_HTML = `
    <h1 class="SignIn-Dialog-Content-Body-Banner-Title-Animated-Letter" style="animation-delay: ${0.7 + (a / 10) + "s"}">
          ${SignIn_Intro_Line_3[a]}
      </h1>
    `;
    var SignIn_Intro_Letter = document.createElement('span');
    SignIn_Intro_Letter.innerHTML = SignIn_Intro_Letter_HTML;
    // SignIn_Intro_Letter.style.animationDelay = 0.1 + (a / 10) + "s";
    document.getElementById("SignIn-Dialog-Content-Body-Banner-Title-Animated-3").appendChild(SignIn_Intro_Letter);
  }
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
         UF_Parameter_Set("Screen", "Login");
         Exam_Schedule_GetManifestData(Exam_Schedule_ManifestFileURL);
         run();
      } else {
        SubjectList_GetManifestData(SubjectList_ManifestFileURL);
        Exam_Schedule_GetManifestData(Exam_Schedule_ManifestFileURL);
      }
    } else {
    run();
    UF_Parameter_Set("Screen", "Login");
    Exam_Schedule_GetManifestData(Exam_Schedule_ManifestFileURL);
    }
  } else {
    UF_Parameter_Set("Screen", "Main");
    SubjectList_GetManifestData(SubjectList_ManifestFileURL);
    Exam_Schedule_GetManifestData(Exam_Schedule_ManifestFileURL);
  }
  
  window.addEventListener('popstate', function(event){
    SUI_Screen_Set();
  });
}


// When the password is submitted, run this function
document.getElementById("SignIn-Dialog-Content-Body-Form").addEventListener("submit", function(event){
  // Prevents default submit action
  event.preventDefault();

  document.getElementById("SignIn-Dialog-Content-Close").click();
  SubjectList_GetManifestData(SubjectList_ManifestFileURL);
  Exam_Schedule_GetManifestData(Exam_Schedule_ManifestFileURL);
  UF_Parameter_Set("Screen", "Main");
});


// Object that contains the subject list
let SubjectList = {};
// URL to the .json file 
var SubjectList_ManifestFileURL = "assets/SAP-Subject-Manifest.json";

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
  var SubjectList_Card_ActiveOccurence = 0;
  
  for (a = 0; a < SubjectList.Subject.length; a++){
    if (SubjectList.Subject[a].Subject_Status == "Active"){
      SubjectList_Card_ActiveOccurence++;
      SubjectList_Card_ID = SubjectList.Subject[a].Subject_ID;
      SubjectList_Card_Thumbnail = SubjectList.Subject[a].Subject_Thumbnail;
      SubjectList_Card_Name = SubjectList.Subject[a].Subject_Name;

      const SubjectList_Card_HTML = `
        <div class="card text-center SubjectList_Card_Item">
            <img class="card-img-top SubjectList_Card_Item_Image" src="${SubjectList_Card_Thumbnail}" alt="Subject thumbnail image" style="opacity: 0" onload="this.style.opacity = '1'; this.style.transition = '0.3s'" loading='lazy' draggable='false'>
            <div class="card-body card-body-b SubjectList_Card_Item_Title">
                <h5 class="card-title">${SubjectList_Card_Name}</h5>
                <!--<a href="./inte_prog/prelims/prelims.html" class="btn card-button">Prelims</a>
                <a href="#" class="btn card-button">Midterms</a>
                <a href="#" class="btn card-button">Pre-Finals</a>
                <a href="#" class="btn card-button">Finals</a>-->
            </div>
        </div>
      `;

      var SubjectList_Card = document.createElement('div');
      SubjectList_Card.setAttribute("tabindex", "0");
      SubjectList_Card.setAttribute("Tabbable", "true");
      SubjectList_Card.setAttribute("class", "card-section col-12 col-sm-6 col-lg-3 mb-4 SubjectList_Card");
      SubjectList_Card.setAttribute("onclick", `SubjectList_Generate_ModuleList(${a}), UF_Parameter_Set("Screen", "Subject_${a}");`);
      SubjectList_Card.innerHTML = SubjectList_Card_HTML;
      SubjectList_Card.style.animationDelay = 0.1 + (SubjectList_Card_ActiveOccurence / 10) + "s";
      document.getElementById("SubjectList_List").appendChild(SubjectList_Card);
    }
  }
  if (SubjectList_Card_ActiveOccurence == 0){
    document.getElementById("SubjectList_Empty").style.display = "block";
  }
}
var SubjectList_AccessProcess_Level = 1;
// Generates the module list
function SubjectList_Generate_ModuleList(ID){
  document.getElementById("SubjectModuleList_List_Empty").style.display = "none";
  document.getElementById("SubjectModuleList_List").style.display = "flex";
  document.getElementById("SubjectModuleList_Subfolder_List").style.display = "none";
  document.getElementById("SubjectModuleList_List").innerHTML = "";
  document.getElementById("SubjectModuleList_Header_SubjectTitle_Title").setAttribute("State", "");
  document.getElementById("SubjectModuleList_Header_SubjectTitle_Title_2").setAttribute("State", "");

  document.getElementById("SubjectModuleList_Header_SubjectTitle_Title").innerText = SubjectList.Subject[ID].Subject_Name;
  document.getElementById("SubjectModuleList_Header_Background_Image").src = SubjectList.Subject[ID].Subject_Thumbnail;
  document.getElementById("SubjectModuleList_Header_SubjectTitle_Thumbnail").src = SubjectList.Subject[ID].Subject_Thumbnail;
  document.getElementById("SubjectModuleList_List").innerHTML = '';
  var SubjectModuleList_Item_ActiveOccurence = 0;
  for (a = 0; a < SubjectList.Subject[ID].Subject_Module.length; a++){
    var SubjectModuleList_Item_Name = SubjectList.Subject[ID].Subject_Module[a].Module_Name;
    // var SubjectModuleList_Item_Link = SubjectList.Subject[ID].Subject_Module[a].Link;
    var SubjectModuleList_Item_Status = SubjectList.Subject[ID].Subject_Module[a].Module_Status;
    var SubjectModuleList_Item_LastModified = SubjectList.Subject[ID].Subject_Module[a].Module_LastModified;

    if (SubjectModuleList_Item_Status == "Active"){
      SubjectModuleList_Item_ActiveOccurence++;
      var SubjectModuleList_Item_Name = SubjectList.Subject[ID].Subject_Module[a].Module_Name;
      // var SubjectModuleList_Item_Link = SubjectList.Subject[ID].Subject_SubFolders[a].Link;
      var SubjectModuleList_Item_LastModified = SubjectList.Subject[ID].Subject_Module[a].Module_LastModified;
      var SubjectModuleList_Item_Thumbnail = SubjectList.Subject[ID].Subject_Module[a].Module_Thumbnail;
      // const SubjectModuleList_Item_HTML_Active = `
      //   <div class="SubjectModuleList_List_Item" onclick="SubjectList_Generate_SubfolderList(${ID}, ${a})">
      //       <div class="SubjectModuleList_List_Item_Thumbnail">
      //           <img class='SubjectModuleList_List_Item_Thumbnail_Image' src='${SubjectModuleList_Item_Thumbnail}' draggable='false' loading='lazy'  onload="this.style.opacity = '1'"/>
      //       </div>
      //       <h4 class="SubjectModuleList_List_Item_Title">
      //         ${SubjectModuleList_Item_Name}
      //       </h4>
      //   </div>
      // `;
      const SubjectModuleList_Item_HTML_Active = `
        <div class="card text-center SubjectList_Card_Item" onclick="SubjectList_Generate_SubfolderList(${ID}, ${a}); UF_Parameter_Set('Screen', 'Folder_${ID}_${a}');">
            <img class="card-img-top SubjectList_Card_Item_Image" src="${SubjectModuleList_Item_Thumbnail}" alt="Subject thumbnail image" style="opacity: 0" onload="this.style.opacity = '1'; this.style.transition = '0.3s'" loading='lazy' draggable='false'>
            <div class="card-body card-body-b SubjectList_Card_Item_Title">
                <h5 class="card-title">${SubjectModuleList_Item_Name}</h5>
                <!--<a href="./inte_prog/prelims/prelims.html" class="btn card-button">Prelims</a>
                <a href="#" class="btn card-button">Midterms</a>
                <a href="#" class="btn card-button">Pre-Finals</a>
                <a href="#" class="btn card-button">Finals</a>-->
            </div>
        </div>
      `;
      var SubjectModuleList_Item = document.createElement('a');
      SubjectModuleList_Item.setAttribute("tabindex", "0");
      SubjectModuleList_Item.setAttribute("Tabbable", "true");
      SubjectModuleList_Item.setAttribute("class", "card-section col-12 col-sm-6 col-lg-3 mb-4 SubjectList_Card");
      SubjectModuleList_Item.innerHTML = SubjectModuleList_Item_HTML_Active;
      // SubjectModuleList_Item.setAttribute("href", SubjectModuleList_Item_Link);
      SubjectModuleList_Item.style.animationDelay = 0.2 + (SubjectModuleList_Item_ActiveOccurence / 10) + "s";
      document.getElementById("SubjectModuleList_List").appendChild(SubjectModuleList_Item);
    }
  }
  if (SubjectModuleList_Item_ActiveOccurence == 0){
    document.getElementById("SubjectModuleList_List_Empty").style.display = "block";
    document.getElementById("SubjectModuleList_List_Empty").innerHTML = "No modules for this subject are available at the moment.";
  }
  SubjectList_AccessProcess_Level = 2;
  SubjectList_SwitchScreenTo("SubjectModuleList");
}

var SubjectList_Thumbnail;

function SubjectList_Generate_SubfolderList(Subject, Module){
  document.getElementById("SubjectModuleList_Header_SubjectTitle_Title").setAttribute("State", "");
  document.getElementById("SubjectModuleList_Header_SubjectTitle_Title_2").setAttribute("State", "");

  document.getElementById("SubjectModuleList_Header_SubjectTitle_Title").innerText = SubjectList.Subject[Subject].Subject_Name;
  document.getElementById("SubjectModuleList_Header_Background_Image").src = SubjectList.Subject[Subject].Subject_Thumbnail;
  document.getElementById("SubjectModuleList_Header_SubjectTitle_Thumbnail").src = SubjectList.Subject[Subject].Subject_Thumbnail;
  
  document.getElementById("SubjectModuleList_List_Empty").style.display = "none";
  SubjectList_Thumbnail = SubjectList.Subject[Subject].Subject_Thumbnail;
  document.getElementById("SubjectModuleList_Header_SubjectTitle_Title").setAttribute("State", "Subfolder");
  document.getElementById("SubjectModuleList_Header_SubjectTitle_Title_2").setAttribute("State", "Subfolder");
  document.getElementById("SubjectModuleList_Header_SubjectTitle_Title_2").innerHTML = SubjectList.Subject[Subject].Subject_Module[Module].Module_Name;
  document.getElementById("SubjectModuleList_Header_Background_Image").src = SubjectList.Subject[Subject].Subject_Module[Module].Module_Thumbnail;
  document.getElementById("SubjectModuleList_Header_SubjectTitle_Thumbnail").src = SubjectList.Subject[Subject].Subject_Module[Module].Module_Thumbnail;
  var SubjectSubfolderList_Item_ActiveOccurence = 0;
  document.getElementById("SubjectModuleList_List").style.display = "none";
  document.getElementById("SubjectModuleList_Subfolder_List").style.display = "flex";
  document.getElementById("SubjectModuleList_Subfolder_List").innerHTML = "";
  for (a = 0; a < SubjectList.Subject[Subject].Subject_Module[Module].Module_Subfolders.length; a++){
    SubjectSubfolderList_Item_ActiveOccurence++;
    if (SubjectList.Subject[Subject].Subject_Module[Module].Module_Subfolders[a].Subfolder_Status == "Active"){
      SubjectSubfolderList_Item_ActiveOccurence++;
      var SubjectSubfolderList_Item_Name = SubjectList.Subject[Subject].Subject_Module[Module].Module_Subfolders[a].Subfolder_Name;
      var SubjectSubfolderList_Item_LastModified = SubjectList.Subject[Subject].Subject_Module[Module].Module_Subfolders[a].Subfolder_LastModified;
      var SubjectSubfolderList_Item_Link = SubjectList.Subject[Subject].Subject_Module[Module].Module_Subfolders[a].Subfolder_Link;
      const SubjectSubfolderList_Item_HTML = `
      <div class="SubjectModuleList_Subfolder_List_Item">
          <h5 class="SubjectModuleList_Subfolder_List_Item_Text">
              ${SubjectSubfolderList_Item_Name}
          </h5>
          <h5 class="SubjectModuleList_Subfolder_List_Item_Text">
              ${SubjectSubfolderList_Item_LastModified}
          </h5>
      </div>
      `;
      var SubjectSubfolderList_Item = document.createElement('a');
      SubjectSubfolderList_Item.setAttribute("tabindex", "0");
      SubjectSubfolderList_Item.setAttribute("Tabbable", "true");
      SubjectSubfolderList_Item.innerHTML = SubjectSubfolderList_Item_HTML;
      SubjectSubfolderList_Item.setAttribute("href", SubjectSubfolderList_Item_Link);
      SubjectSubfolderList_Item.style.animationDelay = 0.2 + (SubjectSubfolderList_Item_ActiveOccurence / 10) + "s";
      document.getElementById("SubjectModuleList_Subfolder_List").appendChild(SubjectSubfolderList_Item);
    }
    
  }
  if (SubjectSubfolderList_Item_ActiveOccurence == 0){
    document.getElementById("SubjectModuleList_List_Empty").style.display = "block";
    document.getElementById("SubjectModuleList_List_Empty").innerHTML = "No handouts for this module are available at the moment.";
  }
  SubjectList_AccessProcess_Level = 3;
}

function SubjectList_AccessProcess_Back(){
  if (SubjectList_AccessProcess_Level == 3){
    SubjectList_AccessProcess_Level = 2;
    document.getElementById("SubjectModuleList_Header_SubjectTitle_Title").setAttribute("State", "");
    document.getElementById("SubjectModuleList_Header_SubjectTitle_Title_2").setAttribute("State", "");
    document.getElementById("SubjectModuleList_List").style.display = "flex";
    document.getElementById("SubjectModuleList_Subfolder_List").style.display = "none";
    document.getElementById("SubjectModuleList_Header_Background_Image").src = SubjectList_Thumbnail;
    document.getElementById("SubjectModuleList_Header_SubjectTitle_Thumbnail").src = SubjectList_Thumbnail;
    UF_Parameter_Set("Screen", "Subject_" + UF_Parameter_Get("Screen").split("_")[1]);
  } else if (SubjectList_AccessProcess_Level == 2){
    SubjectList_AccessProcess_Level = 1;
    SubjectList_SwitchScreenTo("SubjectList");
    UF_Parameter_Set("Screen", "Main");
  }
}

// Switches between different screens
function SubjectList_SwitchScreenTo(Screen){
  if (Screen == "SubjectModuleList"){
    document.getElementById("SubjectList").style.animationName = "SubjectList_Animate_Closing";
    setTimeout(function(){
      document.getElementById("SubjectList").setAttribute("State", "Inactive");
      document.getElementById("SubjectList").style.animationName = "";
    }, 200);


    document.getElementById("SubjectModuleList").setAttribute("State", "Active");
    document.getElementById("SubjectModuleList").style.animationName = "SubjectModuleList_Animate_Opening";
  } else if (Screen == "SubjectList") {
    document.getElementById("SubjectModuleList").style.animationName = "SubjectModuleList_Animate_Closing";
    setTimeout(function(){
      document.getElementById("SubjectModuleList").setAttribute("State", "Inactive");
      document.getElementById("SubjectModuleList").style.animationName = "";
    }, 200);


    document.getElementById("SubjectList").setAttribute("State", "Active");
    document.getElementById("SubjectList").style.animationName = "SubjectList_Animate_Opening";
  }
}

// Object that contains the scheudle list
let Exam_Schedule = {};
// URL to the .json file 
var Exam_Schedule_ManifestFileURL = "assets/SAP-Exam-Schedule.json";

// Gets the manifest file and returns the data
async function Exam_Schedule_Fetch_Manifest(URL) {
  try {
    const JSON_File = await fetch(URL);
    const JSON_Data = await JSON_File.json();
    return JSON_Data;
  } catch (error) {
    console.error("Exam_Schedule_Fetch_Manifest failed to fetch the manifest file.");
    return null;
  }
}

// Gets the manifest file and stores the data to SubjectList
Exam_Schedule_Fetch_Manifest(Exam_Schedule_ManifestFileURL)
    .then(data => {
        if (data !== null) {
          Exam_Schedule = data;
        }
    })
    .catch(error => {
        console.error('Error fetching JSON file:', error);
    });

// This is used by other functions to get the manifest data
async function Exam_Schedule_GetManifestData(Exam_Schedule_ManifestFileURL) {
  const data = await Exam_Schedule_Fetch_Manifest(Exam_Schedule_ManifestFileURL);
    Exam_Schedule_Generate_Schedule();
    return data;
}

function Exam_Schedule_Generate_Schedule(){
  if(Exam_Schedule.Status == "Active"){
    // Sets necessary titles
    document.getElementById("Exam_Reminder_Title").innerHTML = `${Exam_Schedule.Exam_Semester} Semester ${Exam_Schedule.Exam_Period} Exams`;
    document.getElementById("Exam_Reminder_Duration").innerHTML = `${Exam_Schedule.Exam_Duration[0]} - ${Exam_Schedule.Exam_Duration[1]}`;
    document.getElementById("Exam_Schedule_Title").innerHTML = `${Exam_Schedule.Exam_Semester} Semester ${Exam_Schedule.Exam_Period} Exam Schedule`;
    document.getElementById("Exam_Schedule_Duration").innerHTML = `${Exam_Schedule.Exam_Duration[0]} - ${Exam_Schedule.Exam_Duration[1]}`;

    // Clears the schedule list
    document.getElementById("Exam_Schedule_List").innerHTML = "";

    // Generates a section per class
    for (a = 0; a < Exam_Schedule.Exam_Section.length; a++){
      var Section_Item = document.createElement("div");
      Section_Item.setAttribute("class", "Exam_Schedule_Class");
      Section_Item.setAttribute("id", "Exam_Schedule_Class_" + a);
      document.getElementById("Exam_Schedule_List").appendChild(Section_Item);

      var Section_Item_Title = document.createElement("h1");
      Section_Item_Title.setAttribute("class", "Exam_Schedule_Class_Title");
      Section_Item_Title.innerHTML = Exam_Schedule.Exam_Section[a].Section_Name;
      document.getElementById("Exam_Schedule_Class_" + a).appendChild(Section_Item_Title);

      // Generates a section per day
      for (b = 0; b < Exam_Schedule.Exam_Section[a].Section_Schedule.length; b++){
        var Schedule_Item_Section = document.createElement("section");
        Schedule_Item_Section.setAttribute("class", "Exam_Schedule_List_Section");
        Schedule_Item_Section.setAttribute("id", "Exam_Schedule_List_Section_" + a + "_" + b);
        document.getElementById("Exam_Schedule_Class_" + a).appendChild(Schedule_Item_Section);

        var Schedule_Item_Section_Title = document.createElement("h3");
        Schedule_Item_Section_Title.setAttribute("class", "Exam_Schedule_List_Section_Title");
        Schedule_Item_Section_Title.innerHTML = Exam_Schedule.Exam_Section[a].Section_Schedule[b].Schedule_Date + " | " + Exam_Schedule.Exam_Section[a].Section_Schedule[b].Schedule_Day;
        document.getElementById("Exam_Schedule_List_Section_" + a + "_" + b).appendChild(Schedule_Item_Section_Title);

        // Generates the section item that displays the schedule
        for (c = 0; c < Exam_Schedule.Exam_Section[a].Section_Schedule[b].Schedule_Subjects.length; c++){
          let Schedule_Item_Section_Item_HTML = `
            <h3 class="Exam_Schedule_List_Section_Item_Subject">
                ${Exam_Schedule.Exam_Section[a].Section_Schedule[b].Schedule_Subjects[c].Subject_Name}
            </h3>
            <p class="Exam_Schedule_List_Section_Item_Time">
              ${Exam_Schedule.Exam_Section[a].Section_Schedule[b].Schedule_Subjects[c].Subject_Duration[0]} - ${Exam_Schedule.Exam_Section[a].Section_Schedule[b].Schedule_Subjects[c].Subject_Duration[1]}
            </p>
            <p class="Exam_Schedule_List_Section_Item_Location">
              ${Exam_Schedule.Exam_Section[a].Section_Schedule[b].Schedule_Subjects[c].Subject_Location}
            </p>
          `;
          var Schedule_Item_Section_Item = document.createElement("div");
          Schedule_Item_Section_Item.setAttribute("class", "Exam_Schedule_List_Section_Item");
          Schedule_Item_Section_Item.innerHTML = Schedule_Item_Section_Item_HTML;
          document.getElementById("Exam_Schedule_List_Section_" + a + "_" + b).appendChild(Schedule_Item_Section_Item);
        }
      }
    }
  } else {
    document.getElementById("Exam_Reminder").style.display = "none";
  }
}

// Screen URL interpreter
function SUI_Screen_Set(){
  SUI_Screen = UF_Parameter_Get("Screen");
  SUI_Screen_ParameterElements = UF_Parameter_Get("Screen").split("_");
  switch (SUI_Screen){
    case 'Main':
      Element_Attribute_Set("SubjectModuleList", "State", "Inactive");
      Element_Attribute_Set("Exam_Schedule", "State", "Inactive");
      Element_Attribute_Set("SubjectList", "State", "Active");
      SubjectList_SwitchScreenTo("SubjectList");
      break;
    case 'Subject_' + SUI_Screen_ParameterElements[1]:
      Element_Attribute_Set("SubjectModuleList", "State", "Active");
      Element_Attribute_Set("Exam_Schedule", "State", "Inactive");
      Element_Attribute_Set("SubjectList", "State", "Inactive");
      SubjectList_Generate_ModuleList(SUI_Screen_ParameterElements[1]);
      SubjectList_AccessProcess_Level = 2;
      SubjectList_SwitchScreenTo("SubjectModuleList");
      break;
    case 'Folder_' + SUI_Screen_ParameterElements[1] + "_" + SUI_Screen_ParameterElements[2]:
      Element_Attribute_Set("SubjectModuleList", "State", "Active");
      Element_Attribute_Set("Exam_Schedule", "State", "Inactive");
      Element_Attribute_Set("SubjectList", "State", "Inactive");
      SubjectList_SwitchScreenTo("SubjectModuleList");
      SubjectList_Generate_SubfolderList(SUI_Screen_ParameterElements[1], SUI_Screen_ParameterElements[2]);
      SubjectList_AccessProcess_Level = 3;
      break;
    case 'Schedules':
      SubjectList_SwitchScreenTo("SubjectList");
      Screens_Open('Exam_Schedule', 'Left');
      SubjectList_AccessProcess_Level = 1;
      break;
  }
}



// Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
  // alert('⚠️ Sorry. Di muna pwede mag right click here ⚠️')
  e.preventDefault();
});
  
  // Disable certain keyboard shortcuts
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