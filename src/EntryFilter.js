import React from 'react';

const EntryFilter = (props) => (
    <div>
        <p>Filter:</p>
        <button 
            type="button"
            onClick={() => props.showAll()}
            disabled={props.filter === 'all' ? true : false}
        >Show All</button>
        <button 
            type="button" 
            onClick={() => props.showCompleted()}
            disabled={props.filter === 'completed' ? true : false}
        >Completed only</button>
    </div>
)

export default EntryFilter;