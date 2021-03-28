import { React } from 'react';
import './index.css';
import { SliderBox } from '../slider-box';
import { ResultsFooter } from '../results-footer';

function PriceBox ({ options }) {
    return <div className="price-box--container">
                <h2>Simulá tu crédito</h2>
                {
                    options.map((option, index) => <SliderBox key={index} option={option}/>)
                }
                <ResultsFooter />
           </div>
}

export { PriceBox }