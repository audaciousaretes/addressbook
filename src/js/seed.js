var seedContacts = function () {

  if (localStorage.contacts) {

    localStorage.contacts = JSON.stringify([{
      firstName: "Chase",
      lastName: "Adams",
      phone: "867-5309",
      likes: ["dogs", "computing", "scooby snacks"],
      birthday: "Feb 01, 2000",
      single: false
    }, {
      firstName: "Scooby",
      lastName: "Doo",
      phone: "867-5319",
      likes: ["dogs", "scooby snacks"],
      birthday: "Feb 01, 1970",
      single: true
    }]);
  }
};

seedContacts();

