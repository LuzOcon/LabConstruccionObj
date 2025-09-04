

// Type your code below this line!
const prompt = require('prompt-sync')();


function FriendsList(){
    this.name = [];
}

let arrayAmigos = new FriendsList();

let numeroPrompt = +prompt("Ingresa el número de amigos a ingresar:");
for(let i=1; i <= numeroPrompt; i++){
    let namePrompt = prompt("Ingresa el nombre de tu amigo:");
    arrayAmigos.name.push(namePrompt);
}



console.log(arrayAmigos.name);

// Type your code above this line!

