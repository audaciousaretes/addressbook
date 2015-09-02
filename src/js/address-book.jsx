var Person = React.createClass({
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.phoneNumber}</td>
      </tr>
    );
  }
});

var AddressBook = React.createClass({
  getDefaultProps() {
    return {
      contacts: []
    }
  },

  render() {
    var peopleList = this.props.contacts.map((person) => {
      return (
        <Person {...person} />
      );
    });

    return (
      <table>
        {peopleList}
      </table>
    );
  }
});

module.exports = AddressBook;
