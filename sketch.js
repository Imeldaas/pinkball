let j;
function setup() {
  createCanvas(800,400)
  background(255)

  y = 570;
  x = 630;
  j = 0
}

function draw() {
 line(399,0,399,399)
 strokeWeight(3)

//tangan kiri
 fill(255,48,150)
ellipse(100,110,70,110) 

//tangan kanan
fill(255,48,150)
ellipse(305,190,70,90)

//kaki kiri
fill(255,48,150)
ellipse(140,270,150,55)

//kaki kanan
fill(255,48,150)
ellipse(250,268,150,55)

 //badan
 fill(255,48,150)
 ellipse(200,170,220,230)

 //mata oren
 fill(234,139,9)
 ellipse(170,120,30,60)
 ellipse(230,120,30,60)
 //mata item
 fill(0,0,0)
 ellipse(170,110,30,55)
 ellipse(230,110,30,55)
//pupil
fill(258,248,255)
ellipse(170,111,20,20)
ellipse(230,111,20,20)
//pupil kecil
ellipse(175,98,7,7)
ellipse(235,98,7,7)

//mulut
fill(255,48,150)
strokeWeight(4)
arc(200,170,35,20,-0.0,179)

//rona pipi oren
fill(205,0,0)
ellipse(130,160,36,20)
fill(205,0,0)
ellipse(268,160,36,20)

//yg kanan

//tangan kiri
fill(255,48,150)
ellipse(500,110,70,110) 

//tangan kanan
fill(255,48,150)
ellipse(705,190,70,90)

//kaki kiri
fill(255,48,150)
ellipse(540,270,150,55)

//kaki kanan
fill(255,48,150)
ellipse(650,268,150,55)

 //badan
 fill(255,48,150)
 ellipse(600,170,220,230)

 //mata oren
 fill(234,139,9)
 ellipse(570,120,30,60)
 ellipse(630,120,30,60)
 //mata item
 fill(0,0,0)
 ellipse(570,110,30,55)
 ellipse(630,110,30,55)
//pupil
fill(658,248,255)
var y = 570 + 4 * Math.sin(PI/24*j)
 j+=1
ellipse(y,111,20,20)
var x = 630 + 4 * Math.sin(PI/24*j)
 j+=1
ellipse(x,111,20,20)
//pupil kecil
ellipse(575,98,7,7)
ellipse(635,98,7,7)

//mulut
fill(655,48,150)
strokeWeight(4)
arc(600,170,35,20,-0.0,179)

//rona pipi oren
fill(605,0,0)
ellipse(530,160,36,20)
fill(205,0,0)
ellipse(668,160,36,20)


}
