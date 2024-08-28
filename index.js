const submit = document.querySelector("button");
const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
const consent = document.getElementById("consent");

const checkmark = document.querySelector(".checkmark");

const header = document.querySelector("header");

const colorGreen = getComputedStyle(document.documentElement).getPropertyValue('--Green600medium');
const colorLightGreen = getComputedStyle(document.documentElement).getPropertyValue('--Green200lighter');

const errorfn = document.querySelector(".firstnamee");
const errorln = document.querySelector(".lastnamee");
const erroremail = document.querySelector(".emaile");
const invalidemail = document.querySelector(".invalidemaile");
const errorquery = document.querySelector(".querye");
const errormessage = document.querySelector(".messagee");
const errorconsent = document.querySelector(".consente");

const forum = document.querySelector("form");

const regex = /^[\w]*@[\w]*\.[\w]*/g;
var selectedVal = "";

var counter = 0;
checkmark.addEventListener("click", function(){
    if(counter % 2 == 0) consent.checked = true;
    else consent.checked = false;
    counter ++;
})
forum.addEventListener('change', function(){
    if(selectedVal != ""){
        const selectedDiv = document.querySelector(`.${selectedVal}c`);
        selectedDiv.style.backgroundColor = "white";
        selectedDiv.style.border = `1px solid black`;
        const selectedRadio1 = document.getElementById(`${selectedVal}e`);
        selectedRadio1.style.filter = "hue-rotate(none)";
    }
    const selectedRadio = document.querySelector("input[name='query-type']:checked");
    if(selectedRadio){
        selectedVal = selectedRadio.value;
        const selectedDiv = document.querySelector(`.${selectedVal}c`);
        selectedDiv.style.backgroundColor = colorLightGreen;
        selectedDiv.style.border = `2px solid ${colorGreen}`;
        selectedRadio.style.filter = "hue-rotate(270deg)";
    }
})
var flags = [true, true, true, true, true, true];
var overallFlag = true;


submit.addEventListener("click", function(event){
    event.preventDefault();
    if(firstname.value == ""){
        errorfn.style.display = "block";
        flags[0] = false;
    }
    else{
        errorfn.style.display = "none";
        flags[0] = true;
    }

    if(lastname.value == ""){
        errorln.style.display = "block";
        flags[1] = false;
    }
    else{
        errorln.style.display = "none";
        flags[1] = true;
    }

    if(email.value == ""){
        erroremail.style.display = "block";
        invalidemail.style.display = "none";
        flags[2] = false;
    }
    else if(email.value.search(regex) == -1){
        invalidemail.style.display = "block";
        erroremail.style.display = "none";
        flags[2] = false;
    }
    else{
        erroremail.style.display = "none";
        invalidemail.style.display = "none";
        flags[2] = true;
    }

    if(selectedVal == ""){
        errorquery.style.display = "block";
        flags[3] = false;
    }
    else{
        errorquery.style.display = "none";
        flags[3] = true;
    }

    if(message.value == ""){
        errormessage.style.display = "block";
        flags[4] = false;
    }
    else{
        errormessage.style.display = "none";
        flags[4] = true;
    }

    if(consent.checked == false){
        errorconsent.style.display = "block";
        flags[5] = false;
    }
    else{
        errorconsent.style.display = "none";
        flags[5] = true;
    }
    flags.forEach(fl => {
        if(!fl){
            overallFlag = false;
        }
    })
    if(overallFlag){
        header.classList.add("clicked");
        setTimeout(myfunction, 3000);
        const selectedDiv = document.querySelector(`.${selectedVal}c`);
        selectedDiv.style.backgroundColor = "white";
        selectedDiv.style.border = `1px solid black`;
        const selectedRadio1 = document.getElementById(`${selectedVal}e`);
        selectedRadio1.style.filter = "hue-rotate(none)";
        forum.reset();
    }
    else{
        overallFlag = true;
    }
})
function myfunction(){
    header.classList.remove("clicked");
}