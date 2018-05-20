/**
 * @description Display player's line by console.log  
 * @param {object} player - The player object should contain name, digit, zone
 * @returns none 
 */
function sayHello(player) {

    const player1Row = document.getElementById('player-' + player.id);

    const playerRowTemplate = `
                <td>${player.name}</td>
                <td class="text-center">${getScore(player)}</td>
    `;

    player1Row.innerHTML = playerRowTemplate;
    console.log('Hello ' + player.name + '!' + ' Your points: ' + getScore(player));
}

/**
 * @description Calculate player points
 * @param {object} player - The player object should contain name, digit, zone
 * @returns {number} Score of the player, multiple digit and zone
 */
function getScore(player) {
    const score = player.digit * player.zone;
    return score;
}

/**
 * @description Calculate team total score
 * @param {number} team - Score of one player
 * @returns  none
 */
function teamScore(team) {
    let totalScore = 0;
    team.players.forEach(function (player) {
        totalScore = totalScore + getScore(player);
    });
    team.totalTeamScore = totalScore;
}

/**
 * @description Display team summary
 * @param {object} team - Team 
 * @returns none
 */
function displayTeam(team) {
    console.log('_____ ' + team.name + '  ______');
    team.players.forEach(player => sayHello(player));
    teamScore(team);
    console.log('Team score: ' + team.totalTeamScore);
}



function displayWinner() {
    let winner;
    // Firstly check if Team 1 is winner or not
    // Seconly check if Team 2 is winner or not
    // Otherwise Team 3 is the default winner
    // Bug: in the following logic there is bug, if more than one have has equal score if doesn't work
    // For now lets keep it simple, we will be fix the bug in later step  

    if (team1.totalTeamScore > team2.totalTeamScore && team1.totalTeamScore > team3.totalTeamScore) {
        // modify this
        /* winner = 'TEAM 1'; */
        winner = team1;

    } else if (team2.totalTeamScore > team1.totalTeamScore && team2.totalTeamScore > team3.totalTeamScore) {
        /*  winner = 'TEAM 2'; */
        winner = team2;
    } else {
        /*  winner = 'TEAM 3'; */
        winner = team3;
    }

    // console.log('_____________ *** ' + winner + ' wins! *** _________________');
    console.log('_____________ *** ' + winner.name + ' wins! *** _________________');
    return winner;
}