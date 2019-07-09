let maxPrize = 100;
let minPrize = 0;
let numberRange = 8;
let attempt = 3;
const prizeIncrease = 2;
const attempTotal = 3;
const rangeIncrease = 4;
let game = confirm('Do you want to play a game?');
if (game === true) {
    do {
        let totalPrize = maxPrize;
        let randomNumber = Math.floor(Math.random() * numberRange + 1);
        if (attempt === 1) {
            totalPrize = Math.floor(totalPrize / rangeIncrease);
        } else if (attempt === prizeIncrease) {
            totalPrize = Math.floor(totalPrize / prizeIncrease);
        }
        let input = Number(prompt(`
        Choose a roulette pocket number from 0 to ${numberRange} \n
        Attempts left: ${attempt} \n
        Total prize: ${minPrize} \n
        Possible prize on current attempt: ${totalPrize}`));
        if (input === randomNumber && attempt === 1) {
            alert('Congratulation, you won! Your prize is:' + totalPrize);
            if (confirm('Do you want to continue?')) {
                minPrize += maxPrize / prizeIncrease / prizeIncrease;
                maxPrize *= prizeIncrease;
                attempt = attempTotal;
                numberRange += rangeIncrease;
                continue;
            } else {
                alert('Thank you for your participation. Your prize is: ' + totalPrize);
                break;
            }
        } else if (input === randomNumber && attempt === prizeIncrease) {
            alert('Congratulation, you won! Your prize is:' + totalPrize);
            if (confirm('Do you want to continue?')) {
                minPrize += maxPrize / prizeIncrease;
                maxPrize *= prizeIncrease;
                attempt = attempTotal;
                numberRange += rangeIncrease;
                continue;
            } else {
                alert('Thank you for your participation. Your prize is: ' + totalPrize);
                break;
            }
        } else if (input === randomNumber && attempt === attempTotal) {
            alert('Congratulation, you won! Your prize is:' + totalPrize);
            if (confirm('Do you want to continue?')) {
                minPrize += maxPrize;
                maxPrize *= prizeIncrease;
                attempt = attempTotal;
                numberRange += rangeIncrease;
                continue;
            } else {
                alert('Thank you for your participation. Your prize is: ' + totalPrize);
                break;
            }
    } else if(input !== randomNumber && attempt === 1) {
        totalPrize = 0;
        alert('Thank you for your participation. Your prize is ' + totalPrize);
        if(confirm('Do you want to play again?')) {
            minPrize = 0;
            totalPrize = maxPrize;
            attempt = attempTotal;
            continue;
        }
    }
    attempt--;
}
while (attempt > 0);
} else if (game === false) {
    alert('You did not become a billionaire, but can!');
}

