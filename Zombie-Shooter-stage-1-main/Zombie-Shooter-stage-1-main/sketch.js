var jeff,todd,richard;
var knife,gun,images,poison;
var edges,jeffImage,toddImage,richardImage;

function preload(){
  jeffImage = loadImage("jeff.png");
  toddImage = loadImage("todd.png");
}

function setup(){
    createCanvas(1350,600);

    richard = createSprite(500,600,20,40);
   

    todd = createSprite(600,300,20,40);
    todd.addImage(toddImage);
    todd.scale = 0.2;
    
    
    jeff = createSprite(0,20,20,20)
    jeff.addImage(jeffImage);
     jeff.velocityY = +9;
     jeff.velocityX = +5
    jeff.scale = 0.2;
     
     
     
     
    knife = createSprite(800,300,20,40);

  
    }

    function draw(){
        background("lime");
        edges = createEdgeSprites();
      jeff.bounceOff(edges);

    if(keyDown("UP_ARROW")){
        todd.y = todd.y - 2;
    }

    if(keyDown("RIGHT_ARROW")){
      todd.x = todd.x + 2
    }
    if(keyDown("LEFT_ARROW")){
        todd.x = todd.x - 2
      }

      if(keyDown("DOWN_ARROW")){
        todd.y = todd.y + 2;
    }

    if(todd.isTouching(jeff)){
        reset();
      }
    
      if(keyDown("r")){
        restart();
      }
      
      
      
    
        drawSprites();
    }

    function reset(){
     
        jeff.x = 700;
        jeff.y = 300;
        jeff.velocityY = 0;
        jeff.velocityX = 0;
        todd.x = 600;
        todd.y = 500;
        
      
    }
  
    function restart(){
      jeff.velocityY = +7;
    jeff.velocityX = +5;
    }
    

  