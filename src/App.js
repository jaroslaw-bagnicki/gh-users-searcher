import React, { Component } from 'react';
import { UserList } from './components/UserList';
import * as ghService from './service';

export class App extends Component {
  state = {
    searchText: '',
    users: [],
    totalUsers: 0
  };

  render() {
    const { users, totalUsers} = this.state;
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
        <UserList users={users} totalUsers={totalUsers} />
      </div>
    );
  }

  handleInputChange = (e) => {
    console.log('handleInputChange()');
    this.setState({
      searchText: e.target.value
    });
  }

  handleFormSubmit = async (e) => {
    console.log('handleFormSubmit()');
    e.preventDefault();
    const res = await ghService.searchUserByName(this.state.searchText);
    const users = res.items;
    const totalUsers = res['total_count'];
    this.setState({
      users,
      totalUsers
    });
  }
}
