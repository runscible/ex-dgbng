import { React, useState } from 'react';
import './index.css';
import { SliderBox } from '../slider-box';
import { ResultsFooter } from '../results-footer';
import { useSliderValues } from '../../services';

function PriceBox ({ options }) {
    
    const [state, setState, getTotalAmount] = useSliderValues(options);
    
    return <div className="price-box--container">
                <div className="price-box--framework">
                        <h1 className="price-box--title">Simulá tu crédito</h1>
                            {
                                Object.keys(state)
                                    .map((typeSlider, index) => 
                                        <SliderBox
                                            typeSlider={typeSlider}
                                            key={typeSlider}
                                            onChange={setState}
                                            option={state[typeSlider]}/>)
                            }
                            
                        <ResultsFooter total={getTotalAmount}/>
                    </div>
            </div>
}

export { PriceBox }