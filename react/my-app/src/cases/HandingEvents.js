import React, {Component} from 'react';

// react events are named using camelCase, rather than lowercase
// with JSX you  pass a function as the event  handler, rather than a string
// you must call preventDefault to  prevent default behavior

class Toggle extends Component {
    constructor (props) {
        super(props);
        this.state = {isToggleOn: true};
        
        // this binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn    
        }));
    }

    // this syntax ensure `this` is bound within handleClick
    // Warning: this is *experimental syntax
   // handleClick = () => {
   //     console.log('click');    
   // }

    deleteRow = (id, e) => {
        console.log(id);
        console.log(e.currentTarget)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>

                <button onClick={(e) => this.deleteRow('id123', e)}>
                    Delete Row
                </button>
            </div>
        );    
    }
}

export {Toggle};

// app.js 
//import {Toggle} from './cases/HandingEvents';
//
//export default class app extends Component {
//    render() {
//        return (
//            <div>
//                <Toggle />
//            </div>
//        );    
//    }    
//}
