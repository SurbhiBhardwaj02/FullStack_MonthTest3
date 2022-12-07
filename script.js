var input = document.getElementById("txt");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
var inputVal = document.getElementById("txt").value;
var color = document.querySelector('input[name="fav_language"]:checked').value;
  if (event.key === "Enter") {
    // Cancel the default action, if needed
  //   event.preventDefault();
    // Trigger the button element with a click
  //   alert(document.querySelector('input[name="fav_language"]:checked').value);
  //   alert(inputVal);
  document.getElementById("txt").value = "";
  document.getElementById("madd").style.display = "none";
    document.getElementById('rowadd').innerHTML = document.getElementById('rowadd').innerHTML + `<div class="col-lg-4" onclick="remove(this)"><div class="card bg-light"><div style = "background: ${color}; height: 5px"></div><div class="card-body">${inputVal}</div></div></div>`
      document.getElementById(id).style.display = "none"
  }
});

var trash = false;

function myFunction(){
  document.getElementById("madd").style.display = "block";
}

function myTrash(){
  if(trash == false){
      trash = true;
  }else{
      trash = false;
  }
}

function remove(el) {
var element = el;
if(trash == true){
element.remove();
}
}