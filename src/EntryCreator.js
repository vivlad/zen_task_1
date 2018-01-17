import React, { Component } from 'react';

class EntryCreator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEmpty: false,
        }
    }

    createNewEntry = () => {
        const inputField = document.getElementsByClassName('input-field')[0];
        const inputVal = inputField.value;
        if( inputVal !== '' ) {
            this.setState({isEmpty: false});
            this.props.addEntry({text: inputVal}); //call parents addEntry
            inputField.value = ''; // clear input
        } else {
            this.setState({isEmpty: true});
        }
        
    }


    render() {
        return(
                <div className={`input-area ${this.state.isEmpty ? 'empty' : ''}`}>
                    <p>Please fill input before saving</p>
                    <input type="text" className="input-field"/>
                    <button className="save-button" onClick={this.createNewEntry}>Save</button>
                </div>
        );
    }
}

export default EntryCreator;