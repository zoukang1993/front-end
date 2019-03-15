import React, {Component} from 'react';

export class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);    
        this.state = {hasError: false};
    }    

    componentDidCatch(error, info) {
        // display fallback UI
        this.setState({hasError: true});   
        // you can alse log the error to an error reporting seravice
        logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            // you can render any custom fallback UI
            return <h1>Something went wrong</h1>
        }

        return this.props.children;
    }
}

