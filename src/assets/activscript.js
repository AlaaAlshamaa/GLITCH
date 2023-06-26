

function myFun (){
    // Add active class to the current button (highlight it)
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
   // delet this line to make multi active
     current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      })}
};

function myFun2 (){
  $(document).on('click',function(e) {
      $(this).collapse('hide');
 } );
 
 $("button.navbar-toggle").click(function (e) {
   $("#main-navbar").collapse('hide');
   $("#main-navbar").removeClass("in"); });
 }