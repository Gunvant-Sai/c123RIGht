function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
   }
   
   function draw()
   {
       background("white");
       image(video, 0, 0, 300, 300);
   }