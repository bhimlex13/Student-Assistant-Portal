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
}