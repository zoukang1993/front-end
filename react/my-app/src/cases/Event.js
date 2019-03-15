import  React, {Component} from 'react';

// class Event extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {isTogglerOn: true};
//         this.handlerClick = this.handlerClick.bind(this);
//     }
//
//     handlerClick() {
//         this.setState(prevState => ({
//             isTogglerOn: !prevState.isTogglerOn
//         }));
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handlerClick}>{this.state.isTogglerOn ? 'on' : 'off'}</button>
//             </div>
//         );
//     }
// }


// class this is bind to itSelf
class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {isTogglerOn: true};
    }

    handlerClick = () => {
        this.setState((prevState) => ({
            isTogglerOn: !prevState.isTogglerOn
        }));

    };

    render() {
        return (
            <div>
                <button onClick={this.handlerClick}>{this.state.isTogglerOn ? 'on' : 'off'}</button>
            </div>
        );
    }
}

export {Event};



//import {Event} from './cases/Event';
//export default class App extends Component {
//    render() {
//        return (
//            <div>
//                <Event />
//            </div>
//        );
//    }
//}

