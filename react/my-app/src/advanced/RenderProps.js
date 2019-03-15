import React, {Component} from 'react';

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {x: 0, y: 0};
    }    

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        });    
    }

    render() {
        return (
            <div style={{height: '100%'}} onMouseMove={this.handleMouseMove}>
                <div>The current mouse position is ({this.state.x}, {this.state.y})</div>
            </div>
        );    
    }
}

class MouseTracker extends Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around !</h1>
                <Mouse />
            </div>
        );    
    }    
}








export {MouseTracker};

// app.js
//import {MouseTracker} from './advanced/RenderProps';
// 
//export default class App extends Component {
//    render() {
//        return (
//            <div>
//                <MouseTracker />
//            </div>
//        );    
//    }
//}

