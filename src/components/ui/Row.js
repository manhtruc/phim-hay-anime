import React from 'react';

const Row = ({ children, style }) => {
    return (
        <div className='row' style={style}>
            {children}
        </div>
    );
};

export default Row;