import React, { Component } from 'react';

class Entries extends Component {
   
        removeEntry = (id) => {
            this.props.removeEntry(id);
        }
    
        render(){
    
            return(
                <ul>
                    {
                        this.props.entries.map((item) => {
                            return(
                                <li key={item.id} style={{color: '#'+Math.random().toString(16).slice(2, 8).toUpperCase()}}>
                                    {item.text}
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