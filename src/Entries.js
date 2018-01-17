import React, { Component } from 'react';

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
                                <li key={idx} style={{color: '#'+Math.random().toString(16).slice(2, 8).toUpperCase()}}>
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

export default Entries;