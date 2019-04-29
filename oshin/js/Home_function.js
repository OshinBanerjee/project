


function showError(input1,label1){
    var x1=document.getElementById(input1);
    var x3=x1.value.length;
    if(x1.validity.valueMissing==true && x1.hasAttribute("required")==true){
        var x2="Please enter valid "+document.getElementById(label1).textContent;
          createError(x2,input1);
    }
    else if(x1.hasAttribute("pattern")==true && x1.validity.patternMismatch==true){
        var x2=document.getElementById(label1).textContent+" should start with letter";
    createError(x2,input1);
    }
        else if((x1.getAttribute("minlength")>x3 && x1.hasAttribute("minlength")==true) || (x1.validity.tooLong==true && x1.hasAttribute("maxlength")==true)){
           var x2="Text should be of length between "+x1.getAttribute("minlength")+" to "+ x1.getAttribute("maxlength")+" characters.";
         createError(x2,input1);
     }
     else if(x1.type=="date" && !x1.checkValidity()){
         var x2="Enter valid Date";
         createError(x2,input1);
     }
      
    
}

function createError(error_msg,id){
    var x=document.getElementById(id);
        alert(error_msg);
    }

function currentDate(){
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#givDate").value = today;
}
window.onload = currentDate;
