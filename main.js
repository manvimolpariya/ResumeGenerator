let inputForm=document.getElementById("input-form");


// input-image
const inputImage=document.getElementById("input-images");

//personal info input//

//declarationinput-info//
const declarationinput=document.getElementById("declaration-input");

// Navbar//
const editResumeNav = document.getElementById("edit-resume-nav");
const changeColorBtn = document.getElementById("change-color");
const changeFontBtn = document.getElementById("change-font");
const changeSizeBtn = document.getElementById("change-size");

const colors = document.getElementById("colors");
const fonts = document.getElementById("fonts");
const sizes = document.getElementById("text-sizes");

const technicalInfo = document.getElementById("technical-info");

let educationInput=document.getElementById("education-input");

 function AddField(){  
    let workInputDiv=document.getElementById("work-experience-input-div");
    let addWorkFieldBtn=document.getElementById("work-btn");
    let newField=document.createElement("textarea");
    newField.classList.add("experience-input");
 workInputDiv.insertBefore(newField, addWorkFieldBtn);
  }
 
  function addEducationField(){
    let educationinputdiv=document.getElementById("education-input-div");
let educationinputbtn=document.getElementById("education-input-btn");
    let newField=document.createElement("textarea");
    newField.classList.add("education-input");
    educationinputdiv.insertBefore(newField, educationinputbtn);
  }
 
  function addTechnicalField(){
    const technicalknowledgediv = document.getElementById("technical-knowledge-div");
    const technicalknowledgebtn = document.getElementById("technical-knowledge-btn");
    let newField=document.createElement("textarea");
    newField.classList.add("technical-info");
    technicalknowledgediv.insertBefore(newField, technicalknowledgebtn);
  }
     
    function generateResume(){
    document.getElementById("input-form").style.display="none";
    document.getElementById("resume").style.display="block";
    document.getElementById("edit-resume-nav").style.display="block";
    document.getElementsByClassName("btns")[0].style.display="block";
    document.getElementsByClassName("btns")[1].style.display="block";
    let nameoutput=document.getElementById("name-output");
   let addressoutput=document.getElementById("address-output");
   let contactoutput=document.getElementById("contact-num-output");
   let emailoutput=document.getElementById("email-output");
   
   let nameInput=document.getElementById("name-input");
    let addressInput=document.getElementById("address-input");
    let contactInput=document.getElementById("contact-input");
    let emailInput=document.getElementById("email-input");
    
    nameoutput.innerHTML=nameInput.value;
    addressoutput.innerHTML=addressInput.value;
    contactoutput.innerHTML=contactInput.value;
    contactoutput.innerHTML=contactInput.value;
    emailoutput.innerHTML= emailInput.value;

    const genderInput = document.getElementById("gender-input");
const martialInput = document.getElementById("martial-input");
    const dobInput=document.getElementById("dob-input");
const fatherinput=document.getElementById("father-input");
const nationalityinput=document.getElementById("nationality-input");
const langinput=document.getElementById("lang-input");
const hobbiesinput=document.getElementById("hobbies-input");


const  dobOutput = document.getElementById("dob-output");
const fatherOutput = document.getElementById("father-output"); 
const genderOutput =  document.getElementById("gender-output");
const martialOutput = document.getElementById("martial-output");
const nationalityOutput = document.getElementById("nationality-output");
const langOutput = document.getElementById("lang-output");
const hobbiesOutput =  document.getElementById("hobbies-output");

const  dobOutputRow=document.getElementById("dob-output-row");
const fatherOutputRow=document.getElementById("father-output-row");
const  nationalityOutputRow=document.getElementById("nationality-output-row");
const langOutputRow=document.getElementById("lang-output-row");
const  hobbiesOutputRow=document.getElementById("hobbies-output-row");

const declareinput=document.getElementById("declaration-input");
const declareoutput=document.getElementById("declaration-output");
 
let educationOutputHeading=document.getElementById("education-output-heading");
let educationUl=document.getElementById("e-ul");
let workUl=document.getElementById("w-ul");
let techUl=document.getElementById("t-ul");
let  workOutputHeading=document.getElementById("work-output-heading");
let  techOutputHeading=document.getElementById("tech-output-heading");
let educationTxt = document.getElementsByClassName("education-input")

 educationOutputHeading.style.display = "none";
techOutputHeading.style.display="none";
 workOutputHeading.style.display='none';
let str = "";

for (e of educationTxt) {

    if (e.value) {
        educationOutputHeading.style.display = "block";
        str += `<li>${e.value} </li>`;
    }
    educationOutputHeading.style.paddingTop = "0.5em";
}

educationUl.innerHTML = str;

// for work Experience

let workTxt = document.getElementsByClassName("experience-input")

let str2 = "";

for (e of workTxt) {
    if (e.value) {
        workOutputHeading.style.display = "block";
        str2 += `<li>${e.value} </li>`;
    }
    workOutputHeading.style.paddingTop = "0.5em";
}

workUl.innerHTML = str2;

// for technical Knowledge

let techTxt = document.getElementsByClassName("technical-info")

let str3 = "";

for (e of techTxt) {
    if (e.value) {
        techOutputHeading.style.display = "block";
        str3 += `<li>${e.value} </li>`;
    }
    techOutputHeading.style.paddingTop = "0.5em";
}

techUl.innerHTML = str3;
if(declareinput.value==""){
  declareoutput.innerHTML="I hereby declare that all the information given by me is true to the best of my knowledge and belief.";
}else{
  declareoutput.innerHTML=declareinput.value;
}
let martialValue = document.querySelector('input[name = "martial-radio-btn"]:checked').value;

    martialInput.value = martialValue;

    let genderValue = document.querySelector('input[name = "gender-radio-btn"]:checked').value;

    genderInput.value = genderValue;

if (dobInput.value  || martialInput.value || genderInput.value || fatherinput.value || nationalityinput.value || langinput.value || hobbiesinput.value) {

    document.getElementById("personal-output-div").style.display = "block";

    if (dobInput.value) {
        dobOutput.innerHTML = dobInput.value;
    } else {
        dobOutputRow.style.display = "none";
    }

    if (fatherinput.value) {
        fatherOutput.innerHTML = fatherinput.value;
    } else {
        fatherOutputRow.style.display = "none";
    }

    genderOutput.innerHTML = genderValue;
   martialOutput.innerHTML = martialValue;

    if (nationalityinput.value) {
        nationalityOutput.innerHTML = nationalityinput.value;
    } else {
        nationalityOutputRow.style.display = "none";
    }
    if (langinput.value) {
        langOutput.innerHTML =langinput.value;

    } else {
        langOutputRow.style.display = "none";
    }
    if (hobbiesinput.value) {
        hobbiesOutput.innerHTML =hobbiesinput.value;

    } else {
        hobbiesOutputRow.style.display = "none";
    }

} else {
  document.getElementById("personal-output-div").style.display = "none";
}


}
function editGenerate(){
    document.getElementById("input-form").style.display="flex";
    document.getElementById("resume").style.display="none";
    document.getElementById("edit-resume-nav").style.display="none";
    document.getElementsByClassName("btns")[0].style.display="none";
    document.getElementsByClassName("btns")[1].style.display="none";
}

function showColors() {

  colors.style.display = "flex";
  changeColorBtn.classList.add("active");
}

function showFonts() {

  fonts.style.display = "flex";
  changeFontBtn.classList.add("active");

}

function showSizes() {

  sizes.style.display = "flex";
  changeSizeBtn.classList.add("active");

}

function changeColor1() {

  changeResumeColor("red");

}

function changeColor2() {

  changeResumeColor("blue");

}

function changeColor3() {

  changeResumeColor("green");

}

function changeColor4() {

  changeResumeColor("orangered");

}

function changeColor5() {

  changeResumeColor("#df4859");

}

function changeColor6() {

  changeResumeColor("#5086d9");

}

function changeColorCustom() {
  let color = document.getElementById("custom-color").value;

  changeResumeColor(color);
}

function changeResumeColor(color) {
  let educationOutputHeading=document.getElementById("education-output-heading");
  let  workOutputHeading=document.getElementById("work-output-heading");
let  techOutputHeading=document.getElementById("tech-output-heading");
let personalOutputHeading=document.getElementById("heading-personalinfo");
let declarationOutputHeading=document.getElementById("declaration-output-heading");
let resumeOutputHeading=document.getElementById("resume-output-heading");
let nameOuput=document.getElementById("name-output");
educationOutputHeading.style.color = color;
  workOutputHeading.style.color = color;
  techOutputHeading.style.color = color;
  personalOutputHeading.style.color = color;
 declarationOutputHeading.style.color = color;
  nameOuput.style.color = color;
  resumeOutputHeading.style.color = color;
educationOutputHeading.style.borderBottomColor=color;
workOutputHeading.style.borderBottomColor = color;
techOutputHeading.style.borderBottomColor = color;
personalOutputHeading.style.borderBottomColor = color;
declarationOutputHeading.style.borderBottomColor = color;

}

function changeResumeFonts(font) {
  let educationOutputHeading=document.getElementById("education-output-heading");
  let  workOutputHeading=document.getElementById("work-output-heading");
let  techOutputHeading=document.getElementById("tech-output-heading");
let personalOutputHeading=document.getElementById("heading-personalinfo");
let declarationOutputHeading=document.getElementById("declaration-output-heading");
let resumeOutputHeading=document.getElementById("resume-output-heading");

  if (document.getElementById("change-headings-font").checked == true) {
     personalOutputHeading.style.fontFamily = educationOutputHeading.style.fontFamily = workOutputHeading.style.fontFamily = techOutputHeading.style.fontFamily = declarationOutputHeading.style.fontFamily = resumeOutputHeading.style.fontFamily = font;
  }

  if (document.getElementById("change-content-font").checked == true) {
      resume.style.fontFamily = font;
  }

}
let headingFontSize = 23;
let resumeHeadingFontSize = 33;

let contentFontSize = 16;
function changeFont1() {


  changeResumeFonts("'Roboto', sans-serif");
}

function changeFont2() {
  changeResumeFonts("'Koulen', cursive");
}

function changeFont3() {
  changeResumeFonts("'Source Serif 4', serif");
}

function changeFont4() {
  changeResumeFonts("'DM Serif Display', serif");
}

function changeFont5() {
  changeResumeFonts(" 'Baloo 2', cursive");
}

function increaseFontSize() {
let resumeOutputHeading=document.getElementById("resume-output-heading");

  if (document.getElementById("change-headings-size").checked == true) {
      headingFontSize += 2;
      resumeHeadingFontSize += 2;
      let hfont = headingFontSize + "px";

     
      hfont = resumeHeadingFontSize + "px";

      resumeOutputHeading.style.fontSize = hfont;
  }

  if (document.getElementById("change-content-size").checked == true) {
      contentFontSize += 1;
      let cfont = contentFontSize + "px";
      resume.style.fontSize = cfont;
  }

}

function decreaseFontSize() {
  let resumeOutputHeading=document.getElementById("resume-output-heading");
  if (document.getElementById("change-headings-size").checked == true) {

      headingFontSize -= 2;
      resumeHeadingFontSize -= 2;
      let hfont = headingFontSize + "px";
      hfont = resumeHeadingFontSize + "px";
      resumeOutputHeading.style.fontSize = hfont;
  }

  if (document.getElementById("change-content-size").checked == true) {
      contentFontSize -= 1;
      let cfont = contentFontSize + "px";
      resume.style.fontSize = cfont;
  }
}
function printResume() {
  let header=document.getElementById("header");
  let resume=document.getElementById("resume");
  let printBtn=document.getElementById("printbtn");
  let editResumeNav=document.getElementById("edit-resume-nav");
  let editBtn=document.getElementById("editResume");
  header.style.display = "none";
  resume.style.boxShadow = "none";
  resume.style.width = "100%";
  printBtn.style.display = "none";
  editResumeNav.style.display = "none";
  editBtn.style.display = "none";
  window.print();

  setTimeout(() => {
      header.style.display = "block";
      resume.style.boxShadow = "2px 2px 20px rgba(0, 0, 0, 0.4), -2px -2px 20px rgba(0, 0, 0, 0.4)";

      if (window.screen.width * window.devicePixelRatio > Number(1170)) {
          resume.style.width = "90%";

      } else {
          resume.style.width = "90%";
      }
      printBtn.style.display = "block";
      editResumeNav.style.display = "block";
      editBtn.style.display = "block";
  }, 1000);


}

