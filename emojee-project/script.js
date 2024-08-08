let emojee_containers = document.getElementById("emojee_container");
let search_field = document.getElementById("search_field");

function displayEmojee(searchQuery = ""){
  let filteredList = emojiList.filter(function(emoji){
    if(emoji.description.indexOf(searchQuery) !== -1){
        return true;
    }
    // }else{
    //     return true;
    // }
  })
    
   // console.log("😀");
   //console.log(emojiList);
   console.log(filteredList);
   emojee_containers.innerHTML = "";
  //emojiList.forEach(function(emojee){
    filteredList.forEach(function(emojee){
    // console.log(emojee);
    let newRow = document.createElement("tr");
    let new_emoji = document.createElement("td");
    let new_aliases = document.createElement("td");
    let new_description = document.createElement("td");

    
  
    new_emoji.innerText = emojee.emoji;
    new_description.innerText = emojee.description;
    // new_aliases.innerText = emojee.aliases
    new_aliases.innerText = emojee.aliases.join(", ");
     
    newRow.appendChild(new_emoji);
    newRow.appendChild(new_aliases);
    newRow.appendChild(new_description);

    emojee_containers.appendChild(newRow);

    // console.log(newRow);

  })
}



let ans = window.addEventListener('load',()=>displayEmojee());
search_field.addEventListener('keyup',(e)=>{
let value = e.target.value;

console.log(value);

displayEmojee(value)
})


console.log(ans);