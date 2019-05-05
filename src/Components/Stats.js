import React from 'react';

/**
 * Stats Component - to illustrate the possible functions
 * Could be used for nav buttons or overview
 */
const Stats = ({
    currentStep,
    firstStep,
    goToStep,
    lastStep,
    nextStep,
    previousStep,
    totalSteps,
    step,
}) => (
    <footer>
        <div className="container">
            <div className="orange-btn-group">
                { step > 1 &&
                    <button className='btn orange-btn' onClick={previousStep}>Go Back</button>                    
                }
            </div>
            <div className="orange-btn-group">
                { step < totalSteps ?
                    <button className='btn orange-btn' onClick={nextStep}>Next step</button>
                        :
                    <button className='btn orange-btn' onClick={nextStep}>Finish</button>
                }
            </div>
        </div>


        <hr />
    </footer>
);

export default Stats;