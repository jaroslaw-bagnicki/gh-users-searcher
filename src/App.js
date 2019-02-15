import React, { Component } from 'react';
import { UserList } from './components/UserList';
import * as ghService from './service';
import styles from './App.styles.module.scss';

export class App extends Component {
  state = {
    searchText: '',
    users: [],
    totalUsers: 0
  };

  render() {
    const { users, totalUsers} = this.state;
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>GitHub users searcher</h2>
          <form onSubmit={this.handleFormSubmit} className={styles.form}>
            <label htmlFor="search" className={styles.searchLabel}><i className="fas fa-search"></i></label>
            <input
              type="text"
              id="search"
              onChange={this.handleInputChange}
              value={this.state.searchText}
              className={styles.searchInput} />
          </form>
        </header>

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
