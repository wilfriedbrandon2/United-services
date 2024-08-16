/*================responsive navigation button designed by twb================ */
const header = document.querySelector(".main-header");
const toggleBtn = document.querySelector(".menu-icon");
toggleBtn.addEventListener("click", (e)=>{
    header.classList.toggle("active");

});
/*================responsive preloader  designed by twb================ */
  $(window).on('load',function(){
     $(".loader").fadeOut(1000);
     $(".content").fadeIn(1000);
});
/*==============================video loader coding by twb===================================== */
//get elements from the DOM
const modalBtn = document.querySelector('.yt-modal-btn');
const modal = document.querySelector('.modal-bg');

//add click event to the button
modalBtn.addEventListener('click', () =>{
  modal.innerHTML = `
  <div class="modal">
     <iframe
         src="video/affaires.mp4">
      </iframe>
  </div>
  `;
  //show the modal
  modal.style.display = "flex";
  //smoooth opacity transition
  setTimeout(() => {
    modal.style.opacity = "1";
  },50);
});

//add click event to modal bg
modal.addEventListener('click', () =>{
   modal.innerHTML = '';
   //smooth opacity transition
   modal.style.opacity = "0";
   setTimeout(() =>{
     modal.style.display = "none";
   },450);
});

/*=============================questions faqs js designed by twb=============================================== */
const faqs = document.querySelectorAll(".faq");


faqs.forEach(faq => {
  faq.addEventListener("click", ()=> {
    faq.classList.toggle("active");
  });
});

/*==============================Email contact form js designed by twb====================================== */

let form = document.forms['contact-form'];
let error = document.querySelector(".error");
let success = document.querySelector(".success");
let submitButton = document.querySelector("form button");
let pleasewaitMessage = document.querySelector(".please-wait");

/*===============twb writing functions to disable the submit button when we send the message, and also display the a "please wait message" */
function disableButton(){
  submitButton.disabled = true;
  submitButton.classList.add("disabled");
  pleasewaitMessage.innerHTML = "Please wait......"
}

/*=========function that enables back the submit button & clear the "please wait msg"============== */
function disableButton(){
  submitButton.disabled = false;
  submitButton.classList.remove("disabled");
  pleasewaitMessage.innerHTML = ""
}

/*========================================Error function==================================================== */
function clearError(){
  error.innerHTML = "";
  error.style.display="";
}

/*=================================== function that clears all form inouts after submission================================ */
function clearFor(){
  form.firstname.value = "";
  form.email.value = "";
  form.message.value = "";
  pleasewaitMessage.innerHTML = "";


  /*==================setting time out for the success msg to disappear==================== */
  setTimeout(function(){
    success.style.display = "";
    success.innerHTML = "";
    submitButton.disabled = false;
    submitButton.classList.remove("disabled");
  }, 5000);
}
/*======creating an onsubmit event listener to catch the form when button is pressed
  ================= passing a parameter to the event listener to prevent the from from sending the values to the server======== */

  form.addEventListener("submit", function(e){
    e.preventDefault(); /*=========stop the from submitting to the server============== */
    
    /*=============creating an object to hold the name and values, & later send to the php file=================*/
    let formdata = {
      "name": this.firstname.value,
      "email": this.email.value,
      "message": this.message.value
    }
    /*========checking for empty fields and looping over====================== */
    for(let [key, value] of Object.entries(formdata)){
      if(value ===""){
        /*=================displaying and error msg if a field is empty========================= */
        error.style.display = "block";
        error.innerHTML = "All fields are required";
        return false;
      }
    }
  });