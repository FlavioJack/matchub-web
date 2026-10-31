const input = document.querySelector('#input');
const addPlayerBtn = document.querySelector('.add-player-btn');

// MAIN DATA STRUCTURE
let S = {
    players: [],
    teams: [],
    matches: [],
    nextId: 1
}

// FUNCTIONS
function createPlayer(pname){
    S.players.push({id: S.nextId++, name: pname});
}


addPlayerBtn.addEventListener("click", ()=>{
    const newName = input.value.trim();
    if(newName == "") return;
    createPlayer(newName);
   
});

 console.log(S);

