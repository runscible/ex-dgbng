import { React } from 'react';
import './index.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function SliderBox ({ option }) {
    return <div className="slider-box--container">
               <div className="slider-box--justify-info">   
                    <span> { option.title } </span>
                    <input className="slider-box--input" 
                           value={option.mount}/>
               </div> 
               <div className="slider-box--justify-selector"> 
                    <Slider/>
               </div>
               <div className="slider-box--justify-info"> 
                    <span> { `${option.type === 'amount'? '$': '' } 
                              ${option.firstLimit}` } </span>
                    <span> { `${option.type === 'amount'? '$': '' } 
                              ${option.lastLimit}` } </span>
               </div> 
           </div>
}

export { SliderBox }