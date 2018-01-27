import React, {Component} from 'react';

class EntryCreator extends Component {

    constructor (props) {
        super(props);

        this.state = {
            inputVal: '',
            isEmpty: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.createNewEntry = this.createNewEntry.bind(this)
    }

    handleChange(e){
        this.setState(
            {
                inputVal: e.target.value
            }
        )
    }

    createNewEntry(e) {
        e.preventDefault();
        const inputVal = this.state.inputVal;
        if( inputVal !== '' ) {
            this.setState({
                isEmpty: false,
                inputVal: '',
            });
            let item = {
                text: inputVal,
                id: Date.now(),
                completed: false,
            }
            this.props.transferItem(item);
        } else {
            this.setState({isEmpty: true});
        }
    }

    render(){
        return(
            <div className={`input-area ${this.state.isEmpty ? 'empty' : ''}`}>
                <p>Please fill input before saving</p>
                <form onSubmit={this.createNewEntry}>
                    <input 
                        value={this.state.inputVal} 
                        type="text" 
                        className="input-field" 
                        onChange={this.handleChange}
                    />
                    <button className="save-button btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}



export default EntryCreator;