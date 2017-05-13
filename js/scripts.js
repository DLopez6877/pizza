////////////////////////////////////////////////////////////////////////////////
//////////////////              Business Logic                //////////////////
////////////////////////////////////////////////////////////////////////////////
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

function Person(name, email, address){
  this.name = name;
  this.email = email;
  this.address = address;
}

Pizza.prototype.calculatePrice = function(size) {
  var basePrice = 8;
  if(this.size === "Small") {
    basePrice += (this.toppings.length * .5 );
    return basePrice;
  }
  if(this.size === "Medium") {
    basePrice += ((this.toppings.length * .5) + 2);
    return basePrice;
  }
  if(this.size === "Large") {
    basePrice += ((this.toppings.length * .5) + 4);
    return basePrice;
  }
};


////////////////////////////////////////////////////////////////////////////////
//////////////////            User Interface Logic            //////////////////
////////////////////////////////////////////////////////////////////////////////
$(function() {
  // order button
  $("#order-button").click(function() {
    $("#order-screen").hide();
    $("#information-screen").toggle("slide", 1100);

    var pizza = new Pizza();
    var person = new Person();

    // information button
    $("#information-button").click(function() {
      $("#information-screen").hide();
      $("#size-screen").toggle("slide", 1100);
      $("#about-screen").toggle("slide", 1100);
      $("#pizza-screen").toggle("slide", 1100);
      var name = $("input#name-entry").val();
      var email = $("input#email-entry").val();
      var address = $("input#address-entry").val();
      person.name = name;
      person.email = email;
      person.address = address;
      $(".name-display").text(person.name);
      $("#email-display").text(person.email);
      $("#address-display").text(person.address);
    });

    // size button
    $("#size-button").click(function() {
      $("#size-screen").hide();
      $("#toppings-screen").toggle("slide", 1100);
      var size = $("input:radio:checked").val();
      pizza.size = size;
      $("#size-display").text(pizza.size);
    });

    // toppings button
    $("#toppings-button").click(function() {
      $("#toppings-screen").hide();
      $("#confirmation-screen").toggle("slide", 1100);
      var toppings = [];
      $("input:checkbox:checked").each(function(i){
        toppings[i] = $(this).val();
      });
      pizza.toppings = toppings;
      pizza.toppings.forEach(function(topping) {
        $("#toppings-display").append("<li>" + topping + "</li>");
      });

      var cost = pizza.calculatePrice(pizza.size);
      $("#cost-display").text(cost);

      // $("#pep-box").change(function(){
      //     if($(this).is(":checked")){
      //         $("#pep-pic").toggle("slide", 1100);
      //     } else {
      //         $("#pep-pic").hide();
      //     }
      // });

    });

    $("form#pizza-form").submit(function(event) {
      event.preventDefault();
      $(".row").hide();
      $("#purchase-screen").toggle("slide", 1100);
    });

    $("input#small-radio").click(function () {
        $('#pizza-pic').removeClass("pizza-pic-medium");
        $('#pizza-pic').removeClass("pizza-pic-large");
        // $('#pizza-pic').addClass("pizza-pic-small");
    });

    $("input#medium-radio").click(function () {
        $('#pizza-pic').removeClass("pizza-pic-large");
        $('#pizza-pic').addClass("pizza-pic-medium");
    });

    $("input#large-radio").click(function () {
        $('#pizza-pic').addClass("pizza-pic-large");
    });

  });
});
