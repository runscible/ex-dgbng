import './App.css';
import { PriceBox } from '../src/components/price-box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <PriceBox options={[ {title: 'Monto total', mount: 0 , firstLimit: 5000, lastLimit:50000, type: 'amount' },
                             {title: 'Plazo', mount: 16 , firstLimit: 3, lastLimit:24, type: 'date' }
                          ]}/>
    </div>
  );
}

export default App;
