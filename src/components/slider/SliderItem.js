import React from 'react';
import { getStyleBackground } from '../../utils/helper'

const SliderItem = ({
    image,
    label,
    shortDescription,
    title,
    idActive
}) => {


    return (
        <div className={"hero__items " + (idActive ? 'active' : '')} style={{ ...getStyleBackground(image) }}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="hero__text">
                        <div className="label">{label}</div>
                        <h2>{title}</h2>
                        <p>{shortDescription}</p>
                        <a href><span>Watch Now</span> <i className="fa fa-angle-right" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderItem;