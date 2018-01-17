import React, { Component } from 'react';
import EntryCreator from './EntryCreator';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [
                {
                    text: 'Test data'
                },
                {
                    text: 'Test data 2'
                }
            ],
        };
    }

    //waiting for item from EntryCreator
    addEntry = (item) => {
        var entries = this.state.entries;
        entries.push(item);
        this.setState({entries: entries});
    }

    removeEntry = (id) => {
        var entries = this.state.entries;
        entries.splice(id, 1);
        this.setState({entries: entries});
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

class Entries extends Component {

    removeEntry = (e) => {
        this.props.removeEntry(e.target.dataset.itemid);
    }

    render(){

        return(
            <ul>
                {
                    this.props.entries.map((item, idx) => {
                        return(
                            <li key={idx}>
                                {item.text}
                                <span data-itemid={idx} className="entrie-remove" onClick={this.removeEntry}>x</span>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default Content;