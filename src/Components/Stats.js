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
                    <button className='btn orange-btn' onClick={nextStep}>Continue</button>
                        :
                    <button className='btn orange-btn' onClick={nextStep}>Finish</button>
                }
            </div>
        </div>


        <hr />
        <div style={{ fontSize: '21px', fontWeight: '200' }}>
            <h4>Other Functions</h4>
            <div>Current Step: {currentStep}</div>
            <div>Total Steps: {totalSteps}</div>
            <button className='btn btn-block btn-default' onClick={firstStep}>First Step</button>
            <button className='btn btn-block btn-default' onClick={lastStep}>Last Step</button>
            <button className='btn btn-block btn-default' onClick={() => goToStep(2)}>Go to Step 2</button>
        </div>
    </footer>
);

export default Stats;