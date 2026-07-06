 let App_Property = {
   Page_File: "Home.html",
   Page_Property: {
     TitleBar_Title: "",
     Page: {
       Title: "",
       Icon: "Assets/Icons/favicon.png",
       MainView: {
         UseFullContainer: false,
       },
     },
     Header: {
       Title: "",
       Icon: "Assets/Icons/favicon.png",
       Menu_Contents: {
         PageNavigation: [],
         Actions: [],
       },
     },
     Sidebar: {
       HideWhenCollapsed: false,
       PushContentWhenExpanded: false,
       Width_Expanded: 300,
       Width_Collapsed: 40,
     },
     LoadingScreen: {
       Configuration: "Splash",
     },
     Features: {
       Header: true,
       Sidebar: true,
       Sidebar_Elements: {
         Toggle: true,
         Container: true,
         Tabs: true,
       },
       ClockScreen: true,
       LoadingScreen: true,
       StatusBar: true,
       StatusBar_Elements: {
         EnableAll: true,
         Clock: true,
         Battery: true,
         Connection: true,
       },
       Ribbon: true,
       Toasts: true,
       Projects: true,
     },
   },
 };

