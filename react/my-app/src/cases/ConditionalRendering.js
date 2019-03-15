import React, {Component} from 'react';

function UserGreeting(props) {
    return <h1>Welcome back !</h1>;    
}

function GuestGreeting(props) {
    return <h1>Please sign up !</h1>    
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;    
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return <button onClick={props.onClick}>login</button>;    
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>logout</button>;    
}

class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    // arrow function can bind this for scope , but is *experimental
    handleLoginClick = () => {
        this.setState(()=> ({
            isLoggedIn: true    
        }));
    }

    handleLogoutClick = () => {
       this.setState(() => ({
            isLoggedIn: false
        })); 
    }

    render() {
        let button = '';

        if (this.state.isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />    
        }

        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
                {button}
            </div>
        );
    }
}

export {ConditionalRendering};



//import {ConditionalRendering} from './cases/ConditionalRendering';

//export default class app extends Component {
//    render() {
//        return (
//            <div>
//                <ConditionalRendering />
//            </div>
//        );    
//    }    
//}
