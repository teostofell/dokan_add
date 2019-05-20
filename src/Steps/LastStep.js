import React from 'react';
import Stats from '../Components/Stats';
import API from '../utils/API';
import BrandSelect from '../Components/BrandSelect';
import ItemDetailsSelector from '../Components/ItemDetailsSelector';

class LastStep extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
            isAccepted: false,
        }

        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({ isAccepted: !this.state.isAccepted, });
    }

    async submit(){
        if(!this.state.isAccepted){
            
        }

        this.setState({ isLoading: true });     

        const result = await API.createProduct(this.props.form);

        console.log(result);

        this.setState({ isLoading: false });
    }

    render() {
        if(this.state.isLoading || !this.props.attributes)
            return <h2>Loading...</h2>

        let { brand, model_line, model_name, year } = this.props.form;

        return (
            <div className="container">
                <div className="new_skeaker_step2">
                    <h2 className="sg_title">You are almost done!</h2>
                    <h3 className="sg_sub_title">Check if the listings looks alright,  you can go back to make changes</h3>
                    <div className="product_about_area">
                        <div className="image">
                            <img src="assets/images/shoes.png" alt=""/>
                            <h3 className="multiply_sizes">{brand}</h3>
                            <h4>{model_line}</h4>
                            <p>{model_name} ({year})</p>
                            {/* <div className="price">€350+</div> */}
                        </div>
                        <div className="product_params">
                            <form>
                                <div className="form_group_row">
                                    <BrandSelect update={this.props.update} brand={brand} brands={this.props.attributes.pa_brand}/>
                                </div>
                                <ItemDetailsSelector update={this.props.update} model_line={model_line} model_name={model_name} year={year}/>
                                <div class="terms_conditions">
                                    <h3>Terms and Conditions</h3>
                                    <div>
                                        <input type="checkbox" checked={this.state.isAccepted} name="" onChange={this.handleChange} />
                                        <label>I accept Terms and Conditions of PROOVED marketplace.</label>          
                                    </div>
                                </div>                    
                            </form>
                        </div>
                    </div>
                </div>
                <Stats step={4} {...this.props} nextStep={this.submit} />
            </div>
        );
    }
}

export default LastStep;