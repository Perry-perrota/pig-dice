$(document).ready(function() {
  $("h6").click(function() {
    $("h6").hide('slow')
    $(".viewrules").show('slow');
  });
});
var rollval;
var total=0;
var ranNum=();
var checkValue=();
function ranNum () {
  
  var rollVal=(Math.ceil(Math.rollVal() * 6));
  checkValue();
}
$(document).ready(function() {
  $(".roll").click(function() {
    function ranNum () {
      var rollVal=(Math.ceil(Math.rollVal() * 6));
      checkValue();
    }
  });
});
function ranNum () {
  var rollVal=(Math.ceil(Math.rollVal() * 6));
  checkValue();
}
function checkValue(){
  if(rollval===1){
    total+=0;
    nextplay();
  }
  else(rollVal>==2 && rollVal<==6){
    total+=rollval;
    //  To be outputted to the html document
    document.getElementById('#player1').innerHTML = rollval;
    ranNum();
  }
  if(total>==100){
    //  To be outputted to the html document
    document.getElementById("#win1").innerHTML = "You win";
  }
  else{
    ranNum();
  }
}

  function nextplay(){
    ranNum();
    if(rollval===1){
      total+=0;
      nextplay();
      document.getElementById('#player2').innerHTML = rollval;
    }
    else(rollVal>==1 &&rollVal<==6){
      total+=rollval;
      //  To be outputted to the html document
      document.getElementById('#player2').innerHTML = rollval;
      ranNum();
    }
    if(total>==100){
    document.getElementById('#win2').innerHTML ="You win";

    }
    else{
      ranNum();
    }
    }
