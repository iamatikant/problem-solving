const numberOfMatches = function(teams) {
    let remainingTeam = teams;
    let matches = 0;
    while(remainingTeam > 1) {
      matches = matches + Math.floor(remainingTeam / 2);
      remainingTeam = remainingTeam%2 === 0 ? remainingTeam / 2 : Math.floor(remainingTeam / 2) + 1;
    }
    return matches;
};


console.log(numberOfMatches(6));
console.log(numberOfMatches(7));
console.log(numberOfMatches(10));
console.log(numberOfMatches(13));