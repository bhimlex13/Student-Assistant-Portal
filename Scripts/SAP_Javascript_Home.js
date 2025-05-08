let Onload_Requirements = {
    // Set to false if you don't want the splash to appear
    Splash_Require: true,
    // Set to false if you want the splash to open every load of the page
    Splash_OpenOncePerSession: true,
    // Increment this on any major changes in the system so the WhatsNew window will open
    Version: 2
}

var Quizzes_Explorer_Mode = "Home";


window.onload = function (){

    var path = window.location.pathname;
    var App_CurrentPageName = path.split("/").pop();
    console.log(App_CurrentPageName);
    if (App_CurrentPageName == "quizOutliner.html"){
        Quizzes_Explorer_Mode = "Outliner";
        console.log(Quizzes_Explorer_Mode);
    }

    Settings_Load_Data();
    Settings_Load_Values();
    if(Settings_Data.HideQuizThumbnails == "undefined" || Settings_Data.HideQuizThumbnails == undefined){
        Element_Attribute_Set("Setting_HideThumbnails", "State", "Inactive");
        Settings_Save();
        Settings_Load_Values();
        Page_ChangePage("");
    }
    if (Onload_Requirements.Splash_Require == true){
        if (Onload_Requirements.Splash_OpenOncePerSession == true){
            var Session_UserHasSignedIn = sessionStorage.getItem('SAP_UserHasSignedIn');
            if (Session_UserHasSignedIn == null || Session_UserHasSignedIn == false){
                Home_Splash();
                sessionStorage.setItem("SAP_UserHasSignedIn", "true");
            } else {
                Element_Attribute_Set('Home_Welcome', 'State', 'Invisible');
                LoadingScreen_Hide();
                Home_Start();
            }
        } else {
            Home_Splash();
        }
    } else {
        Element_Attribute_Set('Home_Welcome', 'State', 'Invisible');
        LoadingScreen_Hide();
        Home_Start();
    }
};

function Home_Splash(){
    Element_Attribute_Set('Home_Welcome_Main', 'State', 'Invisible');
    Element_Style_Animate_Batch_QuerySelector(".Home_Welcome_Content", "", "4s", "forwards", 1, 1);
    Element_Style_Animate_Batch_QuerySelector(".Home_Welcome_Title", "", "4s", "forwards", 1, 1);
    
    // Element_Style_Animate_Batch_QuerySelector(".Home_Welcome_Title_Text", "", "1s", "forwards", 1, 0.3);
    

    Element_Attribute_Set('Home_Welcome', 'State', 'Visible');
    LoadingScreen_Hide();
    setTimeout(function(){
        Element_Style_Animate_Batch_QuerySelector(".Home_Welcome_Content", "Home_Welcome_Sequence_1", "4s", "forwards", 1, 1);
        Element_Style_Animate_Batch_QuerySelector(".Home_Welcome_Title", "Home_Welcome_Sequence_2", "4s", "forwards", 1, 1);
        Element_Attribute_Set("Home_Welcome_Title", "State", "Animating");
        // Element_Style_Animate_Batch_QuerySelector(".Home_Welcome_Title_Text", "Home_Welcome_Sequence_3", "1s", "forwards", 1, 0.3);
        setTimeout(function(){
            Element_Attribute_Set('Home_Welcome_Main', 'State', 'Visible');
        }, 3000);
    }, 500);
}

function Home_Start(){
    Element_Attribute_Set('Home_Welcome', 'State', 'Invisible');
    document.getElementById("Quizzes").click();
    Quizzes_Manifest_Load();
    Schedules_Class_Load(Schedules_Class_Manifest_FileURL);
    Schedules_Exams_Load(Schedules_Exams_Manifest_FileURL);
    var Version = Onload_Requirements.Version;
    
    if(StorageItem_Get("SAP_Version", "Local") != null){
        let Data = StorageItem_Get("SAP_Version", "Local");
        if(Data.Version != Version){
            Subwindows_Open("SAP_WhatsNew");
            AB_Renderer_Article_Render(Data_Import_FromPath("Assets/SAP_WhatsNew.cbe_ab", "JSON"));
            Data.Version = Version;
            StorageItem_Set("SAP_Version", Data, "Local");
        }
    } else {
        let Data = {Version: 0};
        Subwindows_Open("SAP_WhatsNew");
        AB_Renderer_Article_Render(Data_Import_FromPath("Assets/SAP_WhatsNew.cbe_ab", "JSON"));
        Data.Version = Onload_Requirements.Version;
        StorageItem_Set("SAP_Version", Data, "Local");
    }
    
}

// Object that contains the subject list
let Quizzes_Manifest = {};
// URL to the .json file 
var Quizzes_Manifest_FileURL = "Assets/SAP-Subject-Manifest.json";

// Gets the manifest file and returns the data
async function Quizzes_Manifest_Fetch() {
    var URL = Quizzes_Manifest_FileURL;
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
Quizzes_Manifest_Fetch(Quizzes_Manifest_FileURL)
    .then(data => {
        if (data !== null) {
            Quizzes_Manifest = data;
        }
    })
    .catch(error => {
        console.error('SAP | Error | Error fetching JSON file: ', error);
    });

// This is used by other functions to get the manifest data
async function Quizzes_Manifest_Load(Quizzes_Manifest_FileURL) {
  try {
    const data = await Quizzes_Manifest_Fetch(Quizzes_Manifest_FileURL);
    Quizzes_Explorer_Load_Subject();
    return data;
  } catch (error) {
    console.error('SAP | Error | Error getting manifest data: ', error);
    return null;
  }
}

// Subject array
var Explorer_Status_Evaluator = 0;
function Quizzes_Explorer_Load_Subject(){

    UF_Parameter_Remove("Subject");
    UF_Parameter_Remove("Module");
    UF_Parameter_Remove("Quiz");
    Explorer_Status_Evaluator = 0;
    Element_Attribute_Set("Quizzes_Explorer_Status", "Display", "none");
    Element_Style_Animate_Batch_QuerySelector(".Explorer_Item", "Explorer_Item_Close", "0.2s", "forwards", "1", 0);
    setTimeout(function(){
        Element_Attribute_Set("Quizzes_Container", "State", "Header_Inactive");
        Explorer_Container_Clear();
        if (Settings_Data.HideQuizThumbnails == "Inactive"){
            Explorer_Container_ChangeType("Image");
        } else if (Settings_Data.HideQuizThumbnails == "Active" || Quizzes_Explorer_Mode == "Outliner"){
            Explorer_Container_ChangeType("Text");
        }
        
        Element_Attribute_Set("Quizzes_Explorer", "Level", "1");
        for (a = 0; a < Quizzes_Manifest.Subject.length; a++){
            let Object = Quizzes_Manifest.Subject[a];
            if (Object.Subject_Status == "Active"){
                Explorer_Item_Create(Object.Subject_ID, Object.Subject_Name, "", Object.Subject_Thumbnail, null, `Quizzes_Explorer_Load_Module(${a})`);
                Explorer_Status_Evaluator++;
            }
            
        }

        if (Explorer_Status_Evaluator == 0){
            Element_Attribute_Set("Quizzes_Explorer_Status", "Display", "block");
        }
        Element_Style_Animate_Batch_QuerySelector(".Explorer_Item", "Explorer_Item_Open", "0.4s", "forwards", "1", 50);
    }, 200);
    if (StorageItem_Get("SAP_Quiz_Status", "Session") != null){
        let Status = StorageItem_Get("SAP_Quiz_Status", "Session");
        console.log(Status);
        console.log(Status.Subject);
        console.log(Status.Module);
        if (Status.Status == "Complete"){
            
            StorageItem_Set("SAP_Quiz_Status", null, "Session");
            console.log("Triggered");
            setTimeout(Explorer_Navigate(Status.Subject, Status.Module), 500);
        }
    }
}

// Module array
function Quizzes_Explorer_Load_Module(Item){
    UF_Parameter_Set("Subject", Item);
    UF_Parameter_Remove("Module");
    UF_Parameter_Remove("Quiz");
    Explorer_Status_Evaluator = 0;
    Element_Attribute_Set("Quizzes_Explorer_Status", "Display", "none");
    Element_Style_Animate_Batch_QuerySelector(".Explorer_Item", "Explorer_Item_Close", "0.2s", "forwards", "1", 0);
    setTimeout(function(){
        Element_Attribute_Set("Quizzes_Container", "State", "Header_Active");
        Element_Attribute_Set("Quizzes_Title_Content", "Stage", "Subject");
        Explorer_Container_Clear();
        if (Settings_Data.HideQuizThumbnails == "Inactive"){
            Explorer_Container_ChangeType("Image");
        } else if (Settings_Data.HideQuizThumbnails == "Active" || Quizzes_Explorer_Mode == "Outliner"){
            Explorer_Container_ChangeType("Text");
        }
        Element_Attribute_Set("Quizzes_Explorer", "Level", "2");
        Element_Attribute_Set("Quizzes_Explorer", "Memory_Value", Item);
        
        for (a = 0; a < Quizzes_Manifest.Subject[Item].Subject_Module.length; a++){
            let Object = Quizzes_Manifest.Subject[Item].Subject_Module[a];
            if (Object.Module_Status == "Active"){
                Explorer_Item_Create(Object.Module_ID, Object.Module_Name, Object.Module_LastModified, Object.Module_Thumbnail, null, `Quizzes_Explorer_Load_Quizzes(${Item}, ${a})`);
                Explorer_Status_Evaluator++;
            }
        }
        if (Explorer_Status_Evaluator == 0){
            Element_Attribute_Set("Quizzes_Explorer_Status", "Display", "block");
        }
        document.getElementById("Quizzes_Title_Subject").innerHTML = Quizzes_Manifest.Subject[Item].Subject_Name;
        Element_Style_Animate_Batch_QuerySelector(".Explorer_Item", "Explorer_Item_Open", "0.4s", "forwards", "1", 50);
    }, 200);
    
}

// Subfolder array
function Quizzes_Explorer_Load_Quizzes(Item, Module){
    UF_Parameter_Set("Subject", Item);
    UF_Parameter_Set("Module", Module);
    UF_Parameter_Remove("Quiz");
    Explorer_Status_Evaluator = 0;
    Element_Attribute_Set("Quizzes_Explorer_Status", "Display", "none");
    Element_Style_Animate_Batch_QuerySelector(".Explorer_Item", "Explorer_Item_Close", "0.2s", "forwards", "1", 0);
    setTimeout(function(){
        Element_Attribute_Set("Quizzes_Container", "State", "Header_Active");
        Element_Attribute_Set("Quizzes_Title_Content", "Stage", "Folder");
        Explorer_Container_Clear();
        Explorer_Container_ChangeType("Text");
        Element_Attribute_Set("Quizzes_Explorer", "Level", "3");
        for (a = 0; a < Quizzes_Manifest.Subject[Item].Subject_Module[Module].Module_Subfolders.length; a++){
            let Object = Quizzes_Manifest.Subject[Item].Subject_Module[Module].Module_Subfolders[a];
            console.log(Data_Import_FromPath(`quizzes/${Object.Subfolder_ID}.json`, "JSON").quizData.length)
            if (Object.Subfolder_Status == "Active"){
                if (Quizzes_Explorer_Mode == "Outliner"){
                    console.log(Object.Subfolder_ID);
                    Explorer_Item_Create(Object.Subfolder_ID, Object.Subfolder_Name, Object.Subfolder_LastModified, null, null, `QO_Quiz_Load('${Object.Subfolder_ID}')`, `${Data_Import_FromPath(`quizzes/${Object.Subfolder_ID}.json`, "JSON").quizData.length} items`, Object.Subfolder_Author[0]);
                    console.log("Outliner");
                } else {
                    Explorer_Item_Create(Object.Subfolder_ID, Object.Subfolder_Name, Object.Subfolder_LastModified, null, Object.Subfolder_Link, null, `${Data_Import_FromPath(`quizzes/${Object.Subfolder_ID}.json`, "JSON").quizData.length} items`, Object.Subfolder_Author[0]);
                }
                
                Explorer_Status_Evaluator++;
            }
        }
        if (Explorer_Status_Evaluator == 0){
            Element_Attribute_Set("Quizzes_Explorer_Status", "Display", "block");
        }
        
        document.getElementById("Quizzes_Title_Subject").innerHTML = Quizzes_Manifest.Subject[Item].Subject_Name;
        document.getElementById("Quizzes_Title_Folder").innerHTML = Quizzes_Manifest.Subject[Item].Subject_Module[Module].Module_Name;
        Element_Style_Animate_Batch_QuerySelector(".Explorer_Item", "Explorer_Item_Open", "0.4s", "forwards", "1", 50);
    }, 200);
}

// Goes up a level
function Explorer_Back(){
    
        if (Element_Attribute_Get("Quizzes_Explorer", "Level") == "1"){
            Quizzes_Explorer_Load_Subject();
        }
        if (Element_Attribute_Get("Quizzes_Explorer", "Level") == "2"){
            Quizzes_Explorer_Load_Subject();
        }
        if (Element_Attribute_Get("Quizzes_Explorer", "Level") == "3"){
            Quizzes_Explorer_Load_Module(Element_Attribute_Get("Quizzes_Explorer", "Memory_Value"));
        }
    
    
}

// Navigates to a subject/module
function Explorer_Navigate(Subject, Module){
    Element_Get_ByID("Quizzes").click();
    // Subject level
    if (Subject != null && Module == null){
        Quizzes_Explorer_Load_Module(Subject);
    } 
    // Module level
    if (Subject != null && Module != null){
        Quizzes_Explorer_Load_Quizzes(Subject, Module)
        Element_Attribute_Set("Quizzes_Explorer", "Memory_Value", Subject);
    }
}

// Refreshes the list
function Explorer_Refresh(){
    
    if (Element_Attribute_Get("Quizzes_Explorer", "Level") == "1"){
        Quizzes_Explorer_Load_Subject();
    }
    if (Element_Attribute_Get("Quizzes_Explorer", "Level") == "2"){
        Quizzes_Explorer_Load_Module(UF_Parameter_Get("Subject"));
    }
    if (Element_Attribute_Get("Quizzes_Explorer", "Level") == "3"){
        Quizzes_Explorer_Load_Module(UF_Parameter_Get("Subject"), UF_Parameter_Get("Module"));
    }


}

// Clears the contents of the container
function Explorer_Container_Clear(){
    document.getElementById("Quizzes_Explorer").innerHTML = "";
}

// Changes the type of container
function Explorer_Container_ChangeType(Container_Type){
    Element_Attribute_Set("Quizzes_Explorer", "Type", Container_Type);
}

// Generate an explorer item
function Explorer_Item_Create(Item_ID, Item_Title, Item_Subtitle, Item_Thumbnail, Item_Link, Item_Onclick, Item_QuestionCount, Item_Author){
    console.log(Item_QuestionCount);
    if(Element_Attribute_Get("Quizzes_Explorer", "Type") == "Image"){
        var Item_Element_InnerHTML;
        if(Item_Subtitle != null){
            Item_Element_InnerHTML = `
                <img class='Explorer_Item_Image' src=${Item_Thumbnail} draggable='false' loading='lazy' onload="this.setAttribute('State', 'Loaded')"/>
                <div class="Explorer_Item_Details">
                    <h3 class="Explorer_Item_Details_Text" Primary>
                        ${Item_Title}
                    </h3>
                    <h3 class="Explorer_Item_Details_Text" Secondary>
                        ${Item_Subtitle}
                    </h3>
                </div>
            `;
        } else {
            Item_Element_InnerHTML = `
                <img class='Explorer_Item_Image' src=${Item_Thumbnail} draggable='false' loading='lazy' onload="this.setAttribute('State', 'Loaded')"/>
                <div class="Explorer_Item_Details">
                    <h3 class="Explorer_Item_Details_Text" Primary>
                        ${Item_Title}
                    </h3>
                </div>
            `;
        }
        
        var Item_Element = document.createElement('button');
        Item_Element.innerHTML = Item_Element_InnerHTML;
        Item_Element.setAttribute('id', Item_ID);
        Item_Element.setAttribute('class', 'Explorer_Item');
        Item_Element.setAttribute('Type', 'Image');
        if (Item_Link != null){
            Item_Element.setAttribute('onclick', `Explorer_Item_Open("${Item_Link}")`);
        } else {
            Item_Element.setAttribute('onclick', `${Item_Onclick}`);
        }
        document.getElementById("Quizzes_Explorer").appendChild(Item_Element);
    }
    if(Element_Attribute_Get("Quizzes_Explorer", "Type") == "Text"){
        var Item_Element_InnerHTML;
        if(Item_QuestionCount != null && Item_Author != null){
            Item_Element_InnerHTML = `
                <div class="Explorer_Item_Details">
                    <h3 class="Explorer_Item_Details_Text" Primary>
                        ${Item_Title}
                    </h3>
                    <h3 class="Explorer_Item_Details_Text" Secondary>
                        ${Item_Subtitle}
                    </h3>
                    <h3 class="Explorer_Item_Details_Text" Tertiary>
                        ${Item_QuestionCount}
                    </h3>
                    <h3 class="Explorer_Item_Details_Text" Quartenary>
                        by ${Item_Author}
                    </h3>
                </div>
            `;
        } else {
            Item_Element_InnerHTML = `
                <div class="Explorer_Item_Details">
                    <h3 class="Explorer_Item_Details_Text" Primary>
                        ${Item_Title}
                    </h3>
                    <h3 class="Explorer_Item_Details_Text" Secondary>
                        ${Item_Subtitle}
                    </h3>
                </div>
            `;
        }
        var Item_Element = document.createElement('button');
        Item_Element.innerHTML = Item_Element_InnerHTML;
        Item_Element.setAttribute('id', Item_ID);
        Item_Element.setAttribute('class', 'Explorer_Item');
        Item_Element.setAttribute('Type', 'Text');
        if (Item_Link != null){
            Item_Element.setAttribute('onclick', `Explorer_Item_Open("${Item_Link}")`);
        } else {
            Item_Element.setAttribute('onclick', `${Item_Onclick}`);
        }
        document.getElementById("Quizzes_Explorer").appendChild(Item_Element);
    }

}

// Save the status of the quiz to session storage
function Explorer_Item_Open(Item_Link){
    let Status = {
        "Subject": UF_Parameter_Get("Subject"),
        "Module": UF_Parameter_Get("Module"),
        "Link": Item_Link,
        "Status": "Incomplete"
    }
    StorageItem_Set("SAP_Quiz_Status", Status, "Session");
    Page_ChangePage(`${Item_Link}`, Transition);
}

// Schedules
// Object that contains the subject list
let Schedules_Class_Manifest = {};
// URL to the .json file 
var Schedules_Class_Manifest_FileURL = "Assets/SAP-Class-Schedule.json";

// Gets the manifest file and returns the data
async function Schedules_Class_Manifest_Fetch(URL) {
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
Schedules_Class_Manifest_Fetch(Schedules_Class_Manifest_FileURL)
    .then(data => {
        if (data !== null) {
            Schedules_Class_Manifest = data;
        }
    })
    .catch(error => {
        console.error('SAP | Error | Error fetching JSON file: ', error);
    });

// This is used by other functions to get the manifest data
async function Schedules_Class_Load(Schedules_Class_Manifest_FileURL) {
  try {
    const data = await Schedules_Class_Manifest_Fetch(Schedules_Class_Manifest_FileURL);
    Schedules_Class_Timetable_Load();
    return data;
  } catch (error) {
    console.error('SAP | Error | Error getting manifest data: ', error);
    return null;
  }
}

// Schedules
function Schedules_Class_Timetable_Load(){
    document.getElementById("tab_Schedules_Class").innerHTML = "";
    var Schedule_Section = Schedules_Class_Manifest.Schedule_Section;
    // Creates sections
    for (a = 0; a <= Schedule_Section.length - 1; a++){
        console.log(a);
        if (Schedule_Section[a].Section_Status == "Active"){
            // Section Title
            var Section_Title = document.createElement('h1');
            Section_Title.setAttribute("class", "Schedules_List_Title");
            Section_Title.innerHTML = Schedule_Section[a].Section_Name;
            document.getElementById("tab_Schedules_Class").appendChild(Section_Title);
            // Section List Container
            var Section_Container = document.createElement('div');
            Section_Container.setAttribute("class", "Schedules_List");
            Section_Container.setAttribute("id", Schedule_Section[a].Section_ID);
            document.getElementById("tab_Schedules_Class").appendChild(Section_Container);

            // Creates day containers
            for (b = 0; b <= Schedule_Section[a].Section_Schedule.length - 1; b++){
                var Schedule_Day_Item_InnerHTML = `
                    <div class="Schedules_List_Section" id="${Schedule_Section[a].Section_ID}_${b}">
                        <h1 class="Schedules_List_Section_Title">
                            ${Schedule_Section[a].Section_Schedule[b].Schedule_Day}
                        </h1>
                    </div>
                `;
                var Schedule_Day_Item = document.createElement('span');
                Schedule_Day_Item.innerHTML = Schedule_Day_Item_InnerHTML;
                document.getElementById(Schedule_Section[a].Section_ID).appendChild(Schedule_Day_Item);
                // Creates individual subjects
                for (c = 0; c <= Schedule_Section[a].Section_Schedule[b].Schedule_Subjects.length - 1; c++){
                    var Schedule_Subject_Item_InnerHTML = `
                        <div class="Schedules_List_Item">
                            <h2 class="Schedules_List_Item_Title">
                                ${Schedule_Section[a].Section_Schedule[b].Schedule_Subjects[c].Subject_Name}
                            </h2>
                            <h4 class="Schedules_List_Item_Time">
                                ${Schedule_Section[a].Section_Schedule[b].Schedule_Subjects[c].Subject_Duration[0]} - ${Schedule_Section[a].Section_Schedule[b].Schedule_Subjects[c].Subject_Duration[1]}
                            </h4>
                            <h4 class="Schedules_List_Item_Room">
                                ${Schedule_Section[a].Section_Schedule[b].Schedule_Subjects[c].Subject_Location}
                            </h4>
                        </div>
                    `;
                    var Schedule_Subject_Item = document.createElement('span');
                    Schedule_Subject_Item.innerHTML = Schedule_Subject_Item_InnerHTML;
                    document.getElementById(Schedule_Section[a].Section_ID + "_" + b).appendChild(Schedule_Subject_Item);
                }
            }
            
        }
    }
}

// Exams
// Object that contains the subject list
let Schedules_Exams_Manifest = {};
// URL to the .json file 
var Schedules_Exams_Manifest_FileURL = "Assets/SAP-Exam-Schedule.json";

// Gets the manifest file and returns the data
async function Schedules_Exams_Manifest_Fetch(URL) {
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
Schedules_Exams_Manifest_Fetch(Schedules_Exams_Manifest_FileURL)
    .then(data => {
        if (data !== null) {
            Schedules_Exams_Manifest = data;
        }
    })
    .catch(error => {
        console.error('SAP | Error | Error fetching JSON file: ', error);
    });

// This is used by other functions to get the manifest data
async function Schedules_Exams_Load(Schedules_Exams_Manifest_FileURL) {
  try {
    const data = await Schedules_Exams_Manifest_Fetch(Schedules_Exams_Manifest_FileURL);
    Schedules_Exams_Timetable_Load();
    return data;
  } catch (error) {
    console.error('SAP | Error | Error getting manifest data: ', error);
    return null;
  }
}

// Schedules
function Schedules_Exams_Timetable_Load(){
    document.getElementById("tab_Schedules_Exam").innerHTML = "";
    var Schedule_Section = Schedules_Exams_Manifest.Schedule_Section;
    // Creates sections
    for (a = 0; a <= Schedule_Section.length - 1; a++){
        console.log(a);
        if (Schedule_Section[a].Section_Status == "Active"){
            // Section Title
            var Section_Title = document.createElement('h1');
            Section_Title.setAttribute("class", "Schedules_List_Title");
            Section_Title.innerHTML = Schedule_Section[a].Section_Name;
            document.getElementById("tab_Schedules_Exam").appendChild(Section_Title);
            // Section List Container
            var Section_Container = document.createElement('div');
            Section_Container.setAttribute("class", "Schedules_List");
            Section_Container.setAttribute("id", "Exam_"+Schedule_Section[a].Section_ID);
            document.getElementById("tab_Schedules_Exam").appendChild(Section_Container);

            // Creates day containers
            for (b = 0; b <= Schedule_Section[a].Section_Schedule.length - 1; b++){
                var Schedule_Day_Item_InnerHTML = `
                    <div class="Schedules_List_Section" id="Exam_${Schedule_Section[a].Section_ID}_${b}">
                        <h1 class="Schedules_List_Section_Title">
                            ${Schedule_Section[a].Section_Schedule[b].Schedule_Day}
                        </h1>
                    </div>
                `;
                var Schedule_Day_Item = document.createElement('span');
                Schedule_Day_Item.innerHTML = Schedule_Day_Item_InnerHTML;
                document.getElementById("Exam_" + Schedule_Section[a].Section_ID).appendChild(Schedule_Day_Item);
                // Creates individual subjects
                for (c = 0; c <= Schedule_Section[a].Section_Schedule[b].Schedule_Subjects.length - 1; c++){
                    var Schedule_Subject_Item_InnerHTML = `
                        <div class="Schedules_List_Item">
                            <h2 class="Schedules_List_Item_Title">
                                ${Schedule_Section[a].Section_Schedule[b].Schedule_Subjects[c].Subject_Name}
                            </h2>
                            <h4 class="Schedules_List_Item_Time">
                                ${Schedule_Section[a].Section_Schedule[b].Schedule_Subjects[c].Subject_Duration[0]} - ${Schedule_Section[a].Section_Schedule[b].Schedule_Subjects[c].Subject_Duration[1]}
                            </h4>
                            <h4 class="Schedules_List_Item_Room">
                                ${Schedule_Section[a].Section_Schedule[b].Schedule_Subjects[c].Subject_Location}
                            </h4>
                        </div>
                    `;
                    var Schedule_Subject_Item = document.createElement('span');
                    Schedule_Subject_Item.innerHTML = Schedule_Subject_Item_InnerHTML;
                    document.getElementById("Exam_" + Schedule_Section[a].Section_ID + "_" + b).appendChild(Schedule_Subject_Item);
                }
            }
            
        }
    }
}