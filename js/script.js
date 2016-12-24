


$(document).ready(function () {
//
  startTime();
  wiewCal();
  $('#content').hide();
  $("#skin").on("click swipe", function(){
      //$('#sunrise').text("ll");
    $('#skin').hide();
    $('#content').show();
  });
  $("#cl").on("click swipe", function(){
      //$('#sunrise').text("ll");
    $('#skin').hide();
    $('#content').show();
  });

  var idleSeconds = 20;
  $(function(){
    var idleTimer;
    function resetTimer(){
      clearTimeout(idleTimer);
      idleTimer = setTimeout(whenUserIdle,idleSeconds*1000);
    }
    $(document.body).bind('mousemove keydown click scroll',resetTimer); //space separated events list that we want to monitor
    resetTimer(); // Start the timer when the page loads
  });


});

function wiewCal(){
    var s = getSun();
    $('#calendar').text( getHebcal());
    $('#sunrise').text(s[0]);
    $('#sunset').text( s[1]);
}



function whenUserIdle(){
  $('#skin').show();
  $('#content').hide();
  //...
}
