let Settings_Data = {
    "SoundEffects": "Active",
    "GIFFinishers": "Active",
    "DarkMode": "Active",
    "QuizMode": "Multiple_Choice"
}

var Settings_Key = "SAP_Settings";

function Settings_Load_Data(){
    if (localStorage.getItem(Settings_Key) != null){
        Settings_Data = JSON.parse(localStorage.getItem(Settings_Key));
    } else {
        localStorage.setItem(Settings_Key, JSON.stringify(Settings_Data));
    }
}

function Settings_Save(){
    Settings_Data.SoundEffects = Element_Attribute_Get("Settings_SoundEffects", "State");
    Settings_Data.GIFFinishers = Element_Attribute_Get("Settings_GIFFinishers", "State");
    Settings_Data.DarkMode = Element_Attribute_Get("Settings_DarkMode", "State");

    Settings_Save_ToStorage();
    console.log("Settings saved");
}

function Settings_Save_ToStorage(){
    localStorage.setItem(Settings_Key, JSON.stringify(Settings_Data));
}

function Settings_Load(){

}

function Settings_Load_Values(){
    Element_Attribute_Set("Settings_SoundEffects", "State", Settings_Data.SoundEffects);
    Element_Attribute_Set("Settings_GIFFinishers", "State", Settings_Data.GIFFinishers);
    Element_Attribute_Set("Settings_DarkMode", "State", Settings_Data.DarkMode);
}