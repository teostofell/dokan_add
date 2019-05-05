import React, { Component } from 'react';
import StepWizard from 'react-step-wizard';

import Nav from './Nav';
import Plugs from './Plugs';
import Stats from './Stats';

import StartStep from '../Steps/StartStep';
import BasicInfoStep from '../Steps/BasicInfoStep';

import transitions from './transitions.css';

import API from '../utils/API';
import ImagesStep from '../Steps/ImagesStep';

export default class Wizard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                category: 'sneakers_new',
                colors: [],
                sizes: [],
                mainPhoto: null,
                photos: [],
            },
            transitions: {
                enterRight: `${transitions.animated} ${transitions.enterRight}`,
                enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
                exitRight: `${transitions.animated} ${transitions.exitRight}`,
                exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
                intro: `${transitions.animated} ${transitions.intro}`,
            },
            attributes: null,
        };
    }

    componentDidMount(){
        API.getAttributes()
            .then(data => this.setState({ attributes: data }));
    }

    updateForm = (key, value) => {
        const { form } = this.state;

        form[key] = value;
        this.setState({ form }, () => console.log(this.state.form));
    }

    updateSize = (key, id, value) => {
        const form = {...this.state.form};
        let collection = form['sizes'];

        for (let size of collection) {
            if(size.id === id){
                size[key] = value;
            }            
        }

        form['sizes'] = collection;

        this.setState({ form }, () => console.log(this.state.form));
    }
    
    addToCollection = (key, value) => {
        const { form } = this.state;
        let collection = form[key];

        collection.push(value);
        
        form[key] = collection;

        this.setState({ form }, () => console.log(this.state.form));
    }

    removeSize = (value) => {
        const form = {...this.state.form};
        let collection = form['sizes'];

        collection = collection.filter(i => i.id != value);

        form['sizes'] = collection;

        this.setState({ form }, () => console.log(this.state.form));
    }

    removeFromCollection = (key, value) => {
        const { form } = this.state;
        let collection = form[key];

        collection.splice(value, 1);

        form[key] = collection;

        this.setState({ form }, () => console.log(this.state.form));
    }

    onStepChange = (stats) => {
        // console.log({ stats });
    }

    render() {
        return (
            <StepWizard
                    onStepChange={this.onStepChange}
                    isHashEnabled
                    transitions={this.state.transitions}
                    nav={<Nav />}
            >
                <StartStep hashKey={'FirstStep'} form={this.state.form} update={this.updateForm} />
                <BasicInfoStep hashKey={'SecondStep'} form={this.state.form} attributes={this.state.attributes} update={this.updateForm} updateSize={this.updateSize} addToCollection={this.addToCollection} removeFromCollection={this.removeSize}/>
                <ImagesStep hashKey={'ThirdStep'} form={this.state.form} update={this.updateForm} addToCollection={this.addToCollection} removeFromCollection={this.removeFromCollection}/>
                <Last hashKey={'TheEnd!'} form={this.state.form} />
            </StepWizard>
        );
    }
}

class Last extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
        }

        this.submit = this.submit.bind(this);
    }



    async submit(){
        this.setState({ isLoading: true });

        const result = await API.postImage(this.props.form.mainPhoto);

        console.log(result);

        this.setState({ isLoading: false });
    }

    render() {
        if(this.state.isLoading)
            return <h2>Loading...</h2>

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
