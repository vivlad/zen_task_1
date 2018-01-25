import React, { Component } from 'react';

class EntryCreator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEmpty: false,
            inputVal: '',
        }

        this.createNewEntry = this.createNewEntry.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    createNewEntry(e) {
        e.preventDefault();
        const inputVal = this.state.inputVal;
        if( inputVal !== '' ) {
            this.setState({
                isEmpty: false,
                inputVal: '',
            });
            this.props.addEntry({
                text: inputVal,
                id: Date.now(),
            }); //call parents addEntry
        } else {
            this.setState({isEmpty: true});
        }
        
    }

    handleChange(e){
        this.setState(
            {
                inputVal: e.target.value
            }
        )
    }


    render() {
        return(
                <div className={`input-area ${this.state.isEmpty ? 'empty' : ''}`}>
                    <p>Please fill input before saving</p>
                    <form onSubmit={this.createNewEntry}>
                        <input value={this.state.inputVal} type="text" className="input-field" onChange={this.handleChange}/>
                        <button className="save-button">Save</button>
                    </form>
                </div>
        );
    }
}

export default EntryCreator;