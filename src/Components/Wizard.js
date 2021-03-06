import React, { Component } from 'react';
import StepWizard from 'react-step-wizard';

import Nav from './Nav';

import StartStep from '../Steps/StartStep';
import BasicInfoStep from '../Steps/BasicInfoStep';

import transitions from './transitions.css';

import API from '../utils/API';
import ImagesStep from '../Steps/ImagesStep';
import LastStep from '../Steps/LastStep';

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

    removeAttributeCollection = (value, key) => {
        const form = {...this.state.form};
        let collection = form[key];

        collection = collection.filter(i => i.id != value);

        form[key] = collection;

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
                <BasicInfoStep hashKey={'SecondStep'} form={this.state.form} attributes={this.state.attributes} update={this.updateForm} 
                    updateSize={this.updateSize} addToCollection={this.addToCollection} removeFromCollection={this.removeAttributeCollection}/>
                <ImagesStep hashKey={'ThirdStep'} form={this.state.form} update={this.updateForm} addToCollection={this.addToCollection} removeFromCollection={this.removeFromCollection}/>
                <LastStep hashKey={'LastStep'} form={this.state.form} attributes={this.state.attributes} update={this.updateForm} />
            </StepWizard>
        );
    }
}

