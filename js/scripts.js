////////////////////////////////////////////////////////////////////////////////
//////////////////              Business Logic                //////////////////
////////////////////////////////////////////////////////////////////////////////
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}




////////////////////////////////////////////////////////////////////////////////
//////////////////            User Interface Logic            //////////////////
////////////////////////////////////////////////////////////////////////////////
$(function() {
  $("form#pizza-form").submit(function(event) {
    event.preventDefault();

    var name = $("input#name-entry").val();
    var email = $("input#email-entry").val();
    var size = $("#size").val();
    var toppings = [];

    $("input:checkbox:checked").each(function(i){
      toppings[i] = $(this).val();
    });

    console.log(name);
    console.log(email);
    console.log(size);
    console.log(toppings);
  });


});
