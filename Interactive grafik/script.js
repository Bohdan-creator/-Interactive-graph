$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);
var carousel = $(".carousel"),
currdeg  = 0;


function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 36;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 36;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}
var i = 0;


$(function() {
  $('.itemss').on('click', function(e) {
    var scrImage  = e.target.src;
    document.getElementById('image-preview').src = scrImage;
         console.log(e.target.src);
         
    $("#myModal").modal();
    
  });		
});


$( ".arrow_down" ).click(function() {
  if(i==0){
return;
  }
  $( ".image-container" ).animate({
    right: "-=583px",
  }, 600, function() {
    // Animation complete.
  });
  i--;
});


$(".add_tab").click(function(){
   $ (".Form").fadeIn();
  $ (".content_tab").fadeIn();
  //$(".main").css("background-color","red");
   $("#overlay").show();
    
});
$(function(){
  $(".layout").on('click',function(){
    if($(this).attr('data-click-state') == 1) {
        $(this).attr('data-click-state', 0);
        $(this).css('background-color', '#dc3545')
        $( "#sortable, #sortable_right" ).sortable("destroy");
      }
    else {
      $(this).attr('data-click-state', 1);
      $(this).css('background-color', '#28a745')
      $( "#sortable, #sortable_right" ).sortable({
        connectWith: ".sidenav"
      }).disableSelection();
    }
  });
});

$(".openbtn").on("click",function(){
  $(".sidenav").css("margin-left","10px");
  var x = window.matchMedia("(max-width: 1600px)")
  if (x.matches) {
  $("#right_col").fadeOut("slow");
  }
  $(".sidenav_right").css("margin-left","20px");
  $(".sidenav_right").addClass("sidenav");
  

});
$(".closebtn").on("click",function(){
  $("#right_col").fadeIn("slow");
  $(".sidenav_right").removeClass("sidenav");
  $(".sidenav").css("margin-left","-310px");  
});



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






$(".Add_Tab").click(function(){
    $ (".Form").fadeOut();
    $ (".content_tab").fadeOut();
     $("#overlay").hide();

    var name = $("#name_tab").val();
    if(name==''){
        alert("Empty!!");
    }
   
   else{
    $(".wrapper .tabs").append("<span class='tab'>"+name+"</span>");
    $(".middle .tab_content").append("<div class='tab_item'>Kdsfksndfjksdfjknsfnsdfkndskjfskdjfn</div>");

    $(".tab_item").not(":last").hide();
    $(".wrapper .tab").click(function() {
      $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab_item").hide().eq($(this).index()).show()
    }).eq(0).addClass("active");

}
});
  $.fn.rowCount = function() {
    return $('tr', $(this).find('tbody')).length;
};


  $('#switch').click(function() {
    if ($(this).is(':checked')) {
        $(".table tr").css("background-color","#CCCCFF");
       $(".table tr").each(function(index){
           if(index==0){return;}
          if(index%2==0){
            $("tr:eq(" + (index) + ")").css("background-color", "LightSteelBlue");
                  }

      })
          }
     else{
        $(".table tr").css("background-color","#CCCCFF");
        $(".table tr").each(function(index){
            if(index==0){return;}
           if(index%2!=0){
             $("tr:eq(" + (index) + ")").css("background-color", "LightSteelBlue");
                   }
 
       })
     }

});

$(".Save_pojazd").click(function(){

  var date_first  = $("#datepicker").val();
  var date_first_l  = $("#datepickerlast").val();
  if(date_first>=date_first_l){
    // $(".wrong_date").addClass("datenot");
    $(".dateo").removeClass("dateok");
    $(".date").addClass("datenot");


  }
  else{
    $(".date").removeClass("datenot");
    $(".dateo").addClass("dateok");
  }
});

$(".save").click(function(){
    $(".Form").hide();
    var name = $("#Name").val();
            var email = $("#SurName").val();
            var year = $("#Year").val();
            var markup = "<tr><td>" + name + "</td><td>" + email + "</td><td>" + year + "</td></tr>";
            $(".table tbody").append(markup);
            $("tr").last().hide();
           $("tr").last().fadeIn(700);
});

var tab_index = new Array();
var last_index =0 ;

$( ".table tbody").on("click","tr",function(e){
  var row_index = $(this).index()+1;
  $("tr:eq(" + (row_index) + ")").fadeOut("fast");
          tab_index.push(row_index);

});

$(".back").on("click",function(){
  $("tr:eq(" + (tab_index.pop()) + ")").fadeIn("fast");
})
// function ShowElements() {
 
//   $(".load").hide();
  
// }
//   ShowElements();
$(document).ready(function(){
  animateDiv('.W');
  animateDiv('.E');
  animateDiv('.B');

});

function makeNewPosition(){
  
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 450;
  var w = $(window).width() - 450;
  
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  
  return [nh,nw];    
  
}
var i  = 6;
function animateDiv(myclass){
  var newq = makeNewPosition();

  $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
       if(i>0){
           i--;
    animateDiv(myclass);
       }
    else{
    $(".W").animate({top: 150, left: 600},1000);
    $(".E").animate({top: 150, left: 852},1000);
    $(".B").animate({top: 150, left: 805},1000);
    setTimeout(function(){ 
      $(".main").show("slow");
      $(".footer").show("slow");
      $(".next").show("slow");
      $(".linkss").show();
      $(".prev").show("slow");
      $(".containe").show("slow");
      $(".load-page").hide("slow");
     }, 1000);
   
        return;
    }        
  });
  
};


function drawe() {
  var canvas = document.getElementById('Canvas');
  //if (canvas.getContext) {
     var ctx = canvas.getContext('2d');
 ctx.beginPath();
         ctx.moveTo(20, 10);
         ctx.lineTo(180, 10);
         ctx.quadraticCurveTo(190, 10, 190, 20);
          ctx.lineTo(190, 180);
         ctx.quadraticCurveTo(190, 190, 180,190);
          ctx.lineTo(20, 190);
           ctx.quadraticCurveTo(10, 190, 10,180);
          ctx.lineTo(10, 20);
          ctx.quadraticCurveTo(10, 10, 20, 10);
         ctx.stroke();
}

drawe();

(function (id) {
  function deg2rad(d) {
      return (5 * Math.PI * d) / 360;
  }

  function rad2deg(r) {
      return (360 * r) / (5 * Math.PI);
  }

  function distance(x1, y1, x2, y2) {
      return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

  var Gear = function(x, y, connectionRadius, teeth, fillStyle, strokeStyle) {
      // Gear parameters
      this.x = x;
      this.y = y;
      this.connectionRadius = connectionRadius;
      this.teeth = teeth;

      // Render parameters
      this.fillStyle = fillStyle;
///        this.strokeStyle = strokeStyle;

      // Calculated properties
      this.diameter = teeth * 4 * connectionRadius; // Each touth is built from two circles of connectionRadius
      this.radius = this.diameter / (2* Math.PI); // D = 2 PI r

      // Animation properties
      this.phi0 = 0; // Starting angle
      this.angularSpeed = 0; // Speed of rotation in degrees per second
      this.createdAt = new Date(); // Timestamp
  }

  Gear.prototype.render = function (context) {
      // Update rotation angle
      var ellapsed = new Date() - this.createdAt;
      var phiDegrees = this.angularSpeed * (ellapsed / 1000);
      var phi = this.phi0 + deg2rad(phiDegrees); // Current angle

      // Set-up rendering properties
      context.fillStyle = this.fillStyle;
    //  context.strokeStyle = this.strokeStyle;
      //context.lineCap = 'round';

      // Draw gear body
      context.beginPath();
      for (var i = 0; i < this.teeth * 2; i++) {
          var alpha = 2 * Math.PI * (i / (this.teeth * 2)) + phi;
          // Calculate individual touth position
          var x = this.x + Math.cos(alpha) * this.radius;
          var y = this.y + Math.sin(alpha) * this.radius;

          // Draw a half-circle, rotate it together with alpha
          // On every odd touth, invert the half-circle
          context.arc(x, y, this.connectionRadius, -Math.PI / 2 + alpha, Math.PI / 2 + alpha, i % 2 == 0);
      }
      context.fill();
      context.stroke();

      // Draw center circle
      context.beginPath();
      context.arc(this.x, this.y+15, this.connectionRadius,0, 2 * Math.PI);
      context.arc(this.x+15, this.y, this.connectionRadius, 0, 2 * Math.PI, true);
      context.arc(this.x-15, this.y, this.connectionRadius, 0, 2 * Math.PI, true);
      context.arc(this.x, this.y-15, this.connectionRadius, 0, 2 * Math.PI, true);
      context.arc(this.x, this.y, this.connectionRadius, 0, 2 * Math.PI, true);
      context.stroke();
  }

  var canvas = document.getElementById(id + 'Canvas');
  canvas.style.display = "none";
  var context = canvas.getContext('2d');
  var W = canvas.width;
  var H = canvas.height;

  var img = document.getElementById(id + 'Image');
  
      img.style.display = "none";
      canvas.style.display = "inherit";

      var gear = new Gear(W / 2, H / 2, 9, 12, "grey", "rgba(0,0,250,0)");
      gear.angularSpeed = 36;

      setInterval(function () {
          canvas.width = canvas.width;
          gear.render(context);
      }, 60);
  
}('gearsTutorialPart1'));

