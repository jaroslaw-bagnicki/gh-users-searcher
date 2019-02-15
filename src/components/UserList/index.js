import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './UserList.styles.module.scss';
import * as ghService from '../../service';

import { User } from '../User';

export class  UserList extends Component {
  static propTypes = {
    isIdle: PropTypes.bool.isRequired,
    searchText: PropTypes.string.isRequired
  }

  state = {
    users: [],
    totalUsers: null,
    currPage: null,
    totalPages: null
  }

  componentDidUpdate(prevProps) {
    if ((this.props.searchText !== prevProps.searchText) && (this.props.searchText.length > 2)) {
      this.fetchUsers();
    }
  }

  render() {
    const { isIdle } = this.props;
    const { users, totalUsers, currPage, totalPages } = this.state;
    
    return isIdle ? (
      <div className={styles.container}>
        Type user name (at least 3 chars)
      </div>)
      : (
        <div className={styles.container}>
          <h3 className={styles.title}>Found {totalUsers} users</h3>
          <ul className={styles.usersList}>
            {users.map(user => (
              <li key={user.id}>
                <User user={user} />
              </li>
            ))}
          </ul>
        </div>
      );
  }

  fetchUsers = async (page = 1) => {
    const res = await ghService.searchUserByName(this.props.searchText, page);
    const users = res.items;
    const totalUsers = res['total_count'];
    const totalPages = Math.ceil( totalUsers / users.lenght);
    this.setState({
      isIdle: false,
      users,
      totalUsers,
      page,
      totalPages
    });
  }
}
