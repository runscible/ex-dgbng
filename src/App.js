import './App.css';
import { PriceBox } from '../src/components/price-box';

const defaultValues =  {
                          amount: {title: 'Monto total', mount: 0 , firstLimit: 5000, lastLimit:50000, type: 'amount' },
                          term: {title: 'Plazo', mount: 0 , firstLimit: 3, lastLimit:24, type: 'date' }
                        }
                      

function App() {
  return (<div className="App">
            <header className="App-header">
            </header>
              <PriceBox options={defaultValues} />
          </div>
      );
}

export default App;
