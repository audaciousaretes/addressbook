require("../app.scss");
var AddressBook = require("./address-book.jsx");

var App = React.createClass({
  getInitialState() {
    return {
      contacts: [{
        name: "Jenny",
        phoneNumber: "867-5309"
      }]
    };
  },
  componentDidMount() {
    if (localStorage.contacts) {
      this.setState({
        contacts: JSON.parse(localStorage.contacts)
      });
    }
  },
  render() {
    return (
    <div>
      <h1>Address Book</h1>
      <AddressBook contacts={this.state.contacts}  />
    </div>
    );
  }
});

React.render(<App />, document.getElementById("app"));
