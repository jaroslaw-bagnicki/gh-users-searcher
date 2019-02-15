import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './UserList.styles.module.scss';

import { User } from '../User';

export class  UserList extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    totalUsers: PropTypes.number.isRequired,
    isIdle: PropTypes.bool.isRequired
  }

  render() {
    const { users, totalUsers, isIdle } = this.props;
    return isIdle ? (
      <div className={styles.container}>
        Type searched name and hit enter ...
      </div>
    )
      :
      (
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
}
