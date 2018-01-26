import React from 'react';

const EntryFilter = (props) => (
    <div>
        <p>Filter:</p>
        <button type="button" onClick={() => props.showAll()}>Show All</button>
        <button type="button" onClick={() => props.showCompleted()}>Completed</button>
    </div>
)

export default EntryFilter;