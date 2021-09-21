
import './App.css';
import {speak} from './speech';
import wao from 'web_accessible_output';

function App() {
	speak()
  return (
    <div className="App">
	<p>Hello world</p>
	<button onClick={speak}>Click to Speak</button> //should speak 
	wao.speak('Hello world');

    </div>
  );
}

export default App;
