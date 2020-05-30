
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


$('body').toggleClass('loaded');
