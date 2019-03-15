import React, {Component} from 'react';

// Creating Refs
// React.createRef()

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }   

    render() {
        return <div ref={this.myRef} />    
    }
}

// Accessing Refs
// const node = this.myRef.current;

// example
// Adding a Ref to a Dom Element
// this code uses a ref to store a reference to a Dom node
class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput Dom Element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }    

    focusTextInput() {
        // explicitly focus the text input using the raw DOM API
        // Note : we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }

    render() {
        return(
            <div>
                <input type="text" ref={this.textInput} />
                <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
            </div>
        );    
    }
}

// Adding a Ref to a Class Component
class AutoFocusTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }    

    componentDidMount() {
        this.textInput.current.focusTextInput();    
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput}>
        );    
    }
}

