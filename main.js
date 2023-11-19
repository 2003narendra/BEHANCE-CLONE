let availablekeywords=[
  'HTML',
  'CSS',
  'Presidio',
  'ProGrad',
  'How to make a website',
  'How to become full stack developer',
  'how to learn full stack',
];
const resultsBox=document.querySelector(".result-box");
const inputBox =document.getElementById("input-box");
inputBox.onkeyup=function(){
  let result=[];
  let input=inputBox.value;
  if(input.length){
    result=availablekeywords.filter((keyword)=>{
     return  keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);
  if(!result.length){
    resultsBox.innerHTML='';
  }
 };
 function display(result){
  const content=result.map((list)=>{
    return "<li onclick=selectInput(this)>" + list +"</li>";
  });
  resultsBox.innerHTML="<ul>"+content.join('')+"</ul>"
}
function selectInput(list){
  inputBox.value=list.innerHTML;
  resultsBox.innerHTML='';
}

document.querySelectorAll('.image-container img').forEach(image =>{
  image.onclick = ()=>{
      document.querySelector('.popup-image').style.display='block';
      var img1 = document.createElement('img');
      img1.src = image.getAttribute('src');
      document.getElementById('imageclass').appendChild(img1);
  
  }
});
document.querySelector('.popup-image span').onclick=()=>{
  document.querySelector('.popup-image').style.display='none'
}
function curated(){
let img1 = document.getElementById("curated");
img1.style.visibility="visible";
let img2=document.getElementById("most-appreciated");
img2.style.visibility="hidden";
let img3=document.getElementById("most-discussed");
img3.style.visibility="hidden";
let img4=document.getElementById("most-dis");
img4.style.visibility="hidden";
let img5=document.getElementById("most-viewed");
img5.style.visibility="hidden";
}
function most_viewed(){
let img1 = document.getElementById("curated");
img1.style.visibility="hidden";
let img2=document.getElementById("most-appreciated");
img2.style.visibility="hidden";
let img3=document.getElementById("most-discussed");
img3.style.visibility="hidden";
let img4=document.getElementById("most-dis");
img4.style.visibility="hidden";
let img5=document.getElementById("most-viewed");
img5.style.visibility="visible";

}
function most_appreciated(){
let img1 = document.getElementById("curated");
img1.style.visibility="hidden";
let img2=document.getElementById("most-appreciated");
img2.style.visibility="visible";
let img3=document.getElementById("most-discussed");
img3.style.visibility="hidden";
let img4=document.getElementById("most-dis");
img4.style.visibility="hidden";
let img5=document.getElementById("most-viewed");
img5.style.visibility="hidden";
}
function most_discussed(){
let img1 = document.getElementById("curated");
img1.style.visibility="hidden";
let img2=document.getElementById("most-appreciated");
img2.style.visibility="hidden";
let img3=document.getElementById("most-discussed");
img3.style.visibility="visible";
let img4=document.getElementById("most-dis");
img4.style.visibility="visible";
let img5=document.getElementById("most-viewed");
img5.style.visibility="hidden";

}



function search(){
var see=document.getElementById("input-box");
if(see.value=="curated"){
  curated();
}
else if(see.value=="most viewed"){
  most_viewed();
}
else if(see.value=="most appreciated"){
  most_appreciated();
}
else if(see.value=="most discussed"){
  most_discussed();
}
}