
// get element into variable

var inputEle = document.getElementById("input");
var buttonEle = document.getElementById("btn");
var msgELe = document.getElementById("msg");


// Events

buttonEle.onclick = function(){
    // get value from input
    var inputValue = inputEle.value;
    // validation

    if(inputValue != "")
    {
        // put value in paragrapg element
        msgELe.innerHTML = inputValue;

        // empty input value

        inputEle.value = "";
    }


    

}
