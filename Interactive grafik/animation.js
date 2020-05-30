
(function () {
        let canvas, ctx, gravity, ball, friction
      
        function init () {
          canvas = document.getElementById('AnimationCanvas')
          ctx = canvas.getContext('2d')
      
          canvas.width = 802
          canvas.height = 602
      
          gravity = 0.25
          friction = 0.98
          
          ball = {
                bounce: 0.75, // energy lost on bounce (25%)
                radius: 30,
                x: canvas.width / 2,
                y: canvas.height / 2,
                velX: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1),
                velY: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1)
              }
             // ball = document.getElementById("animation");
          window.requestAnimationFrame(update)
        }
      
        function draw () {
                ctx.clearRect(0, 0, canvas.width, canvas.height)

                // draw the ball (only object in this scene)
                ctx.beginPath()
                ctx.fillStyle = 'red'
                ctx.arc(
                  ball.x, ball.y,
                  ball.radius,
                  0, Math.PI * 2
                )
                ctx.fill()        }
      
        function update () {
                window.requestAnimationFrame(update)

                if (ball.y + ball.radius >= canvas.height) {
                        // reverse direction and lose energy from bouncing
                        ball.velY *= -ball.bounce
                        // reset position
                        ball.y = canvas.height - ball.radius
                        // slow down the ball's X velocity with friction
                        ball.velX *= friction
                      }
                      // top bound / ceiling
                      if (ball.y - ball.radius <= 0) {
                        ball.velY *= -ball.bounce
                        ball.y = ball.radius
                        ball.velX *= friction
                      }
                      
                      // left bound
                      if (ball.x - ball.radius <= 0) {
                        ball.velX *= -ball.bounce
                        ball.x = ball.radius
                      }
                      // right bound
                      if (ball.x + ball.radius >= canvas.width) {
                        ball.velX *= -ball.bounce
                        ball.x = canvas.width - ball.radius
                      }
        
                       $("#AnimationCanvas").click(function(){
                        ball.velY += ball.x*0.0001;
                        ball.velX += ball.y*0.0001;         
                       // ball.y*=ball.velY;
                        //ball.x*=ball.velX;       
                });

                      // add gravity
                      ball.velY += gravity
                    
                      // update ball position
                      ball.x += ball.velX
                      ball.y += ball.velY
                    
          draw()
        }
      
        document.addEventListener('DOMContentLoaded', init)
      })()


        //var step = 4;
        //var speed = .5;
         
        function steps() {
          
        var canvas = document.getElementById('chartbar');
        var context = canvas.getContext('2d');
        var gradient = context.createLinearGradient(0, 0, 170, 0);
gradient.addColorStop("1", "magenta");
gradient.addColorStop("0.5" ,"blue");
gradient.addColorStop("1" ,"coral");
gradient.addColorStop("0.5" ,"#660900");
gradient.addColorStop("0.5" ,"blue");
gradient.addColorStop("1.0", "red");
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.moveTo(0, 5);
           // context.lineTo(0,30);
           // context.lineTo(10,30);
           // context.lineTo(0,30);
           // context.lineTo(0,60);

           var step = 30;
           var symbol =0 ;
           var end=0;
            for(var i =0  ;i<10;i++){
                context.lineTo(symbol,step);
                context.lineTo(symbol+10,step);
                context.font = "20px Verdana";
                context.strokeText(Math.abs(i-9), symbol+10, step);
                context.lineTo(symbol,step);
                step+=30;
                if(i==9){
                        context.lineTo(symbol,step+10);

                        end = step+10;
                       // step=550;
                        context.fillStyle='#ffa299';

                        var difbar = 5;
                        var k = 0;
                        var arr =  ["Label 1","Label 2","Label 3","Label 4","Label 5"]
                        for(var j = 100;j<600;){

                          context.strokeStyle=gradient;     
                          context.lineTo(j,end);
                                 if(j%100==0){
                                         context.lineTo(j,end/3+difbar);
                                         context.font = "25px Normal";
                                         if(k!=0){
                                         context.strokeText(arr[k], j,end/3+difbar-10);
                                         }
                                         else
                                         context.strokeText(arr[k], j,end/3+difbar-10);

                                         context.lineTo(j+40,end/3+difbar);
                                    
                                    
                                         context.lineTo(j+40,end);
                                        // context.lineTo(step+40,end);
                                         //context.lineTo(step,end);

                                        difbar+=40;
                                        k++;
                                 }
                                 j+=100;

                                
                        }
                }


            }
            context.lineWidth = 5;
            context.stroke();
            window.requestAnimationFrame(steps)
        }

  
steps();

  //function www(){
//setInterval(steps,1000);
 // }
  //www();





    

















 
 


 













    
    
    
    
    
    
    
    
    
    
    
    
   
   








 




   

































      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      












































































