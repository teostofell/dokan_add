import React from 'react';
import Stats from '../Components/Stats';
import MainImageUploader from '../Components/MainImageUploader';
import ImagesUploader from '../Components/ImagesUploader';


class ImagesStep extends React.Component {
    validate = () => {
        if (confirm('Are you sure you want to go back?')) { // eslint-disable-line
            this.props.previousStep();
        }
    }

    onDrop(e){
        console.log(e);
    }

    render() {
        return (
            <div className="container">
                <div className="new_skeaker_step2">
                <h2 className="sg_title">Show us photos of the item</h2>
                <div className="drag_and_drop_area">
                    <MainImageUploader image={this.props.form.mainPhoto} update={this.props.update}/>
                    <ImagesUploader images={this.props.form.photos} add={this.props.addToCollection} remove={this.props.removeFromCollection} />

                    <Stats step={3} {...this.props} previousStep={this.validate} />
                </div>
                </div>
            </div>
        )
    }
}

export default ImagesStep;