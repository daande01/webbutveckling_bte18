
document.getElementById("knapp").addEventListener("click", printuser);




function printuser(){


  var namn =document.getElementById("us").value;
  var färg =document.getElementById("färg").value;

  var gender=document.getElementById("kön").value;

    document.body.style.backgroundColor=färg;
    document.getElementById("par").style.fontSize = "100px";

  document.getElementById("par").innerHTML= namn+"färg "+färg+ " "+gender;

}
