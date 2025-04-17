let tog = 1;
let p1sum = 0;
let p2sum = 0;

function play(player, psum, correction, num) {
    let sum;
    if (psum === 'p1sum') {
        p1sum = p1sum + num;
        if (p1sum > 100) {
            p1sum = p1sum - num;
        }
        if (p1sum === 21) {
            p1sum = 42;
        }
        if (p1sum === 28) {
            p1sum = 76;
        }
        if (p1sum === 50) {
            p1sum = 67;
        }
        if (p1sum === 71) {
            p1sum = 92;
        }
        if (p1sum === 80) {
            p1sum = 99;
        }
        if (p1sum === 48) {
            p1sum = 26;
        }
        if (p1sum === 62) {
            p1sum = 18;
        }
        if (p1sum === 88) {
            p1sum = 24;
        }
        if (p1sum === 95) {
            p1sum = 56;
        }
        if (p1sum === 97) {
            p1sum = 78;
        }
        sum = p1sum;
    }

    if (psum === 'p2sum') {
        p2sum = p2sum + num;
        if (p2sum > 100) {
            p2sum = p2sum - num;
        }

        if (p2sum === 21) {
            p2sum = 42;
        }
        if (p2sum === 28) {
            p2sum = 76;
        }
        if (p2sum === 50) {
            p2sum = 67;
        }
        if (p2sum === 71) {
            p2sum = 92;
        }
        if (p2sum === 80) {
            p2sum = 99;
        }
        if (p2sum === 48) {
            p2sum = 26;
        }
        if (p2sum === 62) {
            p2sum = 18;
        }
        if (p2sum === 88) {
            p2sum = 24;
        }
        if (p2sum === 95) {
            p2sum = 56;
        }
        if (p2sum === 97) {
            p2sum = 78;
        }
        sum = p2sum;
    }

    document.getElementById(player).style.transition = "linear all 0.5s";

    if (sum < 10) {
        document.getElementById(player).style.left = `${(sum - 1) * 62}px`;
        document.getElementById(player).style.top = `${-0 * 62 - correction}px`;
    } else if (sum === 100) {
        if (player === 'p1') {
            alert("Red Won !!");
        } else if (player === 'p2') {
            alert("Yellow Won !!");
        }
        location.reload();
    } else {
        let numarr = Array.from(String(sum));
        let n1 = eval(numarr.shift());
        let n2 = eval(numarr.pop());

        if (n1 % 2 !== 0) {
            if (n2 === 0) {
                document.getElementById(player).style.left = `${9 * 62}px`;
                document.getElementById(player).style.top = `${(-n1 + 1) * 62 - correction}px`;
            } else {
                document.getElementById(player).style.left = `${(9 - (n2 - 1)) * 62}px`;
                document.getElementById(player).style.top = `${-n1 * 62 - correction}px`;
            }
        } else if (n1 % 2 === 0) {
            if (n2 === 0) {
                document.getElementById(player).style.left = `${0 * 62}px`;
                document.getElementById(player).style.top = `${(-n1 + 1) * 62 - correction}px`;
            } else {
                document.getElementById(player).style.left = `${(n2 - 1) * 62}px`;
                document.getElementById(player).style.top = `${-n1 * 62 - correction}px`;
            }
        }
    }
}

document.getElementById("diceBtn").addEventListener("click", function () {
    const dice = document.getElementById("dice");
    const num = Math.floor(Math.random() * 6) + 1;

    let x = 0, y = 0;

    switch (num) {
        case 1: x = 0; y = 0; break;
        case 2: x = -90; y = 0; break;
        case 3: x = 0; y = -90; break;
        case 4: x = 0; y = 90; break;
        case 5: x = 90; y = 0; break;
        case 6: x = 0; y = 180; break;
    }

    dice.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;

    if (tog % 2 !== 0) {
        document.getElementById('tog').innerText = "Yellow's Turn : ";
        play('p1', 'p1sum', 0, num);
    } else {
        document.getElementById('tog').innerText = "Red's Turn : ";
        play('p2', 'p2sum', 55, num);
    }
    tog++;
});
