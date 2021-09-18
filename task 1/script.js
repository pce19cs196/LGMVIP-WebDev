var menubtn = document.getElementById("menubtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-250px";

menubtn.onclick = function(){
  if(sideNav.style.right=="-250px"){
    sideNav.style.right = "0";
    menu.src = "img/close.png";
  }
  else{
    sideNav.style.right = "-250px";
    menu.src = "/img/menu.png"
  }

}


// typing animation script
var typed = new Typed(".typing", {
   strings:  ["Zippy","problem","solution"],
   typeSpeed: 100,
   backSpeed: 60,
   loop: true
})


//video gallary
    tutVid = document.getElementById('tutVidTitle');
    link4u1.onclick =function(){
     tutVid.innerHTML = "Movie Recommendation System";
    }
    link4u2.onclick =function(){
      tutVid.innerHTML = "Stock Price Prediction";
     }
     link4u3.onclick =function(){
      tutVid.innerHTML = "Facial Recognition System";
     }
     link4u4.onclick =function(){
      tutVid.innerHTML = "Location Predictor";
     }
     link4u5.onclick =function(){
      tutVid.innerHTML = "Mood exchange System";
     }


     //contact me
     const checkbox = document.querySelector('.my-form input[type="checkbox"]');
     const btns = document.querySelectorAll(".my-form button");
     
     checkbox.addEventListener("change", function() {
       const checked = this.checked;
       for (const btn of btns) {
         checked ? (btn.disabled = false) : (btn.disabled = true);
       }
     });