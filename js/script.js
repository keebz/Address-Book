$(function(){
    $("#add-address").click(function(){
      $("#new-addresses").append(
                                   '<div class="form-group">' +
                                   '<label for="new-number">Number</label>' +
                                   '<input type="number" class="form-control new-number">' +
                                   '</div>'+
                                  '<div class="form-group">' +
                                  '<label for"new-email">E-mail</label>' +
                                  '<input type="text" class="form-control new-email">' +
                                  '</div>' +
                                  '<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');


    });
  $("form#new-contact").submit(function(event){
    event.preventDefault();


    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: []};

    $(".new-address").each(function(){
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedNumber = $(this).find("input.new-number").val();
      var inputtedEmail = $(this).find("input.new-email").val();

      var newAddress = { phone: inputtedNumber, email: inputtedEmail, street: inputtedStreet, city: inputtedCity, state: inputtedState};
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>")

    $(".contact").last().click(function(){

      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      console.log(newContact);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.phone + ", " + address.email + ", " + address.street + ", " + address.city + ", " + address.state + "</li>");
      });
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("input.new-number").val("");
    $("input.new-email").val("");
  });
});
