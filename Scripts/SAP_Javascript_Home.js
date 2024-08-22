window.onload = function (){
    Element_Attribute_Set('Home_Welcome_Loading', 'State', 'Invisible');
    setTimeout(function(){
        Element_Style_Animate_Batch_QuerySelector(".Home_Welcome_Content", "Home_Welcome_Sequence_1", "4s", "forwards", 1, 1);
        Element_Style_Animate_Batch_QuerySelector(".Home_Welcome_Title", "Home_Welcome_Sequence_2", "4s", "forwards", 1, 1);
        Element_Style_Animate_Batch_QuerySelector(".Home_Welcome_Title_Text", "Home_Welcome_Sequence_3", "1s", "forwards", 1, 0.3);
        setTimeout(function(){
            Element_Attribute_Set('Home_Welcome_Main', 'State', 'Visible');
        }, 3000);
    }, 500);
    
};

function Home_Start(){
    Element_Attribute_Set('Home_Welcome', 'State', 'Invisible');
    document.getElementById("Quizzes").click();
    Quizzes_Manifest_Load(Quizzes_Manifest_FileURL);
    Schedules_Class_Load(Schedules_Class_Manifest_FileURL);
}

// Object that contains the subject list
let Quizzes_Manifest = {};
// URL to the .json file 
var Quizzes_Manifest_FileURL = "Assets/SAP-Subject-Manifest.json";

// Gets the manifest file and returns the data
async function Quizzes_Manifest_Fetch(URL) {
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
function Quizzes_Explorer_Load_Subject(){
    Element_Style_Animate_Batch_QuerySelector(".Explorer_Item", "Explorer_Item_Close", "0.2s", "forwards", "1", 0);
    setTimeout(function(){
        Element_Attribute_Set("Quizzes_Container", "State", "Header_Inactive");
        Explorer_Container_Clear();
        Explorer_Container_ChangeType("Image");
        Element_Attribute_Set("Quizzes_Explorer", "Level", "1");
        for (a = 0; a < Quizzes_Manifest.Subject.length; a++){
            let Object = Quizzes_Manifest.Subject[a];
            if (Object.Subject_Status == "Active"){
                Explorer_Item_Create(Object.Subject_ID, Object.Subject_Name, null, Object.Subject_Thumbnail, null, `Quizzes_Explorer_Load_Module(${a})`);
            }
            
        }
        Element_Style_Animate_Batch_QuerySelector(".Explorer_Item", "Explorer_Item_Open", "0.5s", "forwards", "1", 100);
    }, 200);
    
}

// Module array
function Quizzes_Explorer_Load_Module(Item){
    Element_Style_Animate_Batch_QuerySelector(".Explorer_Item", "Explorer_Item_Close", "0.2s", "forwards", "1", 0);
    setTimeout(function(){
        Element_Attribute_Set("Quizzes_Container", "State", "Header_Active");
        Element_Attribute_Set("Quizzes_Title_Content", "Stage", "Subject");
        Explorer_Container_Clear();
        Explorer_Container_ChangeType("Image");
        Element_Attribute_Set("Quizzes_Explorer", "Level", "2");
        Element_Attribute_Set("Quizzes_Explorer", "Memory_Value", Item);
        
        for (a = 0; a < Quizzes_Manifest.Subject[Item].Subject_Module.length; a++){
            let Object = Quizzes_Manifest.Subject[Item].Subject_Module[a];
            if (Object.Module_Status == "Active"){
                Explorer_Item_Create(Object.Module_ID, Object.Module_Name, Object.Module_LastModified, Object.Module_Thumbnail, null, `Quizzes_Explorer_Load_Quizzes(${Item}, ${a})`);
            }
        }

        document.getElementById("Quizzes_Title_Subject").innerHTML = Quizzes_Manifest.Subject[Item].Subject_Name;
        Element_Style_Animate_Batch_QuerySelector(".Explorer_Item", "Explorer_Item_Open", "0.5s", "forwards", "1", 100);
    }, 200);
    
}

// Subfolder array
function Quizzes_Explorer_Load_Quizzes(Item, Module){
    Element_Style_Animate_Batch_QuerySelector(".Explorer_Item", "Explorer_Item_Close", "0.2s", "forwards", "1", 0);
    setTimeout(function(){
        Element_Attribute_Set("Quizzes_Container", "State", "Header_Active");
        Element_Attribute_Set("Quizzes_Title_Content", "Stage", "Folder");
        Explorer_Container_Clear();
        Explorer_Container_ChangeType("Text");
        Element_Attribute_Set("Quizzes_Explorer", "Level", "3");
        for (a = 0; a < Quizzes_Manifest.Subject[Item].Subject_Module[Module].Module_Subfolders.length; a++){
            let Object = Quizzes_Manifest.Subject[Item].Subject_Module[Module].Module_Subfolders[a];
            if (Object.Subfolder_Status == "Active"){
                Explorer_Item_Create(Object.Subfolder_ID, Object.Subfolder_Name, Object.Subfolder_LastModified, null, Object.Subfolder_Link, null);
            }
        }
        
        document.getElementById("Quizzes_Title_Folder").innerHTML = Quizzes_Manifest.Subject[Item].Subject_Module[Module].Module_Name;
        Element_Style_Animate_Batch_QuerySelector(".Explorer_Item", "Explorer_Item_Open", "0.5s", "forwards", "1", 100);
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

// Clears the contents of the container
function Explorer_Container_Clear(){
    document.getElementById("Quizzes_Explorer").innerHTML = "";
}

// Changes the type of container
function Explorer_Container_ChangeType(Container_Type){
    Element_Attribute_Set("Quizzes_Explorer", "Type", Container_Type);
}

// Generate an explorer item
function Explorer_Item_Create(Item_ID, Item_Title, Item_Subtitle, Item_Thumbnail, Item_Link, Item_Onclick){
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
            Item_Element.setAttribute('onclick', `Page_ChangePage("${Item_Link}")`);
        } else {
            Item_Element.setAttribute('onclick', `${Item_Onclick}`);
        }
        document.getElementById("Quizzes_Explorer").appendChild(Item_Element);
    }
    if(Element_Attribute_Get("Quizzes_Explorer", "Type") == "Text"){
        var Item_Element_InnerHTML = `
            <div class="Explorer_Item_Details">
                <h3 class="Explorer_Item_Details_Text" Primary>
                    ${Item_Title}
                </h3>
                <h3 class="Explorer_Item_Details_Text" Secondary>
                    ${Item_Subtitle}
                </h3>
            </div>
        `;
        var Item_Element = document.createElement('button');
        Item_Element.innerHTML = Item_Element_InnerHTML;
        Item_Element.setAttribute('id', Item_ID);
        Item_Element.setAttribute('class', 'Explorer_Item');
        Item_Element.setAttribute('Type', 'Text');
        if (Item_Link != null){
            Item_Element.setAttribute('onclick', `Page_ChangePage("${Item_Link}")`);
        } else {
            Item_Element.setAttribute('onclick', `${Item_Onclick}`);
        }
        document.getElementById("Quizzes_Explorer").appendChild(Item_Element);
    }

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