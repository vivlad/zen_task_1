import React, { Component } from 'react';
import EntryCreator from './EntryCreator';
import Entries from './Entries';

class Content extends Component {
    constructor(props) {
        super(props);
        //try to get data from local storage, or fill demo data
        let entries = localStorage.getItem('zen_todos');
        if( null == entries ) {
            entries = [
                {
                    text: 'Test data',
                    id: 2
                },
                {
                    text: 'Test data 2',
                    id: 1
                }
            ]
        } else {
            entries = JSON.parse(entries);
        }

        this.state = {
            entries: entries,
        };

        this.addEntry = this.addEntry.bind(this);
        this.removeEntry = this.removeEntry.bind(this);
    }

    //waiting for item from EntryCreator
    addEntry = (item) => {
        this.setState(prevState => ({
            entries: [...prevState.entries, item]
        }), () => {
            localStorage.setItem('zen_todos', JSON.stringify(this.state.entries));
        });
    }

    removeEntry = (id) => {
        this.setState(prevState => ({
            entries: prevState.entries.filter(entry => entry.id !== id)
        }), () =>{
            localStorage.setItem('zen_todos', JSON.stringify(this.state.entries));
        });
    }

    render(){
        return(
            <div className="content-container">
                <h2>just try to write something and press save</h2>
                <EntryCreator
                    addEntry={this.addEntry.bind(this)}
                />
                <div className="output-area">
                    <Entries
                        removeEntry={this.removeEntry.bind(this)}
                        entries={this.state.entries}
                    />
                </div>
            </div>
        );
    }
}

export default Content;