// Suzdavame promenlivi
let myX, myY, tochki, razmerCel, skorostCel;
let jivoti, broiOstUpdati;
let bombaX, bombaY, razmerBomba;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 600;
    tochki = 0;
    razmerCel = 80;
    skorostCel = 2;
    jivoti = 5;
    razmerBomba = 30;
    bombaX = randomInteger(800 - razmerBomba);
    bombaY = 600;
    broiOstUpdati = 0;
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    //proverka za nalichnost na jivoti
    if (jivoti > 0) {
        myY -= skorostCel;
        bombaY -= 3;
        if (myY + razmerCel < 0) {
            if (razmerCel > 10) {
                razmerCel -= 10;
            }
            //if(jivoti>0)
            //{
            jivoti--;
            console.log("Ostavat ti oste", jivoti, "jivoti.")
            //}
            myY = 600;
            myX = randomInteger(800 - razmerCel);
        }
        if (bombaY + razmerBomba < 0) {
            razmerBomba += 10;
            bombaX = randomInteger(800 - razmerBomba);
            bombaY = 600;
        }
        //proverki za ochelvane na cherito
        if (mouseX >= myX && mouseX <= (myX + razmerCel) && mouseY >= myY && mouseY <= (myY + razmerCel)) {
            console.log("Bravo, ti ucheli cherry!");
            tochki += 1;
            console.log("Tochkite ti sa", tochki, ".");
            if (skorostCel < 10) {
                skorostCel++;
            }
            myY = 600;
            myX = randomInteger(800 - razmerCel);
        }
    }
        //proverki za ochelvane na bombata
        if (mouseX >= bombaX && mouseX <= (bombaX + razmerBomba) && mouseY >= bombaY && mouseY <= (bombaY + razmerBomba)) {
            console.log("Ti se grumna.")
            if (broiOstUpdati <= 0) {
                broiOstUpdati = 10000;
                jivoti--;
            }
            console.log("Ostavat ti", jivoti, "jivoti.")
            bombaX = randomInteger(800 - razmerBomba);
            bombaY = 600;
        }

        broiOstUpdati--;
    
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    if (jivoti > 0) {
        drawImage(backStars, 0, 0, 800, 600);
        drawImage(cherry, myX, myY, razmerCel, razmerCel);

        if (broiOstUpdati <= 0) {
            drawImage(bomb, bombaX, bombaY, razmerBomba, razmerBomba);
        }
        else {
            if (randomInteger(2) == 1) {
                drawImage(bomb, bombaX, bombaY, razmerBomba, razmerBomba);
            }
        }

        if (jivoti > 4) {
            drawImage(heartSmall, 600, 0, 40, 40);
        }
        if (jivoti > 3) {
            drawImage(heartSmall, 640, 0, 40, 40);
        }
        if (jivoti > 2) {
            drawImage(heartSmall, 680, 0, 40, 40);
        }
        if (jivoti > 1) {
            drawImage(heartSmall, 720, 0, 40, 40);
        }
        if (jivoti > 0) {
            drawImage(heartSmall, 760, 0, 40, 40);
        }

    }
    else {
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

