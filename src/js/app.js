require("../app.scss");

/**
  contacts = [
  {
    firstName: string
    lastName: string
    phone: string
    photo: string
    likes: [string, ...]
    birthday: string
    single: bool
  },
  ...]
*/

module.exports.addToLocalStorage = function (contacts) {
  localStorage.contacts = JSON.stringify(contacts);
};

module.exports.getContacts = function () {
  return JSON.parse(localStorage.contacts);
};

module.exports.getContact = function (idx) {
  return getContacts()[idx];
};

module.exports.addContact = function (contact) {
  var contacts = getContacts();
  contacts.push(contact);
  addToLocalStorage(contacts);
  return contact;
};

module.exports.editContact = function (idx, contact) { // idx => int, contact => {...}
  var contacts = getContacts(); // contacts => [{...}...]
  contacts[idx] = contact;
  addToLocalStorage(contacts);
  return contact;
};

module.exports.removeContact = function (idx) {
  var contacts = getContacts();
  var contact = contacts.splice(idx, 1)[0];
  addToLocalStorage(contacts);
  return contact;
};

