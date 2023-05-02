//Whiteshot :3

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,personagem

var count


function setup() {
  createCanvas(400, 400); 
  wall1 = createSprite(190, 320,280,  3)
  wall2 = createSprite(190, 200, 230, 3)
  wall3 = createSprite(75, 259, 3, 120)
  wall4 = createSprite (234, 140, 3, 120)
  wall5 = createSprite(150, 130, 170, 3)
  wall6 = createSprite(390, 200, 30, 3)
  wall7 = createSprite(200, 80, 70, 3)
  wall8 = createSprite(165, 90, 3, 20)
  wall9 = createSprite(245, 90, 20, 3)
  wall10 = createSprite(350, 170, 100, 3)
  wall11 = createSprite(398, 120, 3, 100)
  wall12 = createSprite(351, 70, 100, 3)
  wall13 = createSprite(301, 95, 3, 50)
  wall14 = createSprite(351, 55, 130, 3)
  wall15 = createSprite(285, 85, 3, 60)
  //partes que faz morrer
  wall16 = createSprite(140, 235, 3, 70)
  wall17 = createSprite(180, 285, 3, 70)
  wall18 = createSprite(220, 235, 3, 70)
  wall19 = createSprite(270, 285, 3, 70)
  wall20 = createSprite(90, 145, 3, 30)
  wall21 = createSprite(130, 185, 3, 30)
  wall22 = createSprite(170, 145, 3, 30)
  //personagem
  personagem = createSprite(100, 285, 20, 20)
  //Cores
  wall16.shapeColor= 'red'
  wall17.shapeColor= 'red'
  wall18.shapeColor= 'red'
  wall19.shapeColor= 'red'
  wall20.shapeColor= 'red'
  wall21.shapeColor= 'red'
  wall22.shapeColor= 'red'
  personagem.shapeColor= 'black'
}



//movimento

function draw() {
  background('#b9bada');
if (keyDown('right')) {
 personagem.x = personagem.x + 2
}
if (keyDown('left')) {
 personagem.x = personagem.x - 2
}  
if (keyDown('up')) {
 personagem.y = personagem.y - 2
}     
if (keyDown('down')) {
 personagem.y = personagem.y + 2
}    
//paredes colide e morte
personagem.collide(wall1) 
personagem.collide(wall2) 
personagem.collide(wall3)   
personagem.collide(wall4)   
personagem.collide(wall5)
personagem.collide(wall6)
  personagem.collide(wall7) 
  personagem.collide(wall8) 
  personagem.collide(wall9) 
  personagem.collide(wall10) 
  personagem.collide(wall11)
  personagem.collide(wall12)
  personagem.collide(wall13) 
  personagem.collide(wall14) 
  personagem.collide(wall15) 
if (

personagem.isTouching(wall16) ||
personagem.isTouching(wall17) ||
personagem.isTouching(wall18) ||
personagem.isTouching(wall19) ||
personagem.isTouching(wall20) ||
personagem.isTouching(wall21) ||
personagem.isTouching(wall22)
) {
personagem.x = 100
personagem.y = 285
}
  
  
  
  
    
    
  drawSprites()
}