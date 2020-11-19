import React, { Component } from 'react';

import Fund from './components/Fund';
import Security from './components/Security';
import withLoggerHOC from './components/withLoggerHOC';
import Logger from './components/Logger';

const FundWithLogger = withLoggerHOC(Fund, Logger.logToServer);
const SecurityWithLogger = withLoggerHOC(Security, Logger.log);

class HOC extends Component {
  render() {
    return (
      <div>
        HOC demo page, <br/>
        Use HOCs for cross-cutting concerns. For logging in this demo<br/>
        <hr/>
        <FundWithLogger name="GODKINGFund"></FundWithLogger>
        <SecurityWithLogger name="ADVS" price="194.23$"></SecurityWithLogger>
      </div>
    );
  }
}

export default HOC;
