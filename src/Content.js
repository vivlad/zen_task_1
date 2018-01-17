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
    addEntry(item){
        var entries = this.state.entries;
        entries.push(item);
        this.setState({entries: entries});
    }

    render(){
        return(
            <div className="content-container">
                <h2>Content</h2>
                <EntryCreator addEntry={this.addEntry.bind(this)}/>
                <div className="output-area">
                    <Entries entries={this.state.entries}/>
                </div>
            </div>
        );
    }
}

class Entries extends Component {
    render(){
        return(
            <ul>
            {this.props.entries.map((item, idx) => (
                <li key={idx}>{item.text}</li>
            ))}
        </ul>
        );
    }
}

export default Content;