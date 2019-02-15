import React, { Component } from 'react';
import { UserList } from './components/UserList';

export class App extends Component {
  state = {
    searchText: '',
    users: []
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="search">Search by user name</label>
          <input
            type="search"
            id="search"
            onChange={this.handleInputChange}
            value={this.state.searchText} />
        </form>
        <UserList users={this.state.users} />
      </div>
    );
  }

  handleInputChange = (e) => {
    console.log('handleInputChange()');
    this.setState({
      searchText: e.target.value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('handleFormSubmit()');
  }
}
