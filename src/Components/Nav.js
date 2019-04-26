import React from 'react';

const Nav = (props) => {
    const dots = [];
    for (let i = 1; i <= props.totalSteps; i += 1) {
        const isActive = props.currentStep === i;
        dots.push((
            <div
                className="completion_track_1 completion_track_item track_item_start"
                key={`step-${i}`}
                onClick={() => props.goToStep(i)}>

                <div className="number">{i}</div>
                <p>Step</p>

            </div>
        ));
    }

    return (
        <div id="new_listing_sneaker_track_box">
            <div className="completion_track">
                {dots}
            </div>
        </div>
    );
};

export default Nav;
