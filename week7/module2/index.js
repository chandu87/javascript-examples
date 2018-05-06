// step 1: more use case of object and array.

// Let's improve our code with javascritpt object.
// 1. form team object
// 2. Use team object to display team info
// 3. Modify 'displayTeamAndReturnScore' method to adopt object


let players = [{
    name: 'Obi',
    digit: 27,
    zone: 2
  },
  {
    name: 'Haseeb',
    digit: 71,
    zone: 88
  },
  {
    name: 'Sirin',
    digit: 28,
    zone: 2
  },
  {
    name: "Shaza",
    digit: 76,
    zone: 200
  },
  {
    name: "Hossein",
    digit: 52,
    zone: 31
  },
  {
    name: "Anwer",
    digit: 47,
    zone: 2
  },
  {
    name: "Anwer",
    digit: 47,
    zone: 2
  },
  {
    name: 'Majid',
    digit: 50,
    zone: 30
  },
  {
    name: 'Jackline',
    digit: 52,
    zone: 20
  },
  {
    name: 'Mohammed',
    digit: 40,
    zone: 55
  }
  ];
  
  // Let's improve our code with javascritpt object.
  // 1. form team object
  // 2. Use team object to display team info
  // 3. Modify 'displayTeamAndReturnScore' method to adopt object
  
  /* --------------------------------------
   *  TODO: Create team object like as below format
   * --------------------------------------
   */
  
  
        let team1 = {
          'name': 'Team 1',
          'players': [players[0], players[1], players[2]],
          'totalTeamScore': 0
        };
        let team2 = {
            'name': 'Team 2',
            'players': [players[3], players[4], players[5]],
            'totalTeamScore': 0
          };
          let team3 = {
            'name': 'Team 3',
            'players': [players[6], players[7], players[8]],
            'totalTeamScore': 0
          };
  
  
  /**
   * @description Display player's line by console.log  
   * @param {object} player - The player object should contain name, digit, zone
   * @returns none 
   */
  function sayHello(player) {
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
   * @param {number} score1 - Score of one player
   * @param {number} score2 - Score of second player
   * @param {number} score3 - Score of third player
   * @returns {number} Sum of three player point as team score 
   */
  function teamScore(score1, score2, score3) {
    return score1 + score2 + score3;
  }
  
  /* -----------------------------------------------
   *  TODO: receive team object as a parameter instead of 4 parameters
   *  hint: displayTeamAndReturnScore(team)
   * -----------------------------------------------
   */
  
  /**
   * @description Display team summary
   * @param {string} team - Team name
   * @param {object} player1 - The player object should contain name, digit, zone
   * @param {object} player2 - The player object should contain name, digit, zone
   * @param {object} player3 - The player object should contain name, digit, zone
   * @returns {number} Team score
   */
  function displayTeamAndReturnScore(team) {
      console.log(team);
    let totalTeamScore = teamScore(getScore(team.players[0]), getScore(team.players[1]), getScore(team.players[2]));
    console.log('_____ ' + team + '  ______');
    sayHello(team.players[0]);
    sayHello(team.players[1]);
    sayHello(team.players[2]);
    console.log('Team score: ' + totalTeamScore);
  
    return totalTeamScore;
  }
  
  console.log('****************** ___ Number Game ____ *******************');
  console.log('*************** ___ Find the highest scored team ____ ***********');
  
  /* -----------------------------------------------
   *  TODO: pass team object as argument in the below function 'displayTeamAndReturnScore' instead of 4 arguments
   *  hint: displayTeamAndReturnScore(team)
   * -----------------------------------------------
   */
  // Display teams summary and store in variable to find the winner
  let totalScoreForTeam1 = displayTeamAndReturnScore(team1);
  let totalScoreForTeam2 = displayTeamAndReturnScore(team2);
  let totalScoreForTeam3 = displayTeamAndReturnScore(team3);
  
  function displayWinner(team1, team2, team3) {
    let winner;
    // Firstly check if Team 1 is winner or not
    // Seconly check if Team 2 is winner or not
    // Otherwise Team 3 is the default winner
    // Bug: in the following logic there is bug, if more than one have has equal score if doesn't work
    // For now lets keep it simple, we will be fix the bug in later step  
    console.log(team1);
    if (team1.totalTeamScore > team2.totalTeamScore && team1.totalTeamScore > team3.totalTeamScore) {
      // modify this
       winner = 'TEAM 1'; 
    //   winner = team1;
  
    } else if (team2.totalTeamScore > team1.totalTeamScore && team2.totalTeamScore > team3.totalTeamScore) {
        winner = 'TEAM 2'; 
    //   winner = team2;
    } else {
        winner = 'TEAM 3'; 
    //   winner = team3;
    }
  
    // console.log('_____________ *** ' + winner + ' wins! *** _________________');
    console.log('_____________ *** ' + winner + ' wins! *** _________________');
  }
  
  displayWinner(team1, team2, team3)