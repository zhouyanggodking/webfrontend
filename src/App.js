import { 
  HashRouter as Router
} from 'react-router-dom';

import './App.scss';
import JsHeader from './components/JsHeader';
import JsFooter from './components/JsFooter';
import PageRouter from './Router';

import { UserContext } from './context';

function App() {
  return (
    <UserContext.Provider value="GODKING">
      <Router>
        <JsHeader></JsHeader> 
        <div className="main">
          <PageRouter></PageRouter>
        </div>
        <JsFooter></JsFooter>
      </Router>
    </UserContext.Provider>    
  );
}

export default App;
