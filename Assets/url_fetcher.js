function UF_Parameter_Get(Parameter){
    UF_Requested_Parameter = Parameter;
    UF_Parameter_Value = new URLSearchParams(window.location.search).get(Parameter);
    if (UF_Parameter_Value != null || UF_Parameter_Value != undefined){
        return UF_Parameter_Value;
    }
}

function UF_Parameter_Set(Parameter, Value){
    UF_URL_Parameter = new URLSearchParams(window.location.search);
    UF_URL_Parameter.set(Parameter, Value);
    UF_URL = window.location.pathname + '?' + UF_URL_Parameter.toString();
    window.history.pushState({}, '', UF_URL);
}