import { React } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './index.css';

function SliderBox ({option, typeSlider, onChange}) {
    return <div className="slider-box--container">
               <div className="slider-box--justify-info">   
                    <span> { option.title } </span>
                    <input className="slider-box--input" 
                           onChange={ event => onChange(typeSlider, event.target.value)}
                           value={option.mount}/>
               </div> 
               <div  className="slider-box--justify-selector"> 
                    <Slider
                           onChange={ change => onChange(typeSlider, change)}   
                           value={option.mount}
                           min={option.firstLimit}
                           max={option.lastLimit}/>
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