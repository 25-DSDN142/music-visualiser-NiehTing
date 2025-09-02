
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(12, 23, 36)
  rectMode(CENTER);
  angleMode(DEGREES);

  //Moon
  let rectSize;
  rectSize = map(vocal, 0, 100, 75, 125);
  fill(227, 236, 252);
  rect(320, 150, rectSize, rectSize, 100);

  //Clouds
  fill(20)
  ellipse(130, 100, 70, 30)

  //Terrain
  rect(0, 480, 1280, 350)

  //Lake
  fill(20, 43, 59)
  strokeWeight(0)
  ellipse(320, 480, 850, 350)
 
  //Stars
  //quad(200, 225, 210, 215, 220, 225, 210, 235)
  rectSize = map(drum, 0, 100, 5, 30);
  rotate(45);
  fill(201, 193, 77); 
   for(let i = 1; i <6; i = i +1){
      let rectStep = i*50;
      rect(300, rectStep, rectSize, rectSize); 
      
 }

}