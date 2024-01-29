let homePagePoff = document.getElementById("home-off-page");
let homePageOn = document.getElementById("home-on-pahomege");
let swithOn = document.getElementById("switchOn");
let gallery = document.getElementById("sectionPhototgallery");

let Anil = document.getElementById("galle");

swithOn.addEventListener("click",function(){
    homePagePoff.style.display = "none";
    homePageOn.style.display = "block";
    
    
});


Anil.addEventListener("click", function(){
    gallery.style.display = "block";
    homePageOn.style.display = "none";
} )