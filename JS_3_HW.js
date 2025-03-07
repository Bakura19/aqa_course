//_____________________________________

function fridayAmount(date) {
    let count = 0;
    let currentDate = new Date();
    let previousDate = new Date(date);

    while (previousDate <= currentDate) {
        if (new Date(previousDate.getFullYear(), previousDate.getMonth(), 13).getDay() === 5) {
            count++;
        }
        previousDate.setMonth(previousDate.getMonth() + 1);
    }

    return count;
}

console.log(fridayAmount("1991-08-27"));

//_____________________________________________

function generatePoints() {
    return Math.floor(Math.random() * 6) + 1; 
}

function playGame(players, attempt) {
    let results = {};

    for (let i = 1; i <= players; i++) {
        results[`Player ${i}`] = 0;
    }

    for (let ii = 0; ii < attempt; ii++) {
        for (let i = 1; i <= players; i++) {
            results[`Player ${i}`] += generatePoints();
        }
    }

    console.log("Result:", results);

    let maxScore = Math.max(...Object.values(results));
    let winners = Object.keys(results).filter(player => results[player] === maxScore);

    if (winners.length > 1) {
        console.log("Draw between:", winners.join(", "));
    } else {
        console.log("Winner:", winners[0]);
    }
}

playGame(8, 8);
//_____________________________________________________________________________

function splitNumber(num, parts) {
    let points = [0, num];

    for (let i = 0; i < parts - 1; i++) {
        points.push(Math.floor(Math.random() * num));
    }

    points.sort((a, b) => a - b);

    let result = [];
    for (let i = 1; i < points.length; i++) {
        result.push(points[i] - points[i - 1]);
    }

    console.log(result);
}

splitNumber(17, 4);