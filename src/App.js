import './App.css';
import Stopwatch from './Components/Stopwatch/stopwatch.js';

function App() {
  return (
    <div>
      <Stopwatch
        time={0}
        step={1000}
        autostart={true}
      />
    </div>
  );
}

export default App;

