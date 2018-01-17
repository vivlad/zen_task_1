import React, { Component } from 'react';
import EntryCreator from './EntryCreator';
import Entries from './Entries';

class Content extends Component {
    constructor(props) {
        super(props);
        //try to get data from local storage, or fill demo data
        let entries = localStorage.getItem('zen_entries');
        if( null == entries ) {
            entries = [
                {
                    text: 'Test data'
                },
                {
                    text: 'Test data 2'
                }
            ]
        } else {
            entries = JSON.parse(entries);
        }
        this.state = {
            entries: entries,
        };
    }

    //waiting for item from EntryCreator
    addEntry = (item) => {
        var entries = this.state.entries;
        entries.push(item);
        this.setState({entries: entries});
        localStorage.setItem('zen_entries', JSON.stringify(entries));
    }

    removeEntry = (id) => {
        var entries = this.state.entries;
        entries.splice(id, 1);
        this.setState({entries: entries});
        localStorage.setItem('zen_entries', JSON.stringify(entries));
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