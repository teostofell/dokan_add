import React, { Component } from 'react';
import StepWizard from 'react-step-wizard';

import Nav from './Nav';
import Plugs from './Plugs';
import Stats from './Stats';

import StartStep from '../Steps/StartStep';
import BasicInfoStep from '../Steps/BasicInfoStep';

import transitions from './transitions.css';


export default class Wizard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                category: 'sneakers_new',
            },
            transitions: {
                enterRight: `${transitions.animated} ${transitions.enterRight}`,
                enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
                exitRight: `${transitions.animated} ${transitions.exitRight}`,
                exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
                intro: `${transitions.animated} ${transitions.intro}`,
            },
        };
    }

    updateForm = (key, value) => {
        const { form } = this.state;

        form[key] = value;
        this.setState({ form });
    }

    onStepChange = (stats) => {
        // console.log({ stats });
    }

    render() {
        return (
            <div className='container'>
                <StepWizard
                    onStepChange={this.onStepChange}
                    isHashEnabled
                    transitions={this.state.transitions} // comment out this line to use default transitions
                    nav={<Nav />}
                >
                    <StartStep hashKey={'FirstStep'} form={this.state.form} update={this.updateForm} />
                    <BasicInfoStep form={this.state.form} />
                    <Progress />
                    <Last hashKey={'TheEnd!'} />
                </StepWizard>
            </div>
        );
    }
}


/** Steps */

class Progress extends Component {
    state = {
        isActiveClass: '',
        timeout: null,
    }

    componentDidUpdate() {
        const { timeout } = this.state;

        if (this.props.isActive && !timeout) {
            this.setState({
                timeout: setTimeout(() => {
                    this.props.nextStep();
                }, 3000),
            });
        } else if (!this.props.isActive && timeout) {
            clearTimeout(timeout);
            this.setState({
                isActiveClass: '',
                timeout: null,
            });
        }
    }

    render() {
        return (
            <div>
                <p className='text-center'>Automated Progress...</p>
                <div>
                    <div  />
                </div>
            </div>
        );
    }
}

class Last extends Component {
    submit = () => {
        alert('You did it! Yay!') // eslint-disable-line
    }

    render() {
        return (
            <div>
                <div className={'text-center'}>
                    <h3>This is the last step in this example!</h3>
                    <hr />
                    <Plugs />
                </div>
                <Stats step={4} {...this.props} nextStep={this.submit} />
            </div>
        );
    }
}
