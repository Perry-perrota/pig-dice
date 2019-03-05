$(document).ready(function() {
  $("h6").click(function() {
    $("h6").hide('slow')
    $(".viewrules").show('slow');
  });
  });
$(document).ready(function() {
$(".roll").click(function() {
  function ranNum(){
    var rollVal=(Math.ceil(Math.rollVal() * 6));
    checkValue();
  }
});
});
function checkValue(){
  if(rollval===1){
    total+=0;
    nextplay();
      }
  else(rollVal>==1 && rollVal<==6){
    total+=rollval;
    //  To be outputted to the html document
    console.log("dice roll:" + rollVal)
    ranNum();

  }
  if(total>==100){
    //  To be outputted to the html document
    console.log("Youre the winner with" + total )
  }
  else{
    ranNum();
}

function nextplay(){
  ranNum();
  if(rollval===1){
    total+=0;
    nextplay();
      }
  else(rollVal>==1 &&rollVal<==6){
    total+=rollval;
    //  To be outputted to the html document
    console.log("dice roll:" + rollVal)
    ranNum();

  }
  if(total>==100){
    console.log("Youre the winner with" + total )

  }
  else{
    ranNum();

}
ranNum();
if(rollval===1){
  total+=0;
  nextplay();
    }
else(rollVal>==1 &&ra<==6){
  total+=rollval;
  console.log("dice roll:" + rollVal)
  // to be outputted to the html document
    console.log("" + total)
  ranNum();
}
if(total>==100){
  console.log("Youre the winner with" + total )

}
else{
  ranNum();

}
}
