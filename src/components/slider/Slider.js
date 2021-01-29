import React, { useState } from 'react';
import { LEFT, RIGHT } from '../../constant/commons';
import SliderButton from './SliderButton';
import SliderItem from './SliderItem';

const mockCarousel = [
    {
        id: 1,
        label: 'Adventure',
        title: 'Fate / Stay Night: Unlimited Blade Works',
        shortDescription: 'After 30 days of travel across the world...',
        image: 'https://wallpapershome.com/images/pages/ico_h/22683.jpg',
    },
    {
        id: 2,
        label: 'American Honey',
        title: 'Andrea Arnold’s 2016 teen epic about a runaway',
        shortDescription: 'With propulsive energy, an amazing soundtrackd...',
        image: 'https://wallpapershome.com/images/pages/ico_h/22381.jpg',
    },
    {
        id: 3,
        label: 'The Ballad of Buster Scruggs',
        title: 'Joel and Ethan Coen’s Western',
        shortDescription: 'This brilliant Western works as comedy, drama, and even a commentary on the Coens themselves. Don’t miss it',
        image: 'https://wallpapershome.com/images/pages/ico_h/22811.jpg',
    }
];


const Slider = () => {

    const [idActive, setIdActive] = useState(1)

    const renderSliderItem = () => {
        return mockCarousel.map(item =>
            <SliderItem
                idActive={item.id === idActive}
                key={item.id}
                image={item.image}
                label={item.label}
                title={item.title}
                shortDescription={item.shortDescription}
            />)
    }

    const handleChangeSlider = (direction, data) => {
        if (direction === LEFT) {
            setIdActive(idActive > 1 ? idActive - 1 : data.length)
        }
        if (direction === RIGHT) {
            setIdActive(idActive < data.length ? idActive + 1 : 1)
        }
    }

    const renderDots = (data) => {
        return data.map(item => (
            <button key={item.id}
                className={"owl-dot " + (item.id === idActive ? "active" : "")}>
                <span></span>
            </button>
        ))
    }

    return (
        <section className="hero">
            <div className="container">
                <div className="hero__slider owl-carousel">
                    {renderSliderItem()}
                    <div className="owl-nav">
                        <SliderButton direction={LEFT} onClick={() => handleChangeSlider(LEFT, mockCarousel)} />
                        <SliderButton direction={RIGHT} onClick={() => handleChangeSlider(RIGHT, mockCarousel)} />
                    </div>
                    <div className="owl-dots">
                        {renderDots(mockCarousel)}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Slider;