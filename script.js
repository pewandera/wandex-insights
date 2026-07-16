function scrollToContact(){

document.getElementById("contact").scrollIntoView({

behavior:"smooth"

});

}

function sendMessage(event){

event.preventDefault();

document.getElementById("successMessage").innerHTML="Thank you! Your message has been received.";

}
