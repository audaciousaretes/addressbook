require("../app.scss");
var contacts = require("./contacts");
var $app = $("#app");

var generateAddressBook = function () {
  $app.append("<button id=\"add-contact\">Add Contact</button>");
  $app.append("<table id=\"address-book\"></table>");
  $("#address-book").append("<thead><th>Name</th><th>Phone</th><th>Likes</th><th>Marital Status</th><th>Actions</th></thead>");

  var contactTmpl = _.template($("#contact-template").html());
  // getting the element with the id of contact-template
  // getting the innerhtml of that element
  // passing the innerhtml to _.template which returns a function
    // this function takes an object that it interpolates the variables
    // for the values

  var contactsArray = contacts.getContacts();

  contactsArray.forEach(function (contact, i) {
    contact.idx = i;
    $("#address-book").append(contactTmpl(contact));
  });
};

generateAddressBook();

var contactFormTmpl = _.template($("#contact-form-template").html());

var setupAddFormListener = function () {
  $app.on("click", "#add-contact", function (e) {
    e.preventDefault();
    $app.append(contactFormTmpl({ action: "Add", data: {} }));
  });
};

setupAddFormListener();

var setupEditFormListener = function () {
  $app.on("click", ".edit", function (e) {
    e.preventDefault();
    $app.append(contactFormTmpl({
       action: "Edit",
       data: contacts.getContact(e.target.dataset.idx)
     }));
  });
};

setupEditFormListener();

var setupCloseFormListener = function () {
  $app.on("click", ".curtain, .close", function(e) {
    e.preventDefault();
    $("#contact-form").remove();
  });
};

setupCloseFormListener();
