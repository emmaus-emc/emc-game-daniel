/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;
var Punten = 0;
var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 300;
var vijandY = 0;
var vijandLijstX = [400, 50, 550, 600, 700, 800, 1000, 300];
var HP = 10; // is de leven van de dingetje

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
  vijandY = vijandY + 5;
  if(vijandY > 720) {
    vijandY = 0;
  }

  // kogel

  // speler
  if (keyIsDown(37)) {
    spelerX = spelerX - 5;
  }
  if (keyIsDown(38)) {
    spelerY = spelerY - 5;
  }
  if (keyIsDown(39)) {
    spelerX = spelerX + 5;
  }
  if (keyIsDown(40)) {
    spelerY = spelerY + 5;
  }

  // houdt speler binnen het veld
  if (spelerX < 0) {
    spelerX = 1280;
  }
  if (spelerX > 1280) {
    spelerX = 0;
  }
  if (spelerY < 0) {
    spelerY = 0;
  }
  if (spelerY > 720) {
    spelerY = 720;
  }
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health */


 // hp eraf als botst
 var verwerkBotsing = function () {
  // botsing speler tegen vijand
  for (var i=0; i<8; i++) 
  {
if(
  (vijandLijstX[i]-spelerX)<50 && 
  (vijandLijstX[i]-spelerX)>-50 && 
  (vijandY-spelerY)>-50 && 
  (vijandY-spelerY)<50 
  ) {
  console.log("botsing");
  HP=HP-0.05;
  };
};
 };

 // botsing kogel tegen vijand

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("red");
  rect(0, 0, 1280, 720);
  // vijand
  for (var i=0; i<8; i++) 
  {
  fill("yellow")
  ellipse(vijandLijstX[i], vijandY, 50, 50);
  fill("white")
  ellipse(vijandLijstX[i], vijandY, 10, 10);
  };

  // kogel

  // speler
  fill("black");
  ellipse(spelerX, spelerY, 50, 50);
  fill("white");
  ellipse(spelerX, spelerY, 10, 10);
  // punten en health
  textSize(32);
  text('HP: '+ceil(HP),10,30);
  textSize(32);
  text('Punten: '+floor(Punten), 1075, 40);
  Punten = Punten + 0.02;
};


/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('white');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (HP < 0) {
      spelStatus = GAMEOVER;
    }
  }
  
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    fill(0,0,255);
    noStroke();
    rect(30,40,1200,660,20);

    textSize(64);
    fill(255,0,0);
    text("Game Over",480, 120);
    text('Punten: '+floor(Punten), 510, 430);
    
    textSize(32);
    fill(255,0,0);
    text("Reload de pagina als je opnieuw wilt spelen", 320, 660);
    }
  }
 
