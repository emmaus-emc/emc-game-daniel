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

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 1230;
var vijandY = 0;

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
    spelerX = 0;
  }
  if (spelerX > 1280) {
    spelerX = 1280;
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
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
if(
  (vijandX-spelerX)<50 && 
  (vijandX-spelerX)>-50 && 
  (vijandY-spelerY)>-50 && 
  (vijandY-spelerY)<50
  ) {
  console.log("botsing");
};
  // botsing kogel tegen vijand

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("red");
  rect(0, 0, 1280, 720);
  // vijand
  fill("yellow")
  ellipse(vijandX, vijandY, 50, 50);
  fill("white")
  ellipse(vijandX, vijandY, 10, 10);
  // kogel

  // speler
  fill("black");
  ellipse(spelerX, spelerY, 50, 50);
  fill("white");
  ellipse(spelerX, spelerY, 10, 10);
  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  return false;
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
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
