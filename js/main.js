const playerNameInput = document.querySelector('#input');
const addPlayerBtn = document.querySelector('.add-player-btn');
const delAllPlayersBtn = document.querySelector('.del-all-btn');
const playerList = document.querySelector('.player-list');

const firstId = 1;

// MAIN DATA STRUCTURE
const S = {
    players: [],
    teams: [],
    matches: [],
    nextId: firstId
}

// -------- FUNCTIONS --------

// Graphics
function renderPlayers(){
    playerList.textContent = "";
    S.players.forEach(p => {
        const newItem = document.createElement('LI');
        newItem.setAttribute("data-id", p.id);
        newItem.textContent = p.name;
        playerList.appendChild(newItem);
    });
}

function render(){
    renderPlayers();
}

// Logic
function createPlayer(pname){
    S.players.push({id: S.nextId++, name: pname});
}

function deletePlayer(pid){
    const i = S.players.findIndex(p => p.id === pid);
    S.players.splice(i, 1);
}

function deleteAllPlayers(){
    S.players.length = 0; // svuota array
    S.players.nextId = firstId; // reset del nextId
}

// -------- EVENTS HANDLERS --------

playerNameInput.addEventListener("keydown",(event)=>{
    if(event.key == "Enter"){
        const newName = playerNameInput.value.trim();
        if(newName == "") return;
        createPlayer(newName);
        render();
        playerNameInput.value = "";
        playerNameInput.focus();
    }
});

addPlayerBtn.addEventListener("click", ()=>{
    const newName = playerNameInput.value.trim();
    if(newName == "") return;
    createPlayer(newName);
    render();
    playerNameInput.value = "";
    playerNameInput.focus();
});

delAllPlayersBtn.addEventListener("click", ()=>{
    deleteAllPlayers();
    render();
});


console.log(S);