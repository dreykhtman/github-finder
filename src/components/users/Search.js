import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ showAlert }) => {
  const githubContext = useContext(GithubContext);
  const { users, clearUsers } = githubContext;
  const [text, setText] = useState('');
  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '' || text.replace(/\s/g, '').length === 0) {
      showAlert('Please enter something.', 'light');
      setText('');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button
          type="button"
          className="btn btn-light btn-block"
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  showAlert: PropTypes.func.isRequired,
};

export default Search;
