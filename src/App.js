import './App.css';
import JsHeader from './components/JsHeader';
import JsFooter from './components/JsFooter';
import JsBody from './components/JsBody';

function App() {
  return (
    <div className="app">
      <JsHeader></JsHeader> 
      <JsBody></JsBody>
      <JsFooter></JsFooter>
    </div>
  );
}

export default App;
