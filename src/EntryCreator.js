import React, { Component } from 'react';

class EntryCreator extends Component {

    createNewEntry = () => {
        const inputField = document.getElementsByClassName('input-field')[0];
        const inputVal = inputField.value;
        if( inputVal !== '' ) {
            inputField.parentNode.classList.remove('empty');
            this.props.addEntry({text: inputVal}); //call parents addEntry
            inputField.value = ''; // clear input
        } else {
            inputField.parentNode.classList.add('empty');
            console.log( 'Field is empty' );
        }
        
    }


    render() {
        return(
                <div className="input-area">
                    <p>Please fill input before saving</p>
                    <input type="text" className="input-field"/>
                    <button className="save-button" onClick={this.createNewEntry}>Save</button>
                </div>
        );
    }
}

export default EntryCreator;