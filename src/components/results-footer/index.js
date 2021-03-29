import { React } from 'react';
import './index.css';

function ResultsFooter({ total }) {
    return <div className="results-footer--container">
                <div className="results-footer--justify-info">
                    <h4>CUOTA FIJA POR MES </h4>
                    <h3>$ { total().toLocaleString('ar-EG') } </h3>
                </div>
                <div className="results-footer--justify-footer">
                    <button className="results-footer--button-primary" >OBTENÉ CRÉDITO</button>
                    <button className="results-footer--button-secondary">VER DETALLE EN CUOTAS</button>
                </div>
           </div>;
}

export { ResultsFooter };