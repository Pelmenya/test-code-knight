import './App.css';
import AnalogClock from './components/AnalogClock/AnalogClock';

function App() {

  return (
    <section className="clock container">
      <div className="clock__container grid">
        <div className="clock__content grid">
          <AnalogClock />
        </div>
      </div>
    </section>
  );
}

export default App;
