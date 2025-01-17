// Suzdavame promenlivi
let myX, myY;//paddle
let noteX, noteY, points, skorostNote; //note
let costume, redX, redY, grayX, grayY, greenX, greenY;//random skin
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 0; myY = 0; points = 0;//paddle
    points = 0;
    costume = randomInteger(3); redX = greenX = grayX = 800; redY = grayY = greenY = noteY = randomInteger(2) * 200;
    noteX = 800; skorostNote = 1;//note
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    //dvijenie na notata
    if (costume == 0) {
        greenX -= skorostNote;
        noteY = greenY;
        noteX = greenX;
    }
    else {
        if (costume == 1) {
            redX -= skorostNote;
            noteY = redY;
            noteX = redX;
        }
        else {
            grayX -= skorostNote;
            noteY = grayY;
            noteX = grayX;
        }
    }
    if (noteX + 100 < 0) {
        if (myY == noteY) {
            points += (costume * 10 + 5);
            console.log("Well done!")
            if (skorostNote < 12) {
                skorostNote++;
                console.log("skorost new:", skorostNote)
            }
        }
        else {
            if (points > 5) {
                points -= 5;
            }
            if (skorostNote > 2) {
                skorostNote--;
                console.log("skorost down:", skorostNote)
            }
        }
        console.log("points:", points)
        greenX = grayX = redX = 800;//prerajdane na notata
        greenY = grayY = redY = randomInteger(3) * 200;
        costume = randomInteger(3);
    }
    //dvijenie na paddle
    if (mouseY < 200) {
        myY = 0;
    } else {
        if (mouseY < 400) {
            myY = 200;
        }
        else {
            myY = 400;
        }
    }
    //barrelRed
    //barrelGrey
    // barrelGreen
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    if (points < 800) {
        drawImage(backMountain, 0, 0, 800, 600);
        drawImage(paddle, myX, myY, 100, 200);
        drawImage(barrelRed, redX, redY, 100, 200);
        drawImage(barrelGrey, grayX, grayY, 100, 200);
        drawImage(barrelGreen, greenX, greenY, 100, 200);
    }
    else {
        drawImage(back3D, 0, 0, 800, 600);
        drawImage(ballOrTree, 356, 368, 100, 200)
        greenX = grayX = redX = 80000;//prerajdane na notata
        greenY = grayY = redY = 80000;//prerajdane na notata
    }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}