import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './UserList.styles.module.scss';
import * as ghService from '../../service';

import { User } from '../User';
import { Pagination } from '../Pagination';

export class  UserList extends Component {
  static propTypes = {
    isIdle: PropTypes.bool.isRequired,
    searchText: PropTypes.string.isRequired
  }

  state = {
    isLoading: false,
    users: [],
    totalUsers: null,
    currPage: null,
    totalPages: null
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchText !== prevProps.searchText) {
      this.fetchUsers();
    }
  }

  render() {
    const { isIdle } = this.props;
    const { isLoading, users, totalUsers } = this.state;
    
    return isIdle ? 
      <div className={styles.container}>Type user name ...</div>
      : 
      <div className={styles.container}>
        <h3 className={styles.title}>
          Found {totalUsers} users
        </h3>
        {this.renderPagination()}
        {isLoading ?
          <span className={styles.loader}>
            <i className="fas fa-circle-notch fa-spin"></i>
          </span>
          :
          <ul className={styles.usersList}>
            {users.map(user => (
              <li key={user.id}>
                <User user={user} />
              </li>
            ))}
          </ul>
        }
        {this.renderPagination()}
      </div>
    ;
  }

  renderPagination = () => {
    const { currPage, totalPages } = this.state;
    if (totalPages > 1) 
      return (<Pagination currPage={currPage} totalPages={totalPages} fetchUsers={this.fetchUsers} />);
  }

  fetchUsers = async (debouced = true, page = 1) => {
    try {
      this.setState({isLoading: true});
      const res = debouced ? 
        await ghService.debouncedSearchUser(this.props.searchText, page) : 
        await ghService.searchUser(this.props.searchText, page);
      if (res === undefined) throw Error('API calls limit reached.');
      const users = res.items;
      const totalUsers = res['total_count'];
      const totalPages = Math.ceil( totalUsers / users.length);
      this.setState({
        isIdle: false,
        isLoading: false,
        users,
        totalUsers,
        currPage: page,
        totalPages
      });
    } catch(err) {
      console.error(err);
    }
  } 
}
