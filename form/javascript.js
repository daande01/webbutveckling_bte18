
document.getElementById("knapp").addEventListener("click", printuser);




function printuser(){


  var namn =document.getElementById("us").value;
    var färg =document.getElementById("färg").value;


  document.getElementById("par").innerHTML= namn+"färg "+färg;

}
