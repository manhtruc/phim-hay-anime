import React from 'react';
import { RIGHT } from '../../constant/commons';

const SliderButton = ({ direction, onClick }) => {
    return (
        <button type="button"
            role="presentation"
            className={direction === RIGHT ? "owl-next" : "owl-prev"}
            onClick={onClick}>
            <span className={direction === RIGHT ? "arrow_carrot-right" : "arrow_carrot-left"} />
        </button>

    );
};

export default SliderButton;