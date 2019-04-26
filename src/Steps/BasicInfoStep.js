import React from 'react';
import Stats from '../Components/Stats';

class BasicInfoStep extends React.Component {
    validate = () => {
        if (confirm('Are you sure you want to go back?')) { // eslint-disable-line
            this.props.previousStep();
        }
    }

    render() {
        return (
            <div>
                { this.props.form.firstname && <h3>Hey {this.props.form.firstname}! 👋</h3> }
                I've added validation to the previous button.
                <Stats step={2} {...this.props} previousStep={this.validate} />
            </div>
        );
    }
}


export default BasicInfoStep;