function setup() {
    createCanvas(400, 400);
    background("#E02323"); 
    //picnic table cloth 
    push()
    translate(2,2);
    for(let j = 0.15; j<11; j++) {
      for(let i = 0.15; i<11; i++) {
      rect(i*50,j*50,30);
        if (i == 13 && j == 5) {
          fill(255,0,0)
        }  
    }
    }
    pop()
  }
   
  function draw() {
    
    if(mouseIsPressed==true){
      
      background("#E02323"); 
    //picnic table cloth 
    push()
    translate(2,2);
    for(let j = 0.15; j<11; j++) {
      for(let i = 0.15; i<11; i++) {
      rect(i*50,j*50,30);
        if (i == 13 && j == 5) {
          fill(255,0,0)
        }  
    }
    }
    pop()
      
     //cups
    fill("#ffa700")
    ellipse(260,50,23,43)
    stroke("black")
    strokeWeight(1)
    fill("#E1F2E3")
    circle(110,75,35)
    circle(110,75,25)
    rect(247,64,27,43,5)
    circle(360,120,35)
    circle(360,120,25)
    circle(57,345,35)
    circle(57,345,25)
    circle(80,150,35)
    circle(80,150,25)
    fill("#ffa700")
    circle(80,150,15)
    circle(110,75,24)
    
      
    //plates
    
    fill("#DEDEDE")
    circle(60,205,65)
    circle(60,205,45)
    circle(170,65,65)
    circle(170,65,45)
    circle(120,345,65)
    circle(120,345,45)
    circle(340,50,65)
    circle(340,50,45)
      
  
     //turkey
    stroke("black")
    strokeWeight(1)
    fill("#DEDEDE")
    ellipse(295,320,200,130)
    ellipse(295,320,180,110)
    stroke("#7D4315")
    strokeWeight(3)
    fill("#FADFC3")
    rect(325,320,40,30,60)
    rect(315,310,40,30,60)
    rect(230,290,40,60,60)
    rect(240,290,40,60,60)
    rect(250,290,40,60,60)
    rect(260,290,40,60,60)
    rect(230,300,40,60,60)
    rect(240,300,40,60,60)
    rect(250,300,40,60,60)
    stroke("black")
    strokeWeight(1)
    fill(255)
    rect(60,190,40,10)
    fill("#7D4315")
    ellipse(50,195,40,30)
    fill("#DEDEDE")
    noStroke()
    ellipse(55,205,25,20)
    stroke("black")
    fill("#7D4315")
    rect(280,285,40,10)
    ellipse(325,290,40,30)
    fill(255)
    circle(100,195,15)
    circle(280,290,15)
    fill("#456632")
    circle(129,345,10)
    circle(120,335,10)
    circle(310,350,20)
    circle(317,360,20)
    
    //mashed potatoes
    
    fill("#B5D6E8")
    circle(130,260,70)
    circle(130,260,57)
    circle(130,260,40)
    fill(255)
    circle(120,255,40)
  
    
    //juice pitcher
    stroke("black")
    strokeWeight(1) 
    fill("#E1F2E3")
    triangle(250,170,320,150,320,190)
    rect(302,160,60,20,30)
    circle(305,170,80)
    circle(305,170,60)
    noStroke()
    fill("#ffa700")
    circle(305,170,30)
    stroke("black")
    strokeWeight(1)
      
    
    //butter
      
    fill("#DEDEDE")
    ellipse(232,235,65,30)
    fill("#E5CB26")
    rect(230,230,25,10,1)
    
    //cranberry sauce
    
    fill("#DEDEDE")
    ellipse(40,85,70,130)
    ellipse(40,85,50,110)
    fill("#7A1927")
    circle(30,55,35)
    fill("#DEDEDE")
    noStroke()
    rect(35,35,15,40)
    fill("#7A1927")
    stroke("black")
    circle(330,55,35)
    fill("#DEDEDE")
    noStroke()
    circle(340,41,25)
    circle(343,56,15)
    fill("#7A1927")
    stroke("black")
    circle(40,120,35)
    fill("#456632")
    circle(350,35,20)
  
      
    //cornbread
      
    fill("#B3B3B3")
    rect(20,246,50,70,3)
    fill("#E6AB32")
    rect(25,251,40,60,2)
    fill("#B3B3B3")
    rect(25,251,23,37)
      
    //pumpkin pie
    
    fill("#DEDEDE")
    circle(157,165,90)
    circle(157,165,80)
    stroke("#FCC48B")
    fill("#F48C12")
    strokeWeight(5)
    arc(150, 50, 80, 80, 0,QUARTER_PI)
    arc(157,165,80,80,0,PI + QUARTER_PI)
    noStroke()
    fill("white")
    circle(165,56,9)
    circle(167,179,9)
    circle(146,179,9)
    circle(141,160,9)
    
    fill("#B5D6E8")
    noStroke()
    ellipse(130,267,20,25)
    ellipse(130,257,25,30)
    ellipse(123,254,30,24)
      
    fill(255)
      
      
    }
    
    else{ 
      
   background("#E02323"); 
    //picnic table cloth 
    push()
    translate(2,2);
    for(let j = 0.15; j<11; j++) {
      for(let i = 0.15; i<11; i++) {
      rect(i*50,j*50,30);
        if (i == 13 && j == 5) {
          fill(255,0,0)
        }  
    }
    }
    pop()
      
    //turkey
    stroke("black")
    strokeWeight(1)
    fill("#DEDEDE")
    ellipse(200,200,200,130)
    ellipse(200,200,180,110)
    fill("#7D4315")
    rect(200,150,40,10)
    rect(200,240,40,10)
    ellipse(200,200,120,80)
    ellipse(200,155,40,30)
    ellipse(200,245,40,30)
    fill(255)
    circle(245,155,15)
    circle(245,245,15)
    fill("#456632")
    circle(140,165,20)
    circle(145,175,20)
    circle(155,165,20)
    circle(147,230,20)
    circle(140,220,20)
    
    //mashed potatoes
    
    fill("#B5D6E8")
    circle(80,100,70)
    fill(255)
    circle(80,100,57)
    fill("#E6CC57")
    rect(84,109,6,6,2)
    rect(80,100,6,6,2)
    
    //juice pitcher
    stroke("black")
    strokeWeight(1) 
    fill("#E1F2E3")
    triangle(240,70,300,50,300,90)
    rect(298,60,60,20,30)
    circle(295,70,80)
    noStroke()
    fill("#ffa700")
    circle(295,70,60)
    fill(255)
    stroke("black")
    strokeWeight(1)
    rect(295,70,5)
    rect(290,80,7)
    rect(300,50,6)
    rect(280,60,7)
      
    //cups
      
    fill("#E1F2E3")
    circle(220,45,35)
    circle(340,200,35)
    circle(350,345,35)
    circle(90,270,35)
    circle(220,45,25)
    circle(340,200,25)
    circle(350,345,25)
    circle(90,270,25)
      
    //plates
    
    fill("#DEDEDE")
    circle(50,225,65)
    circle(150,45,65)
    circle(340,140,65)
    circle(290,355,65)
    circle(50,225,45)
    circle(150,45,45)
    circle(340,140,45)
    circle(290,355,45)
      
    //butter
      
    fill("#DEDEDE")
    ellipse(190,95,65,30)
    fill("#E5CB26")
    rect(171,90,38,10,1)
    
    //cranberry sauce
    
    fill("#DEDEDE")
    ellipse(320,285,130,70)
    ellipse(320,285,100,50)
    fill("#7A1927")
    circle(290,285,35)
    circle(310,285,35)
    circle(330,285,35)
    circle(350,285,35)
      
    //cornbread
      
    fill("#B3B3B3")
    rect(30,296,50,70,3)
    fill("#E6AB32")
    rect(35,301,40,60,2)
      
    //pumpkin pie
    
    fill("#DEDEDE")
    circle(170,330,90)
    stroke("#FCC48B")
    fill("#F48C12")
    strokeWeight(5)
    circle(170,330,80)
    noStroke()
    fill("white")
    circle(170,313,9)
    circle(186,325,9)
    circle(180,344,9)
    circle(154,325,9)
    circle(159,344,9)
    }
    
  }