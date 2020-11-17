import { Component } from 'react';
import './index.scss';

import Result from './components/Result';
import SearchInput from './components/SearchInput';

import ErrorBoundary from 'components/ErrorBoundary';
import ComponentCouldGoWrong from './components/ComponentCouldGoWrong';

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
      <>
        <SearchInput change={this.onSearchInputChange}></SearchInput>
        <Result></Result>
        {
          // 效果并不能在开发模式中看出来，需要打包成生产代码。
        }
        <ErrorBoundary>
          <ComponentCouldGoWrong></ComponentCouldGoWrong>
        </ErrorBoundary>
      </>
    )
  }
}