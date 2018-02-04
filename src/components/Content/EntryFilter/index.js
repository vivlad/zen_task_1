import React from 'react';

const EntryFilter = (props) => (
    <div className="filter-group">
        <p>Filter:</p>
        <div className="btn-group">
            <button 
                type="button"
                className="btn btn-primary btn-xs"
                onClick={() => props.showAll()}
                disabled={props.filter === 'all' ? true : false}
            >
            Show All
            </button>
            <button 
                type="button" 
                className="btn btn-primary btn-xs"
                onClick={() => props.showCompleted()}
                disabled={props.filter === 'completed' ? true : false}
            >
            Completed only
            </button>
        </div>
    </div>

)

export default EntryFilter;