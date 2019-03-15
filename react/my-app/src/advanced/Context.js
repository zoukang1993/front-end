import React, {Component} from 'react';
import {Button} from 'Button';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component
// Create a context for current theme (with 'light' as the default)

// theme-context
const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },    
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

// default value
const ThemeContext = React.createContext('themes.dark');

// themed-button
function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <button
                    {...props}
                    style={{backgroundColor: theme.background}}
                />
            )}
        </ThemeContext.Consumer>
    );    
}

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            change theme
        </ThemeButton>
    );    
}

export class Contexts extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            theme: themes.light,    
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ?
                    themes.ligth : themes.dark,
            }))    
        };
    }   

    render() {
        // The ThemedButton inside the ThemeProvider
        // uses the theme front state while the one outside uses
        // the default dark theme

        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <Section>
                    <ThemedButton />
                </Section>
            </div>
        );    
    }
}

function ThemeButton(props) {
    // Use a Consumer to read the current theme context
    // React will find the closest theme Provider above and use it value
    // In the example , the current theme is "dark"
    return (
        <ThemeContext.Consumer>
            {theme => <Button {...props} theme={theme} />}
        </ThemeContext.Consumer>
    );
}

//import {Contexts} from './advanced/Context.js';
//
//export default class App extends Component {
//    render() {
//        return (
//            <div>
//                <Contexts />
//            </div>
//        );    
//    }
//}
//
