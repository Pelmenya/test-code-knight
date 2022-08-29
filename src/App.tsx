import './App.css';
import { AnalogClock } from './components/AnalogClock/AnalogClock';
import { HalfCircle } from './components/HalfCircle/HalfCircle';

function App() {

  return (
    <section className="clock container">
      <div className="clock__container grid">
        <div className="clock__content grid">
          <AnalogClock />
          <HalfCircle />
        </div>
      </div>
    </section>
  );
}

export default App;
