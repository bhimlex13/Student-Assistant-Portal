async function Transition(){
    console.log("Triggered");
    LoadingScreen_Show();
    return new Promise(resolve => 
      setTimeout(resolve, 1000)
    );
  }
  
  function LoadingScreen_Show(){
    Element_Attribute_Set("LoadingScreen", "State", "Active");
  }
  
  function LoadingScreen_Hide(){
    setTimeout(Element_Attribute_Set("LoadingScreen", "State", "Inactive"), 500);
  }