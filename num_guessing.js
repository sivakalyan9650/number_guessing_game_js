let maxnum = parseInt(prompt("enter your max number"));
while (!maxnum) {
    maxnum = prompt("enter a valid number");
}

let randnum = Math.floor(Math.random() * maxnum) + 1;


let count = 1;

let input = parseInt(prompt("guess the number"));

while (input != randnum) {
    if (input < randnum) {

        input = prompt("too small....guess another number");
        count++;

    }
    else if (input > randnum) {
        input = prompt("too big....guess another number");
        count++;


    }
}

console.log(`you guessed in ${count} times`);