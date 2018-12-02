// get Zip elements
const zipList = document.querySelectorAll('.zip-elem');
//get colors
const allColors = document.querySelectorAll('.switch-color');
// ---- colors Dom convert
const convertColorList = Array.from(allColors);
// ---------------------------------
const outputList = document.querySelectorAll('.zip-output');
const btnDisplay = document.querySelector('.btn-example');
const px = 'px';
const pt = 'pt';
// grab button
let buttonDisplay = document.querySelector('.btn-example');
// ------------------------------------------------------------------------
const inputsValue = [...zipList];
const outputsValue = [...outputList];

const filterek = outputsValue.filter(e=>{
  return e.elementName;
});
var list = document.getElementsByTagName("input");
var groupList = [...list];

// ------------------------------------------------------------------------
  function detectNameValue(height){
    groupList.map(function(el){
      if(el.name === "height"){
        buttonDisplay.style.height = el.value;
      }else if(el.name === "width"){
        buttonDisplay.style.width = el.value;
      }else if(el.name === "border_radius"){
        buttonDisplay.style.borderRadius = el.value +  px;
      }else if(el.name === "border_size"){
        buttonDisplay.style.borderWidth = el.value ;
      }else if(el.name === "font-size"){
        buttonDisplay.style.fontSize = el.value ;
      }else if(el.name === "opacity"){
        buttonDisplay.style.opacity = "." + el.value ;

      }
      return;
    });
  }

  inputsValue.forEach((e,index) => e.addEventListener('input',(e)=>{
   InputValueDisplayPx(e,outputsValue[index]);
  }));

  function InputValueDisplayPx(In,Out){
    let inputValue = In.target.value;
    let outputValue = Out.innerText;
    const result = Out.innerText =  In.target.value + px;
    detectNameValue(inputValue)
        return result ;
       }

  convertColorList.forEach(e => {
    e.addEventListener('input', ()=>{
      if(e.name === 'font-color'){
        buttonDisplay.style.color = e.value;
      }else if(e.name === 'background-color'){
        buttonDisplay.style.backgroundColor = e.value;
      }else if(e.name === 'border-color'){
        buttonDisplay.style.borderColor = e.value;
      }
        return;
    });
  });

const btnCodeTextDisplay = document.querySelector('.code-display');

const btn = getComputedStyle(buttonDisplay);


 function createCodeStructureToDom(button){

  const storageCodeData = [
    "height : " + button.height,
    "width : " + button.width,
    "border-radius : " + button.borderRadius,
    "border-width : " + button.borderWidth ,
    "font-size : " + button.fontSize ,
    "opacity : " + button.opacity ,
    "color : " + button.color ,
    "background-color : " + button.backgroundColor ,
    "border-color : " + button.borderColor
  ];

  for(let i = 0; i < storageCodeData.length;i++){
    let btnData = document.createElement("p");
    btnData.className = "data-button";
    btnCodeTextDisplay.appendChild(btnData)
    btnData.innerText = storageCodeData[i];
  }
}
function update(button){
  const updateCodeData = [
    "height : " + button.height,
    "width : " + button.width,
    "border-radius : " + button.borderRadius,
    "border-width : " + button.borderWidth ,
    "font-size : " + button.fontSize ,
    "opacity : " + button.opacity ,
    "color : " + button.color ,
    "background-color : " + button.backgroundColor ,
    "border-color : " + button.borderColor
  ];
  for(let i = 0; i < updateCodeData.length;i++){
    let p = document.getElementsByTagName('p');
    p[i].innerText =  updateCodeData[i];
  }
  return updateCodeData;
}

createCodeStructureToDom(btn);
const mainContainer = document.querySelector('#container');
mainContainer.addEventListener('input',()=>{
  update(btn)
})