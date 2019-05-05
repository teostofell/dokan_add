import React from 'react';
import Stats from '../Components/Stats';
import BrandSelector from '../Components/BrandSelector';
import CollaborationSelector from '../Components/CollaborationSelector';
import ItemDetailsSelector from '../Components/ItemDetailsSelector';
import ColorwaySelector from '../Components/ColorwaySelector';
import DescriptionSelector from '../Components/DescriptionSelector';
import SizeSelector from '../Components/SizeSelector';

class BasicInfoStep extends React.Component {
    validate = () => {
        if (confirm('Are you sure you want to go back?')) { // eslint-disable-line
            this.props.previousStep();
        }
    }

    render() {
        if(!this.props.attributes)
            return <h2>Loading...</h2>

        return (
            <div className="container">
                <div className="new_skeaker_step4 new_skeaker_step3 new_skeaker_step5">
                    <h2 className="sg_title">So, what the item is like..?</h2>
                    <div className='shipping_method'>
                        <BrandSelector update={this.props.update} brands={this.props.attributes.pa_brand}/>
                        <CollaborationSelector update={this.props.update}/>
                        <ItemDetailsSelector update={this.props.update}/>
                        <ColorwaySelector update={this.props.update} />
                        <DescriptionSelector update={this.props.update} />
                        <SizeSelector sizes={this.props.form.sizes} update={this.props.update} />
                        <Stats step={2} {...this.props} previousStep={this.validate} />
                    </div>
                </div>
            </div>
        );
    }
}


export default BasicInfoStep;