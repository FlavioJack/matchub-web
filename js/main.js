const playerNameInput = document.querySelector('#input');
const addPlayerBtn = document.querySelector('.add-player-btn');
const delPlayerBtn = document.querySelector('.del-player-btn');
const delAllPlayersBtn = document.querySelector('.del-all-btn');
const playersList = document.querySelector('.players-list');

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
    playersList.textContent = "";
    S.players.forEach(p => {
        const newItem = document.createElement('LI');
        newItem.setAttribute("data-id", p.id);
        newItem.innerHTML = `
            ${p.name}
            <input type="checkbox" class="checkbox">
        `;
        //newItem.textContent = p.name;
        playersList.appendChild(newItem);
    });
}

function render(){
    renderPlayers();
    console.log(S);
}

// Logic
function createPlayer(pname){
    S.players.push({id: S.nextId++, name: pname});
}

function deletePlayers(pidList){
    // da capire come funziona .filter
    // S.players = S.players.filter(p => !pidList.includes(p.id));
    pidList.forEach(pid=>{
        const i = S.players.findIndex(p => p.id === pid);
        if(i !== -1){
            S.players.splice(i, 1);
        }
    });
}

function deleteAllPlayers(){
    S.players.length = 0; // svuota array
    S.nextId = firstId; // reset del nextId
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

delPlayerBtn.addEventListener("click", ()=>{
    const itemsToDelete = [];

    for(const li of playersList.children){ 
        if(li.querySelector(".checkbox").checked){
            itemsToDelete.push(Number(li.dataset.id));
        }
    }
    deletePlayers(itemsToDelete);
    /*
    itemsToDelete.forEach(i=>{
        deletePlayers(i);
    })
    */
    render();

});

delAllPlayersBtn.addEventListener("click", ()=>{
    deleteAllPlayers();
    render();
});


