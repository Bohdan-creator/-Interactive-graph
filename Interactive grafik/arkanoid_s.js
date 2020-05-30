var score =0 ;
var lives = 4;
var level = 1;
var tog =1;
var ball = new Object();
var bricks = new Object();
var side = new Object();
var step = 1;
var pos_block = [[]];
var pos_block_rez = [];
var game=false;


/*
clock
*/


const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');

setInterval(updateClock, 1000);

function updateClock(){
	let date = new Date();
	let sec = date.getSeconds() / 60;
	let min = (date.getMinutes() + sec) / 60;
	let hour = (date.getHours() + min) / 12;

	secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
	minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
	hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
}

 updateClock();








function  init_block_rez(){
        for(k = 0;k<8;k++){
                if(k==7){
                        pos_block_rez[k]=false;
                }      
                else{
                        pos_block_rez[k]=true;
                }
        }
}
function initialization(){
        if(level==1){
        for (i=0; i < bricks.rows; i++) {
                pos_block[i]=[];
                for (j=0; j < bricks.cols; j++) {  
                  if(j==7){
                          pos_block[i][j]=false;
                  }      
                  else
                pos_block[i][j] = true;
         
        }
        step=1;
        init_block_rez();
        }
      //  LevelFour();

        
}
if(level==2){
        for (i=0; i < bricks.rows; i++) {
                pos_block[i]=[];
              //  if(i%2==0){
                       // continue;
               // }
                for (j=0; j < bricks.cols;j++) {
                         
                  if(j==7){
                          pos_block[i][j]=false;
                  } 
                  else if(j%2==0&&i%2==0){
                          pos_block[i][j]=false;
                  }     
                  else
                pos_block[i][j] = true;
                }
        }
        step=1;
        init_block_rez();
 
}       

if(level==3){
        for (i=0; i < bricks.rows; i++) {
                pos_block[i]=[];
              //  if(i%2==0){
                       // continue;
               // }
                for (j=0; j < bricks.cols;j++) {
                         
                  if(j==7){
                          pos_block[i][j]=false;
                  } 
                  else if(j%3==0&&i%3==0){
                          pos_block[i][j]=false;
                  }     
                  else
                pos_block[i][j] = true;
                }
        }
        step=1;
        init_block_rez();
}
if(level==4){
        for (i=0; i < bricks.rows; i++) {
                pos_block[i]=[];
                for (j=0; j < bricks.cols; j++) {  
                  if(j==7){
                          pos_block[i][j]=false;
                  }      
                  else
                pos_block[i][j] = true;
         
        }
        step=1;
        init_block_rez();
        }
      //  LevelFour();

        
}

      }
function initBlock(){
        var canvas = document.getElementById("arkanoid");
        bricks.cols = 8;
        bricks.rows =5;
        bricks.width = 80;
        bricks.height = 25;
        bricks.padding = 4;
}
var bricks_count = 35;
var bricks_destroyed=0;
function initSide(){
        side.x = 250;
        side.y = 618;
        side.height = 10;
        side.width = 150;     
}
function rectangle(topLeftCornerX, topLeftCornerY, width, height) {
        var canvas = document.getElementById("arkanoid");
         var context = canvas.getContext("2d");
        context.beginPath();
        context.rect(topLeftCornerX, topLeftCornerY, width, height);
        context.strokeStyle =  "#228B22";
        context.fillStyle =  "#8FBC8F";
        if(height==618){
                context.strokeStyle =  "#228B22";
                context.fillStyle =  "#8FBC8F";
        }
        if(level==2){
                context.fillStyle =  "#20B2AA";
        }
        if(level==3){
                context.fillStyle =  "#8A2BE2";

        }
        context.fill();
        context.stroke();
    }   
var p_h =0 ;
var p_w =0;
var c_d=0;// initBall();
   (function () {
        let canvas, ctx, gravity, ball, friction      
        function init () {
          canvas = document.getElementById('arkanoid')
          ctx = canvas.getContext('2d')
          ball = {
                radius: 15,
                x: 330,
                y:500,
                velX: 2,
                velY: 10             }
          window.requestAnimationFrame(update)
        }
      function difficulty(){
        canvas = document.getElementById('arkanoid')
        ctx = canvas.getContext('2d')
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeStyle = "red"
ctx.strokeText("Difficulty : ",500,670)
ctx.beginPath();
//ctx.strokeStyle= "green";
if(level==1)
ctx.fillStyle="#90EE90";
if(level==2)
ctx.fillStyle="#DAA520";
if(level==3)
ctx.fillStyle="#CD5C5C";
if(level==4)
ctx.fillStyle="#B22222";
ctx.arc(670, 660, 20, 0, 2 * Math.PI);
//ctx.stroke();
ctx.fill();
 

      }
        function draw () {
                ctx.beginPath()
                ctx.fillStyle = 'red'
                ctx.arc(
                  ball.x, ball.y,
                  ball.radius,
                  0, Math.PI * 2
                )
                ctx.fill() 
         } 
              
         function updateBricksT(){
                for(i=0;i<8;i++){
                var cor_h = (bricks.height+bricks.padding);
                var cor_w = i*(bricks.width+bricks.padding);
                
                if(Math.floor(ball.y/step)<cor_h&&Math.floor(ball.y/step)>cor_h-bricks.height&&Math.floor(ball.x+ball.radius)>=cor_w-bricks.width
                &&Math.floor(ball.x)<=cor_w){
                        if(pos_block_rez[i-1]==true){
                        pos_block_rez[i-1]=false;
                        console.log("false");
                        ball.velY =-ball.velY
                        //ball.velX=-ball.velX
                      ball.y += ball.radius
                        }
                }
        }
        }
      function updateBlock(){  
                 bricks_count-=1;
                 for ( i=0;i<bricks.rows;i++) {
                   for ( j=0; j < bricks.cols; j++) {  
                       var cor_h = i *(bricks.height+bricks.padding)+20;
                       var cor_w = j*(bricks.width+bricks.padding);
                       
                      if(cor_h==25){
                       if(Math.floor(ball.y)==25&&Math.floor(ball.x)>=cor_w-bricks.width
                       &&Math.floor(ball.x)<=cor_w){
                         ball.velY =-ball.velY
                         ball.y += ball.radius
                       }
                      }
             if(Math.floor(ball.y-20)<cor_h&&Math.floor(ball.y-20)>cor_h-bricks.height&&Math.floor(ball.x+ball.radius)>=cor_w-bricks.width
                       &&Math.floor(ball.x)<=cor_w){
                         var k = pos_block[i][j-1];
                         if(k==true){
                          pos_block[i][j-1]=false;
                          bricks_destroyed++;
                          console.log("Destroyed  : "+bricks_destroyed);
                         ball.velY =-ball.velY
                         ball.y += ball.radius
                         } 
                              
                    }                                        
                       }
                   }                    
      }





                function drawSide(){
                        rectangle(side.x,side.y,side.width,side.height);
                }
           var number =1;     
                function drawBricks() {
                      //  canvas = document.getElementById('arkanoid')
                      //  ctx = canvas.getContext('2d')   
                        ctx.font = "30px Arial";
ctx.strokeText("Score : "+bricks_destroyed +" Lives  : "+lives +" Level  : "+level, 0, 670);
                        
                        for (i=0; i < bricks.rows; i++) {
                                //pos_block[i]=[];
                                for (j=0; j < bricks.cols; j++) {  
                                        if(pos_block[i][j]==false){
                                           // alert("sdfsdf")
                                        }
                                        else
                                          rectangle(j *(bricks.width+bricks.padding),i *(bricks.height+bricks.padding)+20 ,
                                                                                          bricks.width, bricks.height);   
                                        }
                                         
                   }

                        }
                        function drawBricksT(){   
                                    
                                for( i = 0 ;i<8;i++){
                                  if(pos_block_rez[i]==false){
                                  }
                                  else{
                          rectangle(i*(bricks.width+bricks.padding),(bricks.height+bricks.padding)*step ,
                          bricks.width, bricks.height);
                          console.log("BRICKST");
                                  }
                          }
                              
                          }
        
        function update () {
                ctx.clearRect(0, 0, canvas.width, canvas.height)

                window.requestAnimationFrame(update)

                      if(ball.y+ball.radius>=side.y
                         &&ball.x+ball.radius<=side.x+170&& ball.x+ball.radius>=side.x&&ball.y+ball.radius>=side.y-30
                        ){ 
                        console.log(side.x+" : "+side.y);
                        ball.velY = -ball.velY 
                       if(ball.x<=side.x+85)                     
                       ball.velX =-Math.floor(Math.random() * 4);     //ball.y-=10
                       else if(ball.x>=side.x+85)
ball.velX=Math.floor(Math.random() * 5);;    
if(level==4){
        ball.velY=-15;
}      
if(level==3){
        ball.velY=-12;
}      
                }
                   
                      
                      if(lives>0&&bricks_destroyed==35){
                              level=2;
                           initialization();   
                         //  init_block_rez();
                      }
                      if(lives>0&&bricks_destroyed==58){
                        level=3;
                     initialization();   
                   //  init_block_rez();
                }
                if(lives>0&&bricks_destroyed==87){
                        level=4;
                     initialization();   
                   //  init_block_rez();
                }
                      if(lives>0&&bricks_destroyed==122){
                              
                        ctx.font = "40px Arial";
                        ctx.fillText("You win!",200,350);
                        ctx.fillText("Your Score :  "+bricks_destroyed,200,400);
                        ctx.fillText("Restart : R ",200,450);
                        ball.x =300
                        ball.y =300;
                        lives=4;

                      }
                    
                    

                      if(ball.y+ball.radius>=630){
                        if(lives>1){
                                ball.x = side.x+40
                                ball.y = 300
                                for(var i =0; i < 1; i++)
                                        ball.velY = 7;
                                ball.velY = 10;
                                lives-=1;
                        }
                        else{
                                ctx.font = "40px Arial";
                                ctx.fillText("Game Over:)", 200,350 )
                                ctx.fillText("Your score : "+bricks_destroyed, 200,400 )
                                ctx.fillText("Restart : Space ",200,450);
                            //    ball.x =300
                             //   ball.y =300;
                        
                                game=false;
                               // lives=4;
                                
                        
                        }
                       //return;
                      } 
                     if(ball.x + ball.velX>canvas.width-ball.radius||ball.x+ball.velX<ball.radius){
                       ball.velX =-ball.velX/2;
                     }
                     if(ball.y + ball.velY>canvas.height-ball.radius||ball.y+ball.velY<ball.radius){
                      ball.velY =-ball.velY;
                    }
                    $("#s").click(function(){
                        game=true;
                        });
                        $("#p").click(function(){
                                game=false;
                                });
                    if(game==true){
                     ball.x += ball.velX
                      ball.y += ball.velY
                          step+=0.01;
                    }
                      $("body").keydown(function(e) {
                        if(e.keyCode == 37) { // left
                        // if(side.x <=0){
                               //  return;
                         //}
                         //else
                         side.x -=80;
                         e.keyCode=0;   
                        }
                        else if(e.keyCode == 39) { // right
                         
                               if(side.x >=600){
                                      // return;
                               }
                               else{
                                side.x +=80;
                                }
                                e.keyCode=0;
                        }                       
                      });
                      $("body").keydown(function(e) {
                        if(e.keyCode == 32) { // left
                         level=1;
                         lives=4;
                         game=false;
                         side.x = 250;
                         ball.y=590;
                         ball.x=330;
                         bricks_destroyed=0;
                         initialization();
                         
                        }
                
              });
                      draw();
        drawSide();
       drawBricks();
       updateBlock();
       drawBricksT();
       updateBricksT();
       difficulty();

//      
        }  
        document.addEventListener('DOMContentLoaded', init)
      })()
function drawCircle(x,y,radius,fill_style){
        var canvas = document.getElementById("arkanoid");
        var context = canvas.getContext("2d");
        startingAngle =  0 * Math.PI;
endingAngle = 2 * Math.PI;
context.beginPath();           
context.arc(x, y, radius, startingAngle, endingAngle, false);
context.fillStyle = fill_style;
context.fill();
context.stroke(); 
}

initSide();
initBlock();
initialization();
init_block_rez();