import React, { Component } from 'react';
import EntryCreator from './EntryCreator';
import Entries from './Entries';
import EntryFilter from './EntryFilter';

class Content extends Component {
    constructor(props) {
        super(props);
        //try to get data from local storage, or fill demo data
        let entries = localStorage.getItem('zen_todos');
        if( null == entries ) {
            entries = [
                {
                    text: 'Create first homework',
                    id: 1,
                    completed: true
                },
                {
                    text: 'Create second homework',
                    id: 2,
                    completed: false
                }
            ]
        } else {
            entries = JSON.parse(entries);
        }

        this.state = {
            entries: entries,
            filter: 'all'
        };

        this.addEntry = this.addEntry.bind(this);
        this.removeEntry = this.removeEntry.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
        this.showAll = this.showAll.bind(this);
        this.showCompleted = this.showCompleted.bind(this);
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

    toggleStatus = (id) => {
        this.setState(prevState => ({
            entries: prevState.entries.map((entry) => {
                if( entry.id === id ) {
                    entry.completed = entry.completed === true ? false : true; //toggle status
                }
                return entry;
            })
        }), () =>{
            localStorage.setItem('zen_todos', JSON.stringify(this.state.entries));
        });
    }

    showAll = () => {
        this.setState( prevState => ({
            filter: 'all'
        }))
    }

    showCompleted = () => {
        this.setState( prevState => ({
            filter: 'completed'
        }))
    }

    render(){
        return(
            <div className="content-container">
                <h2>just try to write something and press save</h2>
                <EntryCreator
                    addEntry={this.addEntry}
                />
                <EntryFilter
                    showAll={this.showAll}
                    showCompleted={this.showCompleted}
                    filter={this.state.filter}
                />
                <div className="output-area">
                    <Entries
                        toggleStatus={this.toggleStatus}
                        removeEntry={this.removeEntry}
                        entries={this.state.entries}
                        filter={this.state.filter}
                    />
                </div>
            </div>
        );
    }
}

export default Content;