import React from 'react';

function PageBuilder({rows}) {
    return (
        <div>
            {rows.map((row,i) => {
                return(<div></div>)
            })}
        </div>
    );
}

export default PageBuilder;