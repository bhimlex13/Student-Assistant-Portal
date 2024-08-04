function Screens_Open(ID, ToDirection){
    Element_Attribute_Set(ID, "State", "Active");
    Screens_Element = document.getElementById(ID);
    if (ToDirection == "Left"){
        Screens_Element.style.animationName = "Screens_Slide_Enter_ToLeft";
    } else if (ToDirection == "Right") {
        Screens_Element.style.animationName = "Screens_Slide_Enter_ToRight";
    }
}

function Screens_Close(ID, ToDirection){
    Screens_Element = document.getElementById(ID);
    if (ToDirection == "Left"){
        Screens_Element.style.animationName = "Screens_Slide_Leave_ToLeft";
        setTimeout(function(){
            Element_Attribute_Set(ID, "State", "Inactive");
            Screens_Element.style.animationName = "";
        }, 200);
    } else if (ToDirection == "Right") {
        Screens_Element.style.animationName = "Screens_Slide_Leave_ToRight";
        setTimeout(function(){
            Element_Attribute_Set(ID, "State", "Inactive");
            Screens_Element.style.animationName = "";
        }, 200);
    }
    
}

function Element_Attribute_Set(ID, Attribute, Value){
    document.getElementById(ID).setAttribute(Attribute, Value);
}

function Element_Attribute_Get(ID, Attribute){
    return document.getElementById(ID).getAttribute(Attribute);
}

function Element_Attribute_Remove(ID, Attribute){
    document.getElementById(ID).removeAttribute(Attribute);
}


  