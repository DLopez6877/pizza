////////////////////////////////////////////////////////////////////////////////
//////////////////              Business Logic                //////////////////
////////////////////////////////////////////////////////////////////////////////
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

function Person(name, email){
  this.name = name;
  this.email = email;
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

    var pizza = new Pizza();
    var person = new Person();

    // information button
    $("#information-button").click(function() {
      $("#information-screen").hide();
      $("#size-screen").show();
      var name = $("input#name-entry").val();
      var email = $("input#email-entry").val();
      person.name = name;
      person.email = email;
      console.log(person);
    });

    // size button
    $("#size-button").click(function() {
      $("#size-screen").hide();
      $("#toppings-screen").show();
      var size = $("#size").val();
      pizza.size = size;
      console.log(pizza);
    });

    // toppings button
    $("#toppings-button").click(function() {
      $("#toppings-screen").hide();
      $("#confirmation-screen").show();
    });


    $("form#pizza-form").submit(function(event) {
      event.preventDefault();
    });

  });
});


// var toppings = [];
// $("input:checkbox:checked").each(function(i){
//   toppings[i] = $(this).val();
// });
//

// console.log(size);
// console.log(toppings);
// });
