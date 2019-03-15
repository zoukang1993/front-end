import React, {Component} from 'react';

// ES5
function Welcome(props) {
    return <h1>hello, {props.name}</h1>;
}

class Welcomes extends Component {
    render() {
        return (
            <div>
                hello, {this.props.name}
            </div>
        );
    }
}

class MyComponents extends Component {
    render() {
        return(
            <div>
                <Welcome name="zk" />
                <Welcomes name="baidu" />
            </div>
        );
    }
}

export {MyComponents};


// import {MyComponents} from './cases/MyComponents'
//
// export default class App extends Component {
//     render() {
//         return (
//             <MyComponents />
//         );
//     }
// }
