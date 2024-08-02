const insert = document.getElementById('insert');
console.log(insert);

window.addEventListener('keydown',(e) =>{
let keyName = e.key;
if(keyName === ' '){
    keyName = 'Space'
}
console.log(keyName);

const keyDiv = document.createElement('div');
keyDiv.className = 'key';
keyDiv.innerHTML = keyName + '<small>event.key</small>';


console.log(keyDiv);

const keyCodeDiv = document.createElement('div');
keyCodeDiv.className = 'key';
keyCodeDiv.innerHTML = e.keyCode + '<small>event.keyCode</small>';
 console.log(keyCodeDiv);

const codeDiv = document.createElement('div');
codeDiv.className = 'key';
codeDiv.innerHTML = e.code + '<small>event.code</small>';

console.log(codeDiv);

insert.innerHTML = ''; //clear the previous content
insert.appendChild(keyDiv);
insert.appendChild(keyCodeDiv);
insert.appendChild(codeDiv);

});

//     insert.innerHTML = ` 

//     <div class="key">
//     ${e.key === ' ' ? 'Space' : e.key}
//     <small>event.key</small>
// </div>
// <div class="key">
// ${e.keyCode}
//     <small>event.keyCode</small>
// </div>
// <div class="key">
//     ${e.code}
//     <small>event.code</small>
// </div>

// `;
