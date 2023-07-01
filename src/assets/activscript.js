

function myFun (){
    // Add active class to the current button (highlight it)
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      
   // delet this line to make multi active
    //current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      })}
};

function myFun2c (){
  const button = document.getElementById("myDIV"); 
  const buttonPressed = (e) => {
    e.target.classList.toggle("active");
  }
  button.addEventListener("click", buttonPressed);
};

function myFun3c (){
  const button = document.getElementById("myDIV2"); 
  console.log(button);
  const buttonPressed = (e) => {
    
    e.target.classList.toggle("active");
    console.log(button.classList);
  }
  button.addEventListener("click", buttonPressed);

  // $(document).ready(function(){
  //   $("myDIV2").click(function(){
  //       $(this).toggleClass("active");
  //   });})}

  
  
  // const button = document.getElementById("myDIV2");
  //   console.log(button);
  //   button.click(function(){
  //     console.log(button.click);
  //     button.toggleClass("active");
  //     console.log(button.classList);
  //   });
  }

function myFun2 (){
  $(document).on('click',function(e) {
      $(this).collapse('hide');
 } );
 
 $("button.navbar-toggle").click(function (e) {
   $("#main-navbar").collapse('hide');
   $("#main-navbar").removeClass("in"); });
 }


//  function disFun (){
//    document.getElementById("my-disabled").disabled = true;
//     console.log("ddd");

  // var header = document.getElementById("my-disabled");
  // var btns = header.getElementsByClassName("my-disabled");
  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function() {
  //     var current = document.getElementsByClassName("my-disabled"); 
  //  // delet this line to make multi active
  //    current[0].disabled = true;
    
 // delet this line to make multi active
  //current[0].className = current[0].className.replace(" active", "");

    

   // console.log("ddd");
  //document.querySelectorAll('[id=my-disabled]').disabled = true;
 
  // var btns = document.getElementsByClassName("my-disabled");
  // for (var i = 0; i < btns.length; i++) {
  // btn[i].disabled = true;
  //}