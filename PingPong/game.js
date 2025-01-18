// Suzdavame promenlivi
let myX, myY, posoka, brOtskachaniq, tochki, jivoti;
let hilkaY;
//  posoka 0 - nagore i nalqvo
//  posoka 1 - nadolu i nalqvo
//  posoka 2 - nadolu i nadqsno
//  posoka 3 - nagore i nadqsno
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 750;
    myY = 550;
    hilkaY = 0;
    posoka = 0;
    brOtskachaniq = 0;
    tochki = 0;
    jivoti = 10;
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    if(jivoti>0){
        hilkaY = mouseY;
        if (hilkaY + 150 > 600) {
            hilkaY = 600 - 150;
        }
        if (posoka == 0) {
            myX -= 3;
            myY -= 3;
        }
        if (posoka == 1) {
            myX -= 3;
            myY += 3;
        }
        if (posoka == 2) {
            myX += 3;
            myY += 3;
        }
        if (posoka == 3) {
            myX += 3;
            myY -= 3;
        }
        if (myY < 0) {
            brOtskachaniq++;
            console.log("broi otskachaniq: ", brOtskachaniq);
            if (posoka == 0) {
                posoka = 1;
            } else {
                posoka = 2;
            }
        }
        if (myX < 0) {
            brOtskachaniq++;
            console.log("broi otskachaniq: ", brOtskachaniq);
            if (hilkaY <= myY && myY <= hilkaY + 150) {
                tochki++;
                console.log("Tochki: ", tochki);
            } else {
                if (jivoti > 0) {
                    jivoti--;
                    console.log("Jivoti: ", jivoti);
                }
            }
            if (posoka == 1) {
                posoka = 2;
            } else {
                posoka = 3;
            }
        }
        if (myY + 50 > 600) {
            brOtskachaniq++;
            console.log("broi otskachaniq: ", brOtskachaniq);
            if (posoka == 2) {
                posoka = 3;
            } else {
                posoka = 0;
            }
        }
        if (myX + 50 > 800) {
            brOtskachaniq++;
            console.log("broi otskachaniq: ", brOtskachaniq);
            if (posoka == 3) {
                posoka = 0;
            }
            else {
                posoka = 1;
            }

        }
    } 
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    if(jivoti>0)
    {
        drawImage(backStars, 0, 0, 800, 600);
        drawImage(boxAlienYellowSquare, myX, myY, 50, 50);
        drawImage(paddle, 0, hilkaY, 30, 150);
        drawImage(paddleGhost,680,0,110,30);
        drawImage(powerupGreen,685,1,jivoti*10,30);
    }else{
        drawImage(backHills, 0, 0, 800, 600); 
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

