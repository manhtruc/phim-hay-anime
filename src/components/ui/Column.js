import React from 'react';

const Column = ({ children, size, style }) => {
    return (
        <div className={`col-lg-${size}`} style={style}>
            {children}
        </div>
    );
};

export default Column;