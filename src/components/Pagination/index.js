import React from 'react';
import PropTypes from 'prop-types';

export const Pagination = ({ currPage, totalPages, fetchUsers}) => (
  <div>
    <button onClick={() => fetchUsers(currPage - 1)}><i className="fas fa-chevron-left"></i></button>
    {currPage} / {totalPages}
    <button onClick={() => fetchUsers(currPage + 1)}><i className="fas fa-chevron-right"></i></button>
  </div>
);

Pagination.propTypes = {
  currPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  fetchUsers: PropTypes.func.isRequired
};
