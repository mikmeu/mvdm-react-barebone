import React from 'react';

function Grid({ num, children }) {
    return (
        <div className={"grid grid-"+num}>
            {children}
        </div>
    );
}

export default Grid;