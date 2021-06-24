var aktuel = 0;
var container = document.getElementById("container");
var formAll = document.getElementById("formAll");
var forms = formAll.getElementsByClassName("form");

var kreise = document.getElementById("icon").getElementsByClassName("kreis");
var alleInputs = container.getElementsByTagName("input");



function navi(n) {
    
    var last = aktuel;
    if (stepCheck(n) == true)
    {
        return;
    }
    forms[aktuel].style.display = "none";
    aktuel += n;
    forms[aktuel].style.display = "block";
    btnUpdate(n);
    stepUpdate(last);


}



function stepCheck(x) {
    if (aktuel == 0 && x == -1) {
        return true;
    }
    if (aktuel == forms.length - 1 && x == 1) {
        senden();
        return true;
    }
    return false;
}

function btnUpdate(x) {
    if (aktuel == 0) {
        document.getElementById("pre").style.opacity = "0";
    }
    else {
        document.getElementById("pre").style.opacity = "1";
    }
    if (aktuel == forms.length - 1) {
        document.getElementById("next").innerHTML = "Submit";
    }
    else {
        document.getElementById("next").innerHTML = "Next";
    }
}

function stepUpdate(vorher) {

   /* for(var i = 0; i < forms[vorher].inputs.length; i++)
    {
        if(inputs[i].value == "")
        {
            alert("Bitte alle Felder ausfüllen!");
            return;
        }
    }*/
           kreise[vorher].style.backgroundColor = "white";
            kreise[vorher].innerHTML = `<i class="fal fa-check-circle"></i>`;
       

     
    
 

    kreise[aktuel].style.backgroundColor = "#a750e6";
    kreise[aktuel].style.color = "white";
    kreise[aktuel].innerHTML = aktuel + 1;
    

}

function senden()
{
    
    

    forms[aktuel].style.display = "none";
    document.getElementById("pre").style.display = "none";
    document.getElementById("next").style.display = "none";

    document.getElementById("gesendet").style.display = "block";


    kreise[aktuel].style.backgroundColor = "white";
    kreise[aktuel].innerHTML = `<i class="fal fa-check-circle"></i>`;
   
    
}