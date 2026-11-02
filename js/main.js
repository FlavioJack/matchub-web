const playerNameInput = document.querySelector('#input');
const addPlayerBtn = document.querySelector('.add-player-btn');
const playerList = document.querySelector('.player-list');

// MAIN DATA STRUCTURE
let S = {
    players: [],
    teams: [],
    matches: [],
    nextId: 1
}

function render(){

}

// FUNCTIONS
function createPlayer(pname){
    S.players.push({id: S.nextId++, name: pname});
}


addPlayerBtn.addEventListener("click", ()=>{
    const newName = playerNameInput.value.trim();
    if(newName == "") return;
    createPlayer(newName);
    render();
});

 console.log(S);

