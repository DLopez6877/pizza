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
  // order button
  $("#order-button").click(function() {
    $("#order-screen").hide();
    $("#information-screen").show();
    $("#about-screen").hide();
    $("#pizza-screen").show();
  });

  // information button
  $("#information-button").click(function() {
    $("#information-screen").hide();
    $("#size-screen").show();
  });

  // size button
  $("#size-button").click(function() {
    $("#size-screen").hide();
    $("#toppings-screen").show();
  });

  // toppings button
  $("#toppings-button").click(function() {
    $("#toppings-screen").hide();
    $("#confirmation-screen").show();
  });


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
