
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20, 43, 59);
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  let rectSize;
  let ellipseSize;

//canvasWidth = 640;
//canvasHeight = 480;

  //Moon
  ellipseSize = map(vocal, 0, 100, 75, 125);
  fill(227, 236, 252);
  ellipse(320, 170, ellipseSize, ellipseSize);
  fill(202, 225, 227);
  ellipse(290, 160, ellipseSize-80, ellipseSize-80);
  ellipse(325, 145, ellipseSize-70, ellipseSize-70);
  ellipse(310, 195, ellipseSize-75, ellipseSize-75);

  //Clouds
  fill(20);
  ellipse(130, 100, 70, 30);
  ellipse(110, 115, 70, 20);
  ellipse(150, 110, 70, 15);

  ellipse(460, 60, 40, 20);
  ellipse(430, 60, 50, 30);
  ellipse(410, 65, 50, 30);

  ellipse(460, 175, 40, 20);
  ellipse(500, 180, 80, 30);
  ellipse(530, 170, 80, 30);

  ellipse(230, 200, 30, 10);
  ellipse(215, 205, 35, 7.5);

  ellipse(380, 240, 20, 5);
  ellipse(375, 237, 23, 5);

  //Terrain
  rect(0, 480, 1280, 350)
  triangle(0, 320, 25, 160, 50, 320);
  triangle(30, 320, 55, 210, 80, 320);
  triangle(90, 320, 115, 275, 140, 320);
  triangle(120, 320, 145, 250, 170, 320);
  triangle(150, 320, 175, 265, 200, 320);
  triangle(220, 320, 232.5, 290, 245, 320);

  triangle(360, 320, 372.5, 290, 385, 320);
  triangle(380, 320, 392.5, 275, 405, 320);
  triangle(420, 320, 440, 265, 460, 320);
  triangle(440, 320, 460, 250, 480, 320);
  triangle(500, 320, 540, 200, 580, 320);
  triangle(580, 320, 630, 100, 680, 320);

  //Lake
  fill(51, 94, 99);
  strokeWeight(0);
  ellipse(320, 480, 850, 350);

  //Reflection
  ellipseSize = map(vocal, 0, 100, 10, 140)
  fill(207, 236, 252);
  ellipse(310, 310, ellipseSize, 5);
  ellipse(330, 316, ellipseSize, 6);
  ellipse(310, 325, ellipseSize, 4);
  ellipse(300, 330, ellipseSize, 3);
  ellipse(380, 330, ellipseSize, 3);
  ellipse(320, 340, ellipseSize, 5);
  ellipse(300, 355, ellipseSize, 5);
  ellipse(380, 355, ellipseSize, 5);
  ellipse(280, 375, ellipseSize-10, 5);
  ellipse(340, 375, ellipseSize-10, 5);
  ellipse(320, 400, ellipseSize-30, 5);
 
  //Stars
  fill(201, 193, 77); 
  rectSize = map(drum, 0, 100, 5, 30);
  rotate(45);
  rect(180, 50, rectSize, rectSize);
  rect(80, 20, rectSize, rectSize);
  rect(240, -80, rectSize, rectSize);
  rect(500, -180, rectSize, rectSize);
      
 }