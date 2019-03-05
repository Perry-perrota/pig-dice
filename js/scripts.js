$(document).ready(function() {
  $("h6").click(function() {
    $("h6").hide('slow')
    $(".viewrules").show('slow');
  });
});
function ranNum(){
  var random = Math.floor((Math.random() * 6) + 1);
  alert(random);
  // store the random numbers to an array.
  var scores=[];
}
function sumNum(){
  // loop to add values to the specific variable
total +=random;
alert(total);

}
//check for the value if it meets the rules criteria
function checkValue(){
  if(random===1){
    total=0;
  }
  else(random>==1 &&random<==6>){
    total+=random
    console.log("dice roll:" + random)

  }

};
