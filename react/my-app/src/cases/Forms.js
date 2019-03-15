import React, {Component} from 'react';

export class Forms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            textArea: '',
            select: '',
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleTextArea(event) {
        this.setState({textArea: event.target.value});    
    }
    
    handleSelect(event) {
        this.setState({select: event.target.value});    
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const formVal = {
            value: this.state.value,
            textArea: this.state.textArea,
            select: this.state.select,
            isGoing: this.state.isGoing,
            numberOfGuests: this.state.numberOfGuests
        };

        console.log(formVal);

        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <label htmlFor="textarea">Essay :<label>
                <textarea value={this.state.textArea} onChange={this.handleTextArea} id="textarea"></textarea>
                

                <div>
                    <label>
                        Pick you favorite flavor:
                        <select value={this.state.select} onChange={this.handleSelect}>
                            <option value="grapfruit">grapfruit</option>
                            <option value="lime">lime</option>
                            <option value="cocount">cocount</option>
                            <option value="mango">mango</option>
                            <option value="other">other</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>
                        Is goning:
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Number of guests:
                        <input
                            name="numberOfGuests"
                            type="number"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </div>
                
                <input type="submit" value="submit" />
            </form>
        );    
    }
}


//import {Forms} from './cases/Forms';
//
//export default class app extends Component {
//    render() {
//        return (
//            <div>
//                <Forms />
//            </div>
//        );    
//    }    
//}


