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
    Explorer_Container_Clear();
    Explorer_Container_ChangeType("Image");
    Element_Attribute_Set("Quizzes_Explorer", "Level", "1");
    for (a = 0; a < Quizzes_Manifest.Subject.length; a++){
        let Object = Quizzes_Manifest.Subject[a];
        if (Object.Subject_Status == "Active"){
            Explorer_Item_Create(Object.Subject_ID, Object.Subject_Name, null, Object.Subject_Thumbnail, null, `Quizzes_Explorer_Load_Module(${a})`);
        }
        
    }
}

// Module array
function Quizzes_Explorer_Load_Module(Item){
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
}

// Subfolder array
function Quizzes_Explorer_Load_Quizzes(Item, Module){
    Explorer_Container_Clear();
    Explorer_Container_ChangeType("Text");
    Element_Attribute_Set("Quizzes_Explorer", "Level", "3");
    for (a = 0; a < Quizzes_Manifest.Subject[Item].Subject_Module[Module].Module_Subfolders.length; a++){
        let Object = Quizzes_Manifest.Subject[Item].Subject_Module[Module].Module_Subfolders[a];
        if (Object.Subfolder_Status == "Active"){
            Explorer_Item_Create(Object.Subfolder_ID, Object.Subfolder_Name, Object.Subfolder_LastModified, null, Object.Subfolder_Link, null);
        }
    }
}

// Goes up a level
function Explorer_Back(){
    Explorer_Container_Clear();
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