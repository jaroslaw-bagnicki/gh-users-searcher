import React, { Component } from 'react';
import { UserList } from './components/UserList';
import styles from './App.styles.module.scss';

export class App extends Component {
  state = {
    isIdle: true,
    searchText: ''
  };

  render() {
    const { isIdle, searchText } = this.state;
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>GitHub users searcher</h2>
          <div className={styles.searchInputBox}>
            <label className={styles.searchLabel}>
              <i className="fas fa-search"></i>
            </label>
            <input
              type="text"
              id="search"
              onChange={this.handleInputChange}
              value={this.state.searchText}
              className={styles.searchInput} />
            <button 
              type="reset" 
              onClick={this.handleInputReset} 
              className={styles.resetBtn} 
              disabled={(searchText === '')}
            ><i className="fas fa-times"></i></button>
          </div>
        </header>

        <UserList isIdle={isIdle} searchText={searchText}/>
      </div>
    );
  }

  handleInputChange = (e) => {
    const inputVal = e.target.value;
    this.setState({
      searchText: inputVal,
      isIdle: false
    });
  }

  handleInputReset = () => {
    this.setState({
      searchText: '',
      isIdle: true
    });
  }
}
