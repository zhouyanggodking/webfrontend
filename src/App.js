import { 
  HashRouter as Router
} from 'react-router-dom';

import './App.scss';
import JsHeader from './components/JsHeader';
import JsFooter from './components/JsFooter';
import PageRouter from './Router';

function App() {
  return (
    <Router>
      <JsHeader></JsHeader> 
      <div className="main">
        <PageRouter></PageRouter>
      </div>
      <JsFooter></JsFooter>
    </Router>
  );
}

export default App;
