$(document).ready(function() {
  $("h6").click(function() {
    $("h6").hide('slow')
    $(".viewrules").show('slow');
  });
});
function ranNum(){
  var rollval = Math.floor((Math.random() * 6) + 1);
  alert(rollval);
}

//check for the value if it meets the rules criteria
function checkValue(){
  if(rollval===1){
    total+=0;
  }
  else(random>==1 &&random<==6>){
    total+=rollval;
    console.log("dice roll:" + random)

  }

};
