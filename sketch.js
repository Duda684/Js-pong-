let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
background('rgb(147,91,184)');
mostraBolinha();
movimentaBolinha();
verificaColisaoBorda();
mostraRaquete();
movimentaRaquete();
movimentaMouse();
colisaoMinhaRaquete() ;
}

function mostraBolinha() {
  fill('green');
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
if(xBolinha > width || xBolinha < 0) {
  velocidadeXBolinha *= -1;
}
if(yBolinha > height || yBolinha < 0) {
  velocidadeYBolinha *= -1;
}
}

function mostraRaquete() {
  fill('green'); //muda a cor da raquete
  rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}

function movimentaRaquete() {
  if(keyIsDown(87)) {
    yRaquete -= 10;
  }
  if(keyIsDown(83)) {
    yRaquete += 10;
  }
}

function movimentaMouse() {
  if(mouseIsPressed) {
    yRaquete = mouseY;
  }
}

function colisaoMinhaRaquete() {
   colidiu = collideRectCircle(xRaquete, yRaquete, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
  if(colidiu) {
    velocidadeXBolinha *= -1;  
  }
}

