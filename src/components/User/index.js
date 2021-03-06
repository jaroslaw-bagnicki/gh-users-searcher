import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.styles.module.scss';

export const User = ({user: {login, avatar_url, html_url}}) => (
  <div className={styles.container}>
    <img src={avatar_url} className={styles.avatar}/>
    <a href={html_url} target="_blank" rel="noopener noreferrer" className={styles.link}>{login}</a>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired
  })
};
