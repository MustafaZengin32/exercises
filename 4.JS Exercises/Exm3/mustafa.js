class Team {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.wins = 0;
        this.loses = 0;
    }
}



// Initialize teams
const team1 = new Team('team1');
const team2 = new Team('team2');
const team3 = new Team('team3');
const team4 = new Team('team4');
const teams = [team1, team2, team3, team4];

team1.score = 10;
team2.score = 50;

const winner = getWinner([team1, team2]);

function generateGroupMatches(teams) {
    let matches = [];
    for (let i = 0; i < teams.length; i++) {
        for (let j = i + 1; j < teams.length; j++) {
            matches.push(`${teams[i].name} vs ${teams[j].name}`);
        }
    }
    return matches;
}

function getRandomMatch(matches) {
    let randomIndex = Math.floor(Math.random() * matches.length-1);
    return matches[randomIndex];
}

let groupMatches = generateGroupMatches(teams);
let randomMatch = getRandomMatch(groupMatches);
console.log(randomMatch);

function getWinner(teams) {
    const team1 = teams[0];
    const team2 = teams[1];
    if (team1.score > team2.score) {
        console.log(`${team1.name} is the winner`);
        return (`${team1.name},${team1.score}`);
    } else if (team2.score > team1.score) {
        console.log(`${team2.name} is the winner`);
        return (`${team2.name},${team2.score}`);
    }
}













