import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.styles.module.scss';

export const Pagination = ({ currPage, totalPages, fetchUsers}) => (
  <div className={styles.container}>
    <button 
      onClick={() => fetchUsers(false, currPage - 1)} 
      className={styles.button}
      disabled={currPage === 1}>
      <i className="fas fa-chevron-left"></i>
    </button>
    <span className={styles.pagesInfo}>{currPage} / {totalPages}</span>
    <button 
      onClick={() => fetchUsers(false, currPage + 1)} 
      className={styles.button}
      disabled={currPage === totalPages}>
      <i className="fas fa-chevron-right"></i>
    </button>
  </div>
);

Pagination.propTypes = {
  currPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  fetchUsers: PropTypes.func.isRequired
};
