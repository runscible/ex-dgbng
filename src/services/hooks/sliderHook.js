import { React, useState,  } from 'react';


function useSliderValues (options) {
    const  [state, setState] = useState(options);
    function updateSliderValue(typeSlider, change) {
        if ( !Number.isInteger(Number.parseInt(change))) return;
        const newValue = state;
        newValue[typeSlider]['mount'] = Number.parseInt(change);
        setState({ ...newValue});  
    }

    function getTotalAmount() {
        return Number.isInteger(Number.parseInt(state['amount'].mount / state['term'].mount)) ?
                     Number(state['amount'].mount / state['term'].mount).toFixed(6) : '0'; 
    }

    return [ state, updateSliderValue, getTotalAmount ];
}


export { useSliderValues };

