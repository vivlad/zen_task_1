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
                                    <span className="item-text">{item.text}</span>
                                    <span className="btn-group item-controls">
                                        <button 
                                            type="button" 
                                            onClick={(e)=>this.toggleStatus(item.id)}
                                            className={`btn ${item.completed ? 'btn-success' : 'btn-warning'}`}
                                        >
                                        <i className={`fa ${item.completed ? 'fa-calendar-check-o' : 'fa-calendar-times-o'}`}></i>
                                        </button>
                                        <button 
                                            type="button" 
                                            className="btn btn-danger"
                                            onClick={() =>this.removeEntry(item.id)}
                                        >
                                        <i className="fa fa-trash"></i>
                                        </button>
                                    </span>
                                </li>
                            );
                        })
                    }
                </ul>
            );
        }
    }

export default Entries;