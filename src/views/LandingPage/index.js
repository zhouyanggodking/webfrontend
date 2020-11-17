import { Component } from 'react';
import './index.scss';

import Result from './components/Result';
import SearchInput from './components/SearchInput';

export default class JsBody extends Component {
  constructor(props) {
    super(props);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
  }

  onSearchInputChange(searchText) {
    console.log(searchText)
  }

  render() {
    return (
      <main className="main">
        <SearchInput change={this.onSearchInputChange}></SearchInput>
        <Result></Result>
      </main>
    )
  }
}