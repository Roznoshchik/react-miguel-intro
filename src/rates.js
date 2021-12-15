import React from 'react';


export default function Rates() {

    const[symbols, setSymbols] = React.useState(
        'USD,AUD,CAD'
    )
    const currencies = {"1": 'USD,AUD,CAD', "2": 'GBP,PLN,MXN'}
    let refreshed = false

    const [rates, setRates] = React.useState({
        'GBP': 1.22,
        'EUR': 0.90,
    })
    const refreshRates = () =>  {
        console.log(refreshed); 
        refreshed ? 
            setSymbols(currencies["1"]) 
        : 
            setSymbols(currencies["2"])
        refreshed = !refreshed;
        console.log(refreshed); 
    }

    React.useEffect(() => {
        const endpoint = 'http://api.exchangeratesapi.io/v1/latest?access_key=2254f3a7c3cab565f530b7e24e0a57e8&symbols='+ symbols
        fetch(endpoint).then(res => res.json()).then(data =>{
            setRates(data.rates);
        });
    
    }, [symbols]);

    return (
        <div>
            <h2>EUR Exchange Rates</h2>
            <button onClick={refreshRates}>Refresh rates</button>
            <ul>
                {Object.keys(rates).map(currency => <li key={currency}>{currency}: {rates[currency]}</li>)}
            </ul>
        </div>
    )
}