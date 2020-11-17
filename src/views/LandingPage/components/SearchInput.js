import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
  }

  onSearchInputChange(evt) {
    const value = evt.target.value;
    this.setState({
      searchText: value
    });
    
    if (this.props.change) {
      this.props.change(value);
    }
  }

  render() {
    return (
      <div>
        <input value={this.state.searchText} placeholder="input to search" onChange={this.onSearchInputChange}></input>
      </div>
    );
  }
}

export default SearchInput;
