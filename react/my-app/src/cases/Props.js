import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {data: new Date()};
    }

    componentDidMount() {
        this.timeId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    tick() {
        this.setState({
            data: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>hellow, world</h1>
                <h2>{this.state.data.toLocaleTimeString()} .</h2>
            </div>
        );
    }
}

export {Clock};


// import {Clock} from './cases/Props';
//
// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Clock />
//             </div>
//         );
//     }
// }
