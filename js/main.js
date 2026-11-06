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

// -------- FUNCTIONS --------

// Graphics
function renderPlayers(){
    playerList.textContent = "";
    S.players.forEach(p => {
        const newItem = document.createElement('LI');
        newItem.setAttribute("data-id", p.id);
        newItem.innerHTML = `
            <span>${p.name}</span>
            <button class="delete-player-btn">Elimina</button>
        `;
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

// -------- EVENTS HANDLERS --------

addPlayerBtn.addEventListener("click", ()=>{
    const newName = playerNameInput.value.trim();
    if(newName == "") return;
    createPlayer(newName);
    render();
    playerNameInput.value = "";
    playerNameInput.focus();
});


console.log(S);