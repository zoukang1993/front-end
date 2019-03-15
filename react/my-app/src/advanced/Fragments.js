import React, {Component} from 'react';

// Fragments


export class Tables extends Component {
    constructor(props) {
        super(props);
    }    

    render() {
        return (
            <table>
                <tr>
                    <Columns />
                </tr>
            </table> 
        );    
    }
}

class Columns extends Component {
    render() {
        <React.Fragment>
            <td>names</td>
            <td>age</td>
        </React.Fragment>    
    }    
}

// a doesn't support grammar is use '<></>' instead <React.Fragment></React.Fragment>,
// usually don't use it 

// keyed Fragments
function Glossary(props) {
    render() {
        return (
            <dl>
                {props.items.map(item => {
                    <React.Fragment key={item.id}>
                        <dt>{item.term}</dt>
                        <dd>{item.description}</dd>
                    <React.Fragment>    
                })}
            </dl>
        );    
    };    
}
