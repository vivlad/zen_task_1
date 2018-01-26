import React, { Component } from 'react';

class Entries extends Component {
 
        removeEntry = (id) => {
            this.props.removeEntry(id);
        }

        toggleStatus = (id) => {
            this.props.toggleStatus(id);
        }
    
        render(){
    
            let entries = this.props.entries;

            if( this.props.filter === 'completed' ) {
                entries = this.props.entries.filter((entry) => { return entry.completed !== false } )
            }

            return(
                <ul>
                    {
                        
                        entries.map((item) => {
                            return(
                                <li key={item.id} style={{color: '#'+Math.random().toString(16).slice(2, 8).toUpperCase()}}>
                                    {item.text}
                                    <input
                                        type="checkbox"
                                        onChange={(e)=>this.toggleStatus(item.id)}
                                        checked={item.completed}
                                    >
                                    </input>
                                    <span className="entrie-remove" onClick={() =>this.removeEntry(item.id)}>x</span>
                                </li>
                            );
                        })
                    }
                </ul>
            );
        }
    }

export default Entries;