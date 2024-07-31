let btn = document.getElementById("button");
let text = document.getElementById("textarea");
let notes_container = document.getElementById("notes_container");
let color = document.getElementById("color");
let message = document.getElementById("message");

 function addNotes(){
    if(text.value === ""){
        alert("please enter some text on sticky notes");
        return ;
    }
   
   message.innerText= ""; 
  let div = document.createElement("div");
  let p = document.createElement("p");
  let cross_btn = document.createElement("button");
//   console.log(div,p, cross_btn);

  div.append(p);
  div.append(cross_btn);
  
  cross_btn.innerText = "X";
  p.innerText = text.value;
  notes_container.appendChild(div);
  div.style.backgroundColor = color.value;
   text.value = "";

   cross_btn.addEventListener('click',function(){
    div.style.display = "none";
   })

  console.log(div);

  
 }

btn.addEventListener('click',addNotes);