import React from 'react';
import PropTypes from 'prop-types';

export const User = ({user: {login, avatar_url, url}}) => (
  <div>
    <img src={avatar_url} />
    <a href={url} target="_blank" rel="noopener noreferrer">{login}</a>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};
