import React, {Component} from 'react';

// lifting state up

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <div>the water is boiling .</div>    
    }

    return <div>the water is not boiling .</div>
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;    
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;    
}

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);    
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature is {scaleNames[scale]}</legend>
                    <input
                        value={temperature}
                        onChange={this.handleChange}
                    />
                </fieldset>
            </div>
        );        
    }
}

export class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {temperature : '', scale: 'c'};
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }    
    
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});    
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );       
    }
}


//import {Calculator} from './cases/LiftingStateUp';
//
//export default class App extends Component {
//    render() {
//        return (
//            <div>
//                <Calculator />
//            </div>
//        );    
//    }
//}
//
