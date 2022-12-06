const players = document.getElementsByClassName('btn-player')
for(const player of players){
    player.addEventListener('click', 
        function(event){
            if(document.querySelectorAll('#playersList li').length === 5){
                alert('Limit Exceed');                
            }

            else{
                const playerName = event.target.parentNode.getElementsByTagName('h5')[0].innerText;
                const playerContainer = document.getElementById('playersList');
                const li = document.createElement('li');
                li.innerText = playerName;
                playerContainer.appendChild(li);
                event.target.setAttribute('disabled', true);
            }                    
        }
    )
}


function stringToFloat(inputValue){
    const element = document.getElementById(inputValue);
    const elementValue = element.value;
    const result = parseFloat(elementValue);    
    return result;    
}


function textToFloat(textID){
    const result = parseFloat(document.getElementById(textID).innerText);
    return result;
}


document.getElementById('calculate-player-cost').addEventListener('click', 
    function(){
        const playerCost = stringToFloat('per-player-cost')

        if(isNaN(playerCost) === false && playerCost > 0){
            const playerCount = document.querySelectorAll('#playersList li').length;
            const playersExpenses = playerCost * playerCount;            
            document.getElementById('players-expenses').innerText = playersExpenses;
        }

        else{
            alert('Provide Positive Number');
            return;
        }             
    }
)


document.getElementById('calculate-total-expenses').addEventListener('click',
    function(){                
        const managerCost = stringToFloat('manager-cost');
        const coachCost = stringToFloat('coach-cost');
        const playersExpenses = textToFloat('players-expenses');
        
        if(isNaN(managerCost) === false && managerCost > 0 && isNaN(coachCost) === false && coachCost > 0){
            const totalExpenses = managerCost + coachCost + playersExpenses;
            document.getElementById('total-cost').innerText = totalExpenses;            
        }

        else{
            alert('Provide Positive Number');
            return;
        }   
    }
)