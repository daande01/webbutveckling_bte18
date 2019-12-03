
document.getElementById("knapp").addEventListener("click", printuser);

document.body.style.backgroundColor = localStorage.getItem("färg");


function printuser(){



  var färg =document.getElementById("färg").value;
  localStorage.setItem("färg", färg);
  document.body.style.backgroundColor=färg;




}
