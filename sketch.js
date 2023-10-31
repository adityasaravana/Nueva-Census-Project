let font;

function setup() {
    createCanvas(1100, 1100);
    
    font = loadFont("inter.ttf");
    table = loadTable("data.csv", "csv", "header");
}

function draw() {
  textFont(font);
  background(235);
  var rows = table.getRows();

  // go through the data one row at a time
  for (var r = 0; r < rows.length; r++) {

    // within each row, get the properties of interest -- you can add more lines here!
    var role = rows[r].getString("ROLE");
    var happiness = rows[r].getString("HAPPINESS");
    var optimism = rows[r].getString("OPTIMISM");
    var age = rows[r].getString("AGE");
    var gender = rows[r].getString("GENDER");

    if (gender == "Male") {
      fill("blue");
    } else if (gender == "Female") {
      fill("pink");
    } else {
      fill("gray");
    }

    // circleSize = optimism * ellipseSizeMultiplier;
    circleSize = 20;
    // decide which perties will control the X position and Y position of a dot 
    xpos = (age - 20) * 23;
    ypos = height - optimism * 100;

    // draw a dot for every data point
    // noStroke();
    var ellipseSizeMultiplier = 2;
    noStroke();
    ellipse(xpos, ypos, circleSize, circleSize);

    // add hover text
    if (
      mouseX > xpos - circleSize &&
      mouseX < xpos + circleSize &&
      mouseY > ypos - circleSize &&
      mouseY < ypos + circleSize
    ) {
      textXpos = xpos - 5;
      textYpos = ypos + circleSize / 2 + 30;
      size = 20;

      fill("black");
      textSize(size);
      text(role, textXpos, textYpos);
      
      text("Age: " + age, textXpos, textYpos + size);
      text("Optimism for the future: " + optimism, textXpos, textYpos + size * 2);
      // console.log(xpos)
      // console.log(ypos)
      // console.log(mouseY)
      // console.log(mouseX)
    }
  }
}