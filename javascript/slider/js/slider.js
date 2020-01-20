
$("#button").show();
 $("#window").css("overflow", "hidden"); // om javascript är "av" kommer denna rad inte att köras , då blir alla bilder synliga 
 // jag har även ändrat i css en gällande overflow. detta kommer att leda till att bilderna blinkar till och syns
 // en kort stund innan javascriptet ser till att de får hidden. så i detta fall kan denna javascript kod behöva placeras 
 // tidigare i html dokumnetet exempelvis i header så att de läses in innan man ritat ut html objekten på skärmen.




  
$("#window").click(function(){
  
  console.log("hit kommer vi");
  
  $("#imgs").animate({right:"+=202"});
  
  
  
  
});