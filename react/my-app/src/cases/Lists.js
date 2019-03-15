import React, {Component} from 'react';

function ListItem(props) {
    return <li>{props.value}</li>    
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map(
        number=> <ListItem key={number.toString()}
            value={number}
        />
    ); 

    return (
        <ul>{listItems}</ul>
    );
}

export class Lists extends Component{
    constructor(props) {
        super(props);
    }    
    
    render() {
        const numberLists = [1, 2 ,3 ,4 ,5];
        return (
            <div>
                <NumberList numbers={numberLists}/>
            </div>
        );    
     }}

