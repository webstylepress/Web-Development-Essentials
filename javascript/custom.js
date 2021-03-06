$('iframe').hide();
$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();
    let getURL = $('.url').val();
    let newURL = getURL.replace("watch?v=", "embed/");
    $('iframe').attr( "src", newURL ).show();
  });
});
