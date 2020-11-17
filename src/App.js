import './App.css';
import JsHeader from './components/JsHeader';
import JsFooter from './components/JsFooter';
import LandingPage from './views/LandingPage';

function App() {
  return (
    <div className="app">
      <JsHeader></JsHeader> 
      <LandingPage></LandingPage>
      <JsFooter></JsFooter>
    </div>
  );
}

export default App;
